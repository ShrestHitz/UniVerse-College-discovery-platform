import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const ids = searchParams.get("ids");

    if (!ids) return NextResponse.json({ error: "No college IDs provided" }, { status: 400 });

    const idList = ids.split(",").map((id) => parseInt(id)).filter((id) => !isNaN(id));

    if (idList.length < 2 || idList.length > 3) {
      return NextResponse.json({ error: "Provide 2-3 college IDs" }, { status: 400 });
    }

    const colleges = await prisma.college.findMany({
      where: { id: { in: idList } },
      include: {
        courses: true,
        placements: true,
        _count: { select: { reviews: true } },
      },
    });

    return NextResponse.json(colleges);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to compare colleges" }, { status: 500 });
  }
}
