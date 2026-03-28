"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  BookOpen,
  Lock,
  Library,
  ChevronDown,
} from "lucide-react";
import { DynamicSidebar } from "@/components/dynamic-sidebar";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function BookDetails({ params }: PageProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { id: bookId } = React.use(params);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 pb-20 pt-24">
      {/* ВЕРХНЯ ПАНЕЛЬ НАВІГАЦІЇ */}
      <div className="container mx-auto px-6 flex justify-between items-center mb-16 relative">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-zinc-600 hover:text-red-700 transition-colors font-mono text-[10px] uppercase tracking-widest w-fit"
        >
          <ChevronLeft size={14} /> Back to Library
        </Link>

        {/* КОНТЕЙНЕР ДЛЯ КНОПКИ ТА ВИПАДАЮЧОГО МЕНЮ */}
        <div
          className="relative"
          onMouseEnter={() => setIsMenuOpen(true)}
          onMouseLeave={() => setIsMenuOpen(false)}
        >
          <button
            className={`flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest border px-4 py-2 transition-all duration-300 ${
              isMenuOpen
                ? "border-red-900 text-white bg-red-900/5"
                : "border-zinc-900 text-zinc-500"
            }`}
          >
            Explore Archive
            <Library
              size={14}
              className={isMenuOpen ? "text-red-700" : "text-zinc-700"}
            />
            <ChevronDown
              size={12}
              className={`transition-transform duration-300 ${isMenuOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* ВИПАДАЮЧЕ МЕНЮ (Side-Menu) */}
          <div
            className={`absolute top-full right-0 mt-2 w-80 z-[100] transition-all duration-300 origin-top-right ${
              isMenuOpen
                ? "opacity-100 scale-100 translate-y-0 visible"
                : "opacity-0 scale-95 -translate-y-2 invisible"
            }`}
          >
            <div className="bg-zinc-950 border border-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,1)] p-2">
              <DynamicSidebar />
            </div>
          </div>
        </div>
      </div>

      {/* ОСНОВНИЙ КОНТЕНТ (ЦЕНТРОВАНИЙ) */}
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="space-y-16">
          {/* Header книги */}
          <div className="flex flex-col md:flex-row gap-10 border-b border-zinc-900 pb-12">
            <div className="w-48 h-64 bg-zinc-900 border border-zinc-800 flex-shrink-0 shadow-2xl flex items-center justify-center italic text-zinc-800 text-xs text-center p-4">
              {bookId.replace(/-/g, " ")}
            </div>
            <div className="flex flex-col justify-end space-y-4">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white uppercase tracking-tighter leading-tight">
                Lawyer on Lincoln
              </h1>
              <p className="text-red-900 font-mono text-sm uppercase tracking-[0.2em] border-l-2 border-red-900 pl-4">
                By The Witness
              </p>
            </div>
          </div>

          {/* Synopsis */}
          <section className="space-y-6">
            <h2 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em] border-b border-zinc-900 pb-2">
              Synopsis
            </h2>
            <p className="text-gray-400 font-serif leading-relaxed text-2xl italic">
              The wind whistled through the cracks of the old Lincoln as the
              lawyer drove off to his next case...
            </p>
          </section>

          {/* Table of Contents */}
          <section className="space-y-8 pb-20">
            <h2 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em] border-b border-zinc-900 pb-2">
              Table of Contents
            </h2>
            <div className="grid gap-4">
              <Link
                href={`/books/${bookId}/chapters/1`}
                className="group bg-zinc-950 border border-zinc-900 p-6 rounded-sm flex items-center justify-between hover:border-red-900/40 transition-all"
              >
                <div className="flex items-center gap-6">
                  <span className="text-red-900 font-mono text-xl font-bold">
                    01
                  </span>
                  <h4 className="text-white text-xl font-serif group-hover:text-red-700 transition-colors">
                    The First Witness
                  </h4>
                </div>
                <BookOpen
                  size={20}
                  className="text-zinc-800 group-hover:text-red-900"
                />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
