"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Library, Book, ChevronRight, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { getBooksAction } from "@/lib/actions/books";

interface BookType {
  id: number;
  slug: string;
  title: string;
  description: string | null;
}

export function DynamicSidebar() {
  const params = useParams();
  const currentSlug = params.id as string;
  const [books, setBooks] = useState<BookType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchBooks() {
      const result = await getBooksAction();
      if (result.success && result.data) {
        setBooks(result.data as BookType[]);
      }
      setIsLoading(false);
    }
    fetchBooks();
  }, []);

  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-500">
      {/* Секція: Список книг (Quick Switcher) */}
      <div className="bg-zinc-950/80 p-4 border border-zinc-900 rounded-sm">
        <div className="flex items-center gap-2 mb-4 border-b border-zinc-900 pb-3">
          <Library size={14} className="text-red-900" />
          <h3 className="text-[9px] font-mono text-zinc-400 uppercase tracking-[0.3em]">
            Switch Volume
          </h3>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-6">
            <Loader2 size={16} className="text-red-900 animate-spin" />
          </div>
        ) : (
          <div className="space-y-1">
            {books.map((book) => (
              <Link
                key={book.id}
                href={`/books/${book.slug}`}
                className={`flex justify-between items-center p-3 text-xs font-serif border rounded-sm transition-all group ${
                  currentSlug === book.slug
                    ? "bg-red-900/10 border-red-900/40 text-white"
                    : "border-transparent text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Book size={12} className={currentSlug === book.slug ? "text-red-700" : "text-zinc-700"} />
                  <span className="truncate max-w-[180px]">{book.title}</span>
                </div>
                <ChevronRight
                  size={12}
                  className={`transition-all duration-300 ${
                    currentSlug === book.slug ? "text-red-900 opacity-100" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                  }`}
                />
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Швидкі посилання */}
      <div className="bg-zinc-950/80 p-4 border border-zinc-900 rounded-sm">
        <Link
          href="/dashboard"
          className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 hover:text-red-700 transition-colors flex items-center justify-between"
        >
          Library View <ChevronRight size={12} />
        </Link>
      </div>
    </div>
  );
}
