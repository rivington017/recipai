import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";
import { put } from "@vercel/blob";
import path from "path";
import fs from "fs/promises";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();
  // userIdはbody or Cookieから取得
  let userId = body.userId;
  if (!userId) {
    const cookieStore = await cookies();
    userId = (await cookieStore.get("userId"))?.value || "";
  }
  if (!userId) {
    return NextResponse.json({ error: "userId missing" }, { status: 401 });
  }

  // 画像はクライアント側でBlobアップロード済みのURLを受け取る
  let blobUrl = body.imageUrl;

  // DB保存
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
}
