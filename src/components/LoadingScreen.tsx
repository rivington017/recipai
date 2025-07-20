"use client";
export default function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50 mb-6"></div>
      <p className="text-lg font-semibold text-gray-700">
        AIが冷蔵庫の中をのぞいています…
      </p>
    </div>
  );
}
