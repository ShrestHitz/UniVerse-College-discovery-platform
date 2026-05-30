import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { collegeId, rating, title, comment } = await req.json();

  if (!collegeId || !rating || !title || !comment) {
    return NextResponse.json({ error: "All fields required" }, { status: 400 });
  }

  const userId = parseInt((session.user as { id: string }).id);

  const review = await prisma.review.create({
    data: { collegeId, userId, rating: parseFloat(rating), title, comment },
    include: { user: { select: { name: true } } },
  });

  return NextResponse.json(review, { status: 201 });
}
