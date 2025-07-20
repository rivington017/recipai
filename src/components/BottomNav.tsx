"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/upload", label: "撮影", icon: "📷" },
  { href: "/ingredients", label: "材料", icon: "🥕" },
  { href: "/search", label: "検索", icon: "🔍" },
  { href: "/history", label: "履歴", icon: "🕑" },
  // { href: "/mypage", label: "マイページ", icon: "👤" }, // 非表示
];

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t z-50 shadow-md md:hidden">
      <ul className="flex justify-between items-center h-16 px-1">
        {navItems.map((item) => {
          const active = pathname && pathname.startsWith(item.href);
          return (
            <li key={item.href} className="flex-1">
              <Link
                href={item.href}
                className={`flex flex-col items-center justify-center py-2 rounded transition-colors duration-200 ${
                  active
                    ? "text-blue-600 font-bold bg-blue-50"
                    : "text-gray-500"
                }`}
                style={{ minWidth: 0 }}
              >
                <span className="text-xl mb-0.5" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="text-[11px] leading-tight">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
