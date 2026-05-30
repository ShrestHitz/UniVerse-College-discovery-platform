import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { exam, rank, category } = await req.json();

    if (!exam || !rank || !category) {
      return NextResponse.json({ error: "exam, rank, and category are required" }, { status: 400 });
    }

    const examRecord = await prisma.exam.findFirst({
      where: { name: { contains: exam, mode: "insensitive" } },
    });

    if (!examRecord) {
      return NextResponse.json({ error: "Exam not found" }, { status: 404 });
    }

    const cutoffs = await prisma.cutoff.findMany({
      where: {
        examId: examRecord.id,
        category: { equals: category, mode: "insensitive" },
        closingRank: { gte: parseInt(rank) },
      },
      include: {
        college: {
          include: { placements: true },
        },
        course: true,
      },
      orderBy: { closingRank: "asc" },
      take: 20,
    });

    const results = cutoffs.map((c) => ({
      college: {
        id: c.college.id,
        name: c.college.name,
        location: c.college.location,
        state: c.college.state,
        rating: c.college.rating,
        images: c.college.images,
        nirfRanking: c.college.nirfRanking,
        placements: c.college.placements[0] || null,
      },
      course: { name: c.course.name },
      closingRank: c.closingRank,
      openingRank: c.openingRank,
      category: c.category,
    }));

    // Save session if user is logged in
    const session = await getServerSession(authOptions);
    if (session?.user) {
      const userId = parseInt((session.user as { id: string }).id);
      await prisma.predictorSession.create({
        data: {
          userId,
          exam,
          rank: parseInt(rank),
          category,
          recommendedColleges: results,
        },
      });
    }

    return NextResponse.json({ results, exam, rank, category });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Predictor failed" }, { status: 500 });
  }
}
