"use client";
import { useState } from "react";

export default function AppHeader() {
  const [open, setOpen] = useState(false);
  const [mypageOpen, setMypageOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-14 bg-white border-b flex items-center px-4 shadow-sm">
      {/* ハンバーガーメニュー */}
      <button
        className="mr-3 flex flex-col justify-center items-center w-9 h-9 p-1 rounded hover:bg-gray-100 focus:outline-none"
        aria-label="メニューを開く"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="block w-6 h-0.5 bg-gray-800 mb-1" />
        <span className="block w-6 h-0.5 bg-gray-800 mb-1" />
        <span className="block w-6 h-0.5 bg-gray-800" />
      </button>
      <span className="font-bold text-lg tracking-wide">RECIPAI</span>
      {/* メニュー（サイドドロワー風） */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/30"
          onClick={() => setOpen(false)}
        >
          <nav
            className="absolute top-0 left-0 w-64 h-full bg-white shadow-lg p-6 flex flex-col gap-4 animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="self-end mb-4"
              onClick={() => setOpen(false)}
              aria-label="閉じる"
            >
              <span className="text-2xl">×</span>
            </button>
            <a
              href="/upload"
              className="py-2 text-gray-700 hover:text-blue-600"
            >
              撮影
            </a>
            <a
              href="/ingredients"
              className="py-2 text-gray-700 hover:text-blue-600"
            >
              材料
            </a>
            <a
              href="/search"
              className="py-2 text-gray-700 hover:text-blue-600"
            >
              検索
            </a>
            <a
              href="/history"
              className="py-2 text-gray-700 hover:text-blue-600"
            >
              履歴
            </a>
            <button
              className="py-2 text-gray-700 hover:text-blue-600 text-left"
              onClick={() => {
                setMypageOpen(true);
                setOpen(false);
              }}
            >
              マイページ
            </button>
            {/* 追加メニューはここに */}
          </nav>
        </div>
      )}

      {/* マイページダイアログ（サイドメニュー外に分離） */}
      {mypageOpen && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/30"
          onClick={() => setMypageOpen(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg w-full max-w-sm p-6 relative animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-2xl"
              onClick={() => setMypageOpen(false)}
              aria-label="閉じる"
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4">マイページ</h2>
            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  メールアドレス
                </label>
                <input
                  type="email"
                  className="w-full border rounded px-3 py-2"
                  placeholder="example@email.com"
                  autoComplete="email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  新しいパスワード
                </label>
                <input
                  type="password"
                  className="w-full border rounded px-3 py-2"
                  placeholder="新しいパスワード"
                  autoComplete="new-password"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white rounded py-2 font-bold hover:bg-blue-700 transition"
              >
                変更を保存
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}
