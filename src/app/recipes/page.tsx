"use client";
import BottomNav from "@/components/BottomNav";
import Link from "next/link";

export default function RecipesPage() {
  return (
    <main className="flex flex-col min-h-screen pb-16 bg-white sm:bg-gray-50">
      <div className="w-full max-w-md mx-auto p-4 sm:p-6">
        <h1 className="text-2xl font-bold mb-4">レシピ提案一覧</h1>
        <ul className="space-y-4">
          {[1, 2, 3].map((i) => (
            <li key={i} className="border rounded p-4 bg-white shadow-sm">
              <div className="font-bold">レシピタイトル {i}</div>
              <div className="text-sm text-gray-500">
                材料例: たまご, 牛乳, トマト
              </div>
              <Link
                href={`/recipes/${i}`}
                className="text-blue-500 hover:underline mt-2 block"
              >
                詳細を見る
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <BottomNav />
    </main>
  );
}
