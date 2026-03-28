"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Library, Layers, ChevronRight } from "lucide-react";

export function DynamicSidebar() {
  const params = useParams();
  const { id, chapterId } = params;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Секція: Список Глав (якщо ми в книзі або главі) */}
      <div className="bg-zinc-950/50 p-6 border border-zinc-900 rounded-sm">
        <div className="flex items-center gap-2 mb-6 border-b border-zinc-900 pb-4">
          <Layers size={16} className="text-red-900" />
          <h3 className="text-[10px] font-mono text-white uppercase tracking-[0.2em]">
            Chapters
          </h3>
        </div>
        <div className="space-y-1">
          {[1, 2, 3].map((num) => (
            <Link
              key={num}
              href={`/books/${id}/chapters/${num}`}
              className={`flex justify-between items-center p-3 text-sm font-serif border rounded-sm transition-all ${
                chapterId === num.toString()
                  ? "bg-red-900/10 border-red-900/40 text-white font-bold"
                  : "border-transparent text-zinc-500 hover:text-zinc-300"
              }`}
            >
              <span>Chapter {num.toString().padStart(2, "0")}</span>
              <ChevronRight
                size={14}
                className={
                  chapterId === num.toString() ? "text-red-900" : "opacity-0"
                }
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Секція: Повернення до бібліотеки */}
      <div className="bg-zinc-950/50 p-6 border border-zinc-900 rounded-sm">
        <div className="flex items-center gap-2 mb-4">
          <Library size={16} className="text-zinc-600" />
          <h3 className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em]">
            Explore
          </h3>
        </div>
        <Link
          href="/dashboard"
          className="text-sm font-serif italic text-zinc-400 hover:text-red-700 transition-colors flex items-center justify-between"
        >
          All Volumes <ChevronRight size={14} />
        </Link>
      </div>
    </div>
  );
}
