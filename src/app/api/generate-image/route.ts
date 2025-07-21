import { NextRequest, NextResponse } from "next/server";

// 画像生成API（public/generate_image.pngを返す）
export async function POST(req: NextRequest) {
  // const { prompt } = await req.json(); // 今は未使用
  // Next.jsのpublic配下の画像URLを返す
  return NextResponse.json({ imageUrl: "/generate_image.png" });
}
