import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

// テストユーザー情報
const TEST_USER = {
  id: "cmdbc4ms400004q9d6nsi7z7m",
  email: "test@example.com",
  password: "password",
};

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  if (email === TEST_USER.email && password === TEST_USER.password) {
    // セッションCookie保存
    const cookieStore = await cookies();
    await cookieStore.set({
      name: "userId",
      value: TEST_USER.id,
      path: "/",
      httpOnly: true,
    });
    return NextResponse.json({ success: true, userId: TEST_USER.id });
  } else {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}
