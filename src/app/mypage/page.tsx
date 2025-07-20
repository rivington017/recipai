"use client";

export default function MyPage() {
  return (
    <main className="flex flex-col min-h-screen pb-16 bg-white sm:bg-gray-50">
      <div className="w-full max-w-md mx-auto p-4 sm:p-6">
        <h1 className="text-2xl font-bold mb-4">マイページ</h1>
        {/* ユーザー情報や設定UIは後で追加 */}
        <div className="text-gray-500">
          ユーザー情報や設定がここに表示されます。
        </div>
      </div>
    </main>
  );
}
