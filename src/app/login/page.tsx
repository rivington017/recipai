"use client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/upload");
  };
  return (
    <main className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">ログイン</h1>
      <div className="mb-4 p-3 bg-gray-100 rounded text-sm">
        <div className="font-bold mb-1">サンプルアカウント</div>
        <div>
          メールアドレス: <span className="font-mono">sample@example.com</span>
        </div>
        <div>
          パスワード: <span className="font-mono">password123</span>
        </div>
      </div>
      <div className="mb-2 text-gray-600 text-sm">
        ※
        テストのため何も入力しなくてもログインボタンを押すと次のページに進みます。
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleLogin}>
        <input
          className="border rounded px-2 py-1"
          placeholder="メールアドレス"
        />
        <input
          className="border rounded px-2 py-1"
          placeholder="パスワード"
          type="password"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          ログイン
        </button>
      </form>
      <p className="mt-4 text-sm text-center text-gray-500">
        アカウントをお持ちでない方は新規登録へ
      </p>
    </main>
  );
}
