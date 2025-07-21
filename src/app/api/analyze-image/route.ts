import { NextRequest, NextResponse } from "next/server";

// 画像解析API（Python FastAPI連携）
export async function POST(req: NextRequest) {
  const { imageUrl } = await req.json();
  // Python API（FastAPI）に画像URLをPOST
  const pyRes = await fetch("http://localhost:8000/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageUrl }),
  });
  const data = await pyRes.json();
  return NextResponse.json(data);
}
