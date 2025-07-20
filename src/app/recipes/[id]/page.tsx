"use client";
import BottomNav from "@/components/BottomNav";
import { useParams } from "next/navigation";

export default function RecipeDetailPage() {
  const { id } = useParams();
  // 仮データ
  const recipe = {
    title: `レシピタイトル ${id}`,
    imageUrl: "",
    estimatedTime: "20分",
    ingredients: ["たまご", "牛乳", "トマト"],
    instructions: ["材料を混ぜる", "焼く", "盛り付ける"],
    isFavorite: id === "2",
    authorName: "他ユーザーA",
  };
  return (
    <main className="flex flex-col min-h-screen pb-16 bg-white sm:bg-gray-50">
      <div className="w-full max-w-md mx-auto p-4 sm:p-6">
        <div className="h-48 bg-gray-100 rounded mb-4 flex items-center justify-center">
          {recipe.imageUrl ? (
            <img
              src={recipe.imageUrl}
              alt={recipe.title}
              className="h-full object-cover rounded"
            />
          ) : (
            "画像"
          )}
        </div>
        <h1 className="text-2xl font-bold mb-2 flex items-center gap-2">
          {recipe.title}
          {recipe.isFavorite && <span className="text-yellow-400">★</span>}
        </h1>
        <div className="mb-2 text-gray-600">
          調理時間: {recipe.estimatedTime}
        </div>
        <div className="text-xs text-gray-500 mb-2">by {recipe.authorName}</div>
        <h2 className="font-semibold mt-4 mb-2">材料</h2>
        <ul className="list-disc list-inside mb-4">
          {recipe.ingredients.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <h2 className="font-semibold mb-2">手順</h2>
        <ol className="list-decimal list-inside mb-4">
          {recipe.instructions.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
        <div className="flex gap-2 mt-4">
          <button className="flex-1 bg-yellow-400 text-white rounded-lg py-2 font-bold hover:bg-yellow-500 transition">
            お気に入りに追加
          </button>
          <button className="flex-1 bg-blue-600 text-white rounded-lg py-2 font-bold hover:bg-blue-700 transition">
            シェア
          </button>
        </div>
      </div>
      <BottomNav />
    </main>
  );
}
