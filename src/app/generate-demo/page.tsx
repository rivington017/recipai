"use client";
import { useState } from "react";

export default function GenerateDemoPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setImageUrl("");
    const res = await fetch("/api/generate-image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: "テスト" }),
    });
    const data = await res.json();
    setImageUrl(data.imageUrl);
    setLoading(false);
  };

  return (
    <main className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">画像生成デモ</h1>
      <button
        onClick={handleGenerate}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4"
        disabled={loading}
      >
        {loading ? "生成中..." : "画像生成"}
      </button>
      {imageUrl && (
        <div className="mt-4">
          <img src={imageUrl} alt="生成画像" className="rounded shadow" />
        </div>
      )}
    </main>
  );
}
