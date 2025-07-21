import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// レシピ保存API
export async function POST(req: NextRequest) {
  const { title, description, instructions, imageUrl, estimatedTime, userId } =
    await req.json();

  // 画像をBlobに保存（public画像をfetchしてアップロード）
  let blobUrl = "";
  try {
    const imgRes = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL || "https://" + req.headers.get("host")}/generate_image.png`
    );
    const imgBuffer = await imgRes.arrayBuffer();
    const blob = await put(
      `recipes/${Date.now()}.png`,
      Buffer.from(imgBuffer),
      {
        access: "public",
        token: process.env.BLOB_READ_WRITE_TOKEN,
        contentType: "image/png",
      }
    );
    blobUrl = blob.url;
  } catch (e) {
    return NextResponse.json({ error: "Blob保存失敗" }, { status: 500 });
  }

  // DBにレシピ保存
  try {
    const recipe = await prisma.recipe.create({
      data: {
        userId,
        title,
        description,
        instructions,
        imageUrl: blobUrl,
        estimatedTime,
      },
    });
    return NextResponse.json({ id: recipe.id });
  } catch (e) {
    return NextResponse.json({ error: "DB保存失敗" }, { status: 500 });
  }
}
