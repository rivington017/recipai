"use client";
export default function SettingsPage() {
  return (
    <main className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">ユーザー設定</h1>
      <form className="flex flex-col gap-4">
        <input className="border rounded px-2 py-1" placeholder="ユーザー名" />
        <input
          className="border rounded px-2 py-1"
          placeholder="メールアドレス"
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          保存
        </button>
      </form>
    </main>
  );
}
