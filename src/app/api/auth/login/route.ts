import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  // DBからユーザー取得
  const user = await prisma.user.findUnique({ where: { email } });
  if (user && user.password === password) {
    // セッションCookie保存
    const cookieStore = await cookies();
    await cookieStore.set({
      name: "userId",
      value: user.id,
      path: "/",
      httpOnly: true,
    });
    return NextResponse.json({ success: true, userId: user.id });
  } else {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}
