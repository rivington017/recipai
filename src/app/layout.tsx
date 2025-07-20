import type { Metadata } from "next";
import { Inter } from "next/font/google";

import AppHeader from "@/components/AppHeader";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RECIPAI - AI料理レシピ提案アプリ",
  description: "冷蔵庫の写真を撮るだけでAIが美味しいレシピを提案します",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <AppHeader />
        <div className="pt-14 min-h-screen bg-gray-50">{children}</div>
      </body>
    </html>
  );
}
