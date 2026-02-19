"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  // Функція для підсвічування активного посилання червоним
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="flex items-center gap-8">
      <Link
        href="/our-history"
        className={`text-sm font-serif tracking-wide transition-colors hover:text-red-600 ${
          isActive("/our-history") ? "text-red-700 font-bold" : "text-zinc-400"
        }`}
      >
        Our Journey
      </Link>

      <Link
        href="/chapters"
        className={`text-sm font-serif tracking-wide transition-colors hover:text-red-600 ${
          isActive("/chapters") ? "text-red-700 font-bold" : "text-zinc-400"
        }`}
      >
        The Chapters
      </Link>

      {/* Розділювач став темнішим */}
      <div className="h-4 w-px bg-zinc-800" />

      <Link
        href="/sign-in"
        className="text-sm font-serif font-bold bg-red-900 text-white px-5 py-2 rounded-sm hover:bg-red-700 transition-all shadow-[0_0_15px_rgba(153,27,27,0.2)] uppercase tracking-tighter"
      >
        Join the Circle
      </Link>
    </nav>
  );
}
