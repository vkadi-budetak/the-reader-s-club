"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SignInSignOut from "../sign-in-sign-out";
import { useSession } from "next-auth/react";

export default function NavBar() {
  const pathname = usePathname();
  const { data: session } = useSession();

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
      <Link
        href="/dashboard"
        className={`text-sm font-serif tracking-wide transition-colors hover:text-red-600 ${
          isActive("/dashboard") ? "text-red-700 font-bold" : "text-zinc-400"
        }`}
      >
        My Library
      </Link>

      {/* Показуємо Admin тільки якщо роль admin */}
      {session?.user?.role === "admin" && (
        <Link
          href="/admin"
          className={`text-sm font-serif tracking-wide transition-colors hover:text-red-600 ${
            isActive("/admin") ? "text-red-700 font-bold" : "text-zinc-400"
          }`}
        >
          Admin
        </Link>
      )}

      <div className="h-4 w-px bg-zinc-800" />
      <SignInSignOut />
    </nav>
  );
}
