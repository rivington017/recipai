"use client";
import BottomNav from "@/components/BottomNav";
import { useState } from "react";

export default function UploadPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [images, setImages] = useState<string[]>(["", "", "", "", ""]);
  const [loading, setLoading] = useState(false);

  // レシピ候補画像を生成APIで取得
  const handleShowRecipes = async () => {
    setModalOpen(true);
    setLoading(true);
    // 5件分画像生成APIを呼ぶ
    const results = await Promise.all(
      Array(5)
        .fill(0)
        .map(() =>
          fetch("/api/generate-image", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt: "おすすめレシピ" }),
          })
            .then((res) => res.json())
            .then((data) => data.imageUrl)
        )
    );
    setImages(results);
    setLoading(false);
  };

  return (
    <main className="flex flex-col min-h-screen pb-16 bg-white sm:bg-gray-50">
      <div className="flex flex-col items-center justify-center flex-1 w-full max-w-md mx-auto p-4 sm:p-6">
        <div className="bg-gray-100 rounded-full p-6 mb-6">
          <span className="text-5xl">📷</span>
        </div>
        <button className="w-64 max-w-full bg-blue-600 text-white rounded-lg py-3 mb-3 font-bold text-lg hover:bg-blue-700 transition">
          冷蔵庫を撮る
        </button>
        <button className="w-64 max-w-full bg-gray-200 text-gray-700 rounded-lg py-3 font-bold text-lg hover:bg-gray-300 transition">
          写真を選ぶ
        </button>
        {/* レシピ候補を表示するボタン */}
        <button
          className="w-64 max-w-full bg-yellow-400 text-white rounded-lg py-3 mt-6 font-bold text-lg hover:bg-yellow-500 transition"
          onClick={handleShowRecipes}
        >
          レシピ候補を見る
        </button>
        {/* レシピ候補モーダル */}
        {modalOpen && (
          <div className="fixed inset-0 z-[9999] bg-black bg-opacity-40 flex items-center justify-center">
            <div className="bg-white rounded-lg w-[320px] max-w-full p-4 flex flex-col items-center relative">
              <button
                className="absolute top-2 right-2 text-gray-400 text-2xl"
                onClick={() => setModalOpen(false)}
                aria-label="閉じる"
              >
                ×
              </button>
              <h2 className="text-lg font-bold mb-4">おすすめレシピ候補</h2>
              {loading ? (
                <div className="text-center py-8">画像生成中...</div>
              ) : (
                <div className="w-full overflow-x-auto flex gap-4 pb-2">
                  {images.map((img, i) => (
                    <div
                      key={i}
                      className="min-w-[280px] max-w-[280px] bg-gray-50 border rounded-xl shadow p-4 flex-shrink-0 flex flex-col items-stretch h-[420px]"
                    >
                      <div className="h-40 w-full bg-gray-200 rounded mb-3 flex items-center justify-center overflow-hidden">
                        {img ? (
                          <img
                            src={img}
                            alt={`レシピ${i + 1}`}
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          "画像"
                        )}
                      </div>
                      <div className="font-bold text-lg mb-1">
                        レシピ候補 {i + 1}
                      </div>
                      <div className="text-xs text-gray-500 mb-1">
                        材料例: たまご, 牛乳, トマト
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                        <span>調理時間: 20分</span>
                        <span>・</span>
                        <span>難易度: ★★☆</span>
                      </div>
                      <div className="text-xs text-gray-400 mb-2">
                        カロリー: 350kcal
                      </div>
                      <div className="text-xs text-gray-700 mb-3 line-clamp-3">
                        ふわふわ卵とトマトの優しい味わい。忙しい日でも簡単に作れるおすすめレシピです。
                      </div>
                      <div className="flex-1" />
                      <button
                        className="w-full bg-blue-600 text-white rounded py-2 font-bold hover:bg-blue-700 transition mt-2"
                        onClick={() => {
                          alert(`レシピ候補${i + 1}を選択（仮）`);
                        }}
                      >
                        このレシピを選ぶ
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <div className="text-xs text-gray-400 mt-2">
                左右にスライドして選択できます
              </div>
            </div>
          </div>
        )}
      </div>
      <BottomNav />
    </main>
  );
}
