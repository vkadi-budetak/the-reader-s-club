"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="flex items-center gap-8">
      <Link
        href="/our-history"
        className={`text-sm font-medium transition-colors hover:text-blue-600 ${
          isActive("/our-history") ? "text-blue-600" : "text-gray-600"
        }`}
      >
        Our History
      </Link>
      <Link
        href="/chapters"
        className={`text-sm font-medium transition-colors hover:text-blue-600 ${
          isActive("/chapters") ? "text-blue-600" : "text-gray-600"
        }`}
      >
        Chapters
      </Link>
      <div className="h-4 w-px bg-gray-200" />
      <Link
        href="/sign-in"
        className="text-sm font-semibold bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-all"
      >
        Sign In
      </Link>
    </nav>
  );
}
