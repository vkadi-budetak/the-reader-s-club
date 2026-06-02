"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SignInSignOut from "../sign-in-sign-out";
import { useSession } from "next-auth/react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const links = [
    { href: "/our-history", label: "Our Journey" },
    { href: "/chapters", label: "The Chapters" },
    { href: "/dashboard", label: "My Library" },
  ];

  return (
    <div className="flex items-center gap-3 md:gap-8">
      {/* Десктопна навігація: Видна від 768px (md) */}
      <nav className="hidden md:flex items-center gap-6 lg:gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-serif tracking-wide transition-colors hover:text-red-600 ${
              isActive(link.href) ? "text-red-700 font-bold" : "text-zinc-400"
            }`}
          >
            {link.label}
          </Link>
        ))}

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
        <div className="h-4 w-px bg-zinc-800 mx-2" />
      </nav>

      {/* Кнопка авторизації: Видна завжди */}
      <SignInSignOut />

      {/* Бургер-кнопка: Видна ТІЛЬКИ на мобільних (до 768px) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-zinc-400 hover:text-red-600 transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Мобільне випадаюче меню */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-zinc-900 md:hidden z-50 flex flex-col p-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-base font-serif tracking-widest transition-colors ${
                isActive(link.href) ? "text-red-700 font-bold" : "text-zinc-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {session?.user?.role === "admin" && (
            <Link
              href="/admin"
              onClick={() => setIsOpen(false)}
              className={`text-base font-serif tracking-widest transition-colors ${
                isActive("/admin") ? "text-red-700 font-bold" : "text-zinc-400"
              }`}
            >
              Admin
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
