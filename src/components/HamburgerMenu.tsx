"use client";
import Link from "next/link";
import { useState } from "react";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button
        className="flex items-center px-3 py-2 border rounded text-gray-600 border-gray-400"
        onClick={() => setOpen((v) => !v)}
        aria-label="メニューを開く"
      >
        <svg className="fill-current h-6 w-6" viewBox="0 0 20 20">
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-4 top-16 bg-white shadow-lg rounded-md py-2 w-40 z-50">
          <Link
            href="/login"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            ログイン
          </Link>
          <Link
            href="/register"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            新規登録
          </Link>
        </div>
      )}
    </div>
  );
}
