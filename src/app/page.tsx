import Link from "next/link";
import { Camera, ChefHat, Heart, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <ChefHat className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">
                RECIPAI
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/login"
                className="text-gray-600 hover:text-primary-600"
              >
                ログイン
              </Link>
              <Link
                href="/register"
                className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700"
              >
                新規登録
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main>
        {/* ヒーローセクション */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              冷蔵庫の写真を撮るだけで
              <span className="text-primary-600 block">
                美味しいレシピを提案
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              AIが冷蔵庫の中身を認識して、あなたにぴったりのレシピを提案します。
              食材の無駄をなくし、毎日の献立を楽しく簡単に。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                今すぐ始める
              </Link>
              <Link
                href="/demo"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                デモを見る
              </Link>
            </div>
          </div>
        </section>

        {/* 機能紹介セクション */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                3つの簡単ステップ
              </h2>
              <p className="text-lg text-gray-600">
                誰でも簡単に美味しいレシピが見つかります
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  1. 写真を撮る
                </h3>
                <p className="text-gray-600">
                  冷蔵庫の中身をスマートフォンで撮影するだけ
                </p>
              </div>

              <div className="text-center">
                <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-secondary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  2. AIが解析
                </h3>
                <p className="text-gray-600">
                  AIが食材を自動認識し、最適なレシピを検索
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  3. 調理開始
                </h3>
                <p className="text-gray-600">
                  詳しい手順を見ながら美味しい料理を作る
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 特徴セクション */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                RECIPAIの特徴
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  高精度なAI認識
                </h3>
                <p className="text-gray-600">
                  Google Cloud Vision AIを使用し、食材を正確に認識します
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  豊富なレシピ
                </h3>
                <p className="text-gray-600">
                  OpenAI GPT-4により、無限のレシピバリエーションを提供
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  お気に入り機能
                </h3>
                <p className="text-gray-600">
                  気に入ったレシピを保存して、いつでも確認できます
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  食材管理
                </h3>
                <p className="text-gray-600">
                  認識した食材リストを編集・追加して正確な提案を受けられます
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  レシピ履歴
                </h3>
                <p className="text-gray-600">
                  過去のレシピ提案を振り返って、再度作ることができます
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  簡単操作
                </h3>
                <p className="text-gray-600">
                  直感的なUIで、誰でも簡単に使えるデザインです
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <ChefHat className="h-8 w-8 text-primary-400" />
              <span className="ml-2 text-2xl font-bold">RECIPAI</span>
            </div>
            <p className="text-gray-400 mb-4">
              AIが提案する美味しいレシピで、毎日の食事をもっと楽しく
            </p>
            <div className="flex justify-center space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white">
                プライバシーポリシー
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white">
                利用規約
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white">
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
