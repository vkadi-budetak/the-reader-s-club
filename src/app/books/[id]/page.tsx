import React from "react";
import Link from "next/link";
import {
  ChevronLeft,
  Lock,
  Library,
  ChevronDown,
  Sparkles,
  ChevronRight
} from "lucide-react";
import { DynamicSidebar } from "@/components/dynamic-sidebar";
import { db } from "@/db";
import { booksTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { BookViewer } from "./book-viewer"; // Створимо окремий клієнтський компонент для плеєра

interface PageProps {
  params: Promise<{ id: string }>;
}

export const dynamic = "force-dynamic";

export default async function BookDetails({ params }: PageProps) {
  const { id: bookSlug } = await params;

  // Отримуємо дані книги з бази
  const [book] = await db
    .select()
    .from(booksTable)
    .where(eq(booksTable.slug, bookSlug))
    .limit(1);

  if (!book) {
    notFound();
  }

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

        {/* Explore Archive Dropdown - ми можемо залишити його статичним або додати клієнтську логіку */}
        <div className="relative group">
          <button
            className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest border border-zinc-900 text-zinc-500 px-4 py-2 transition-all duration-300 group-hover:border-red-900 group-hover:text-white group-hover:bg-red-900/5"
          >
            Explore Archive
            <Library size={14} className="group-hover:text-red-700 transition-colors" />
            <ChevronDown size={12} className="transition-transform duration-300 group-hover:rotate-180" />
          </button>

          <div className="absolute top-full right-0 mt-2 w-80 z-[100] opacity-0 scale-95 -translate-y-2 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 origin-top-right">
            <div className="bg-zinc-950 border border-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,1)] p-2">
              <DynamicSidebar />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl">
        <div className="space-y-16">
          {/* Header книги */}
          <div className="flex flex-col md:flex-row gap-10 border-b border-zinc-900 pb-12">
            <div className="w-48 h-64 bg-zinc-900 border border-zinc-800 flex-shrink-0 shadow-2xl flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-[url('/book.jpg')] bg-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700" />
               <p className="relative z-10 font-serif text-white text-[10px] text-center p-4 font-bold uppercase tracking-[0.2em] leading-relaxed">
                {book.title}
               </p>
            </div>
            <div className="flex flex-col justify-end space-y-4">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white uppercase tracking-tighter leading-tight">
                {book.title}
              </h1>
              <p className="text-red-900 font-mono text-sm uppercase tracking-[0.2em] border-l-2 border-red-900 pl-4">
                By The Witness
              </p>
            </div>
          </div>

          {/* Interactive Snippets Section - виносимо в Client Component */}
          <BookViewer />

          {/* Discussion Entry Point */}
          <section className="mt-12">
            <Link href={`/books/${bookSlug}/comments`}>
              <div className="group border border-zinc-900 bg-zinc-950/40 p-8 hover:border-red-900/50 transition-all duration-500 cursor-pointer overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Sparkles size={100} />
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif font-bold text-white uppercase tracking-tight group-hover:text-red-700 transition-colors">
                      The Forbidden <span className="text-red-900">Testimonies</span>
                    </h3>
                    <p className="text-zinc-500 text-xs italic font-serif">
                      Read what others are whispering about this volume in the shadows.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-red-900 font-mono text-[10px] uppercase tracking-[0.2em]">
                    Enter the Chamber <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
