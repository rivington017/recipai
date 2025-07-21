import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";

// PrismaClientをグローバルに管理（型エラー回避）
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    let userId = body.userId;
    if (!userId) {
      const cookieStore = await cookies();
      userId = (await cookieStore.get("userId"))?.value || "";
    }
    if (!userId) {
      return NextResponse.json({ error: "userId missing" }, { status: 401 });
    }

    let blobUrl = body.imageUrl;

    const recipe = await prisma.recipe.create({
      data: {
        userId,
        title: body.title,
        description: body.description,
        instructions: body.instructions,
        imageUrl: blobUrl,
        estimatedTime: body.estimatedTime,
      },
    });

    return NextResponse.json({ id: recipe.id });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
