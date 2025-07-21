import { NextRequest, NextResponse } from "next/server";

// 画像生成API（ダミー画像URLを直接返す）
export async function POST(req: NextRequest) {
  // const { prompt } = await req.json(); // 今は未使用
  return NextResponse.json({ imageUrl: "https://placehold.jp/400x300.png" });
}
