"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, MessageSquare, Lock, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Book {
  id: number;
  title: string;
  slug: string;
  description: string | null;
  commentCount: number;
}

interface BookLibraryProps {
  initialBooks: Book[];
}

export function BookLibrary({ initialBooks }: BookLibraryProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = initialBooks.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (book.description && book.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={16} className={searchQuery ? "text-red-700" : "text-zinc-600"} />
        </div>
        <Input
          type="text"
          placeholder="Search for forbidden volumes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-zinc-950 border-zinc-800 focus:border-red-900/50 focus:ring-red-900/20 pl-10 h-12 text-sm font-serif italic text-zinc-300 placeholder:text-zinc-700 rounded-sm transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-600 hover:text-red-700 transition-colors"
          >
            <X size={16} />
          </button>
        )}
      </div>

      <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
        <h2 className="text-2xl font-serif font-semibold text-gray-100 flex items-center gap-3">
          <span className="w-2 h-2 bg-red-700 rotate-45 shadow-[0_0_10px_rgba(153,27,27,0.8)]" />
          Current Library
        </h2>
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
          {searchQuery ? `Found: ${filteredBooks.length}` : `Available Volumes: ${initialBooks.length}`}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredBooks.length === 0 ? (
          <div className="p-20 text-center border border-dashed border-zinc-800 rounded-sm bg-zinc-950/20">
            <Search className="h-12 w-12 text-zinc-800 mx-auto mb-4 opacity-20" />
            <p className="text-zinc-600 font-serif italic">No volumes match your search in the archive.</p>
          </div>
        ) : (
          filteredBooks.map((book) => (
            <div 
              key={book.id}
              className="bg-zinc-900/30 p-6 md:p-8 rounded-sm border border-zinc-800 hover:border-red-900/40 transition-all group relative"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono text-red-800 uppercase tracking-[0.3em] font-bold">
                    Volume Unlocked
                  </span>
                </div>
                <Link href={`/books/${book.slug}`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-red-700 transition-colors font-serif">
                    {book.title}
                  </h3>
                </Link>
                <p className="text-gray-400 text-sm leading-relaxed italic line-clamp-2 font-serif">
                  &quot;{book.description}&quot;
                </p>
                <div className="flex items-center gap-6 pt-4 border-t border-zinc-800/50">
                  <Link
                    href={`/books/${book.slug}`}
                    className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition"
                  >
                    <BookOpen size={14} className="text-red-900" /> View Book
                  </Link>
                  <Link
                    href={`/books/${book.slug}/comments`}
                    className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition"
                  >
                    <MessageSquare size={14} className="text-red-900" /> Discuss
                    ({book.commentCount})
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}

        {!searchQuery && (
          <div className="bg-black/60 p-6 md:p-8 rounded-sm border border-zinc-900 relative overflow-hidden group">
            <div className="absolute inset-0 bg-zinc-950/60 backdrop-blur-[2px]" />
            <div className="relative z-10 opacity-30 flex flex-col justify-center min-h-[120px]">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold text-zinc-500 font-serif">
                  Echoes of the Void
                </h3>
                <Lock size={18} className="text-zinc-700" />
              </div>
              <p className="text-sm text-zinc-600 italic mt-2">
                Unlock this volume with a Sponsor Subscription.
              </p>
              <div className="mt-4 inline-block w-fit px-3 py-1 border border-zinc-800 text-[9px] font-mono text-zinc-700 uppercase">
                Release: Coming Soon
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
