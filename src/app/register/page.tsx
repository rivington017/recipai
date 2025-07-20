"use client";
export default function RegisterPage() {
  return (
    <main className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">新規登録</h1>
      <form className="flex flex-col gap-4">
        <input
          className="border rounded px-2 py-1"
          placeholder="メールアドレス"
        />
        <input
          className="border rounded px-2 py-1"
          placeholder="パスワード"
          type="password"
        />
        <input
          className="border rounded px-2 py-1"
          placeholder="パスワード（確認）"
          type="password"
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          登録
        </button>
      </form>
    </main>
  );
}
