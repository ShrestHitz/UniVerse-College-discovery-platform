import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search") || "";
    const state = searchParams.get("state") || "";
    const type = searchParams.get("type") || "";
    const sortBy = searchParams.get("sortBy") || "rating";
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "9");

    const where = {
      ...(search && {
        OR: [
          { name: { contains: search, mode: "insensitive" as const } },
          { location: { contains: search, mode: "insensitive" as const } },
          { state: { contains: search, mode: "insensitive" as const } },
        ],
      }),
      ...(state && { state: { equals: state, mode: "insensitive" as const } }),
      ...(type && { type }),
    };

    const orderBy =
      sortBy === "fees"
        ? { fees: "asc" as const }
        : sortBy === "nirfRanking"
        ? { nirfRanking: "asc" as const }
        : { rating: "desc" as const };

    const [colleges, total] = await Promise.all([
      prisma.college.findMany({
        where,
        include: {
          placements: true,
          _count: { select: { reviews: true } },
        },
        orderBy,
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.college.count({ where }),
    ]);

    return NextResponse.json({
      colleges,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch colleges" }, { status: 500 });
  }
}
