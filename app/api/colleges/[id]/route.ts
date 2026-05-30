import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    if (isNaN(id)) return NextResponse.json({ error: "Invalid ID" }, { status: 400 });

    const college = await prisma.college.findUnique({
      where: { id },
      include: {
        courses: true,
        placements: true,
        reviews: {
          include: { user: { select: { name: true } } },
          orderBy: { createdAt: "desc" },
        },
        _count: { select: { reviews: true } },
      },
    });

    if (!college) return NextResponse.json({ error: "College not found" }, { status: 404 });

    return NextResponse.json(college);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch college" }, { status: 500 });
  }
}
