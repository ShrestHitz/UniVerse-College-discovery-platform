import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const userId = parseInt((session.user as { id: string }).id);
  const saved = await prisma.savedCollege.findMany({
    where: { userId },
    include: {
      college: {
        include: { placements: true, _count: { select: { reviews: true } } },
      },
    },
  });

  return NextResponse.json(saved.map((s) => s.college));
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { collegeId } = await req.json();
  const userId = parseInt((session.user as { id: string }).id);

  const existing = await prisma.savedCollege.findUnique({
    where: { userId_collegeId: { userId, collegeId } },
  });

  if (existing) {
    await prisma.savedCollege.delete({ where: { id: existing.id } });
    return NextResponse.json({ saved: false });
  }

  await prisma.savedCollege.create({ data: { userId, collegeId } });
  return NextResponse.json({ saved: true });
}
