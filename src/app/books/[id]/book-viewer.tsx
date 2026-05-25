"use client";

import React, { useState } from "react";
import { Sparkles, Lock, Scroll } from "lucide-react";

interface Chapter {
  id: number;
  title: string;
  content: string;
  order: number;
}

interface BookViewerProps {
  initialChapters: Chapter[];
}

export function BookViewer({ initialChapters }: BookViewerProps) {
  const [activeSnippet, setActiveSnippet] = useState(0);

  if (initialChapters.length === 0) {
    return (
      <section className="bg-zinc-950 p-16 border border-zinc-900 rounded-sm text-center space-y-6">
        <Scroll className="h-16 w-16 text-zinc-800 mx-auto opacity-20" />
        <div className="space-y-2">
          <h3 className="text-xl font-serif font-bold text-zinc-500 uppercase tracking-widest">Archive Sealed</h3>
          <p className="text-zinc-600 font-serif italic text-sm max-w-xs mx-auto">
            The fragments of this volume have not yet been transcribed by the Scribes.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-8 bg-zinc-950 p-8 border border-zinc-900 rounded-sm">
      <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
        <h2 className="text-[10px] font-mono text-red-800 uppercase tracking-[0.4em] flex items-center gap-2">
          <Sparkles size={14} /> Memory Fragments
        </h2>
        <span className="text-[10px] font-mono text-zinc-600 uppercase">
          Restricted Preview
        </span>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
        {initialChapters.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActiveSnippet(i)}
            className={`px-4 py-2 text-[9px] font-mono uppercase tracking-widest border transition-all shrink-0 ${
              activeSnippet === i 
                ? "border-red-900 bg-red-950/20 text-white" 
                : "border-zinc-800 text-zinc-600 hover:border-zinc-700"
            }`}
          >
            Fragment {s.order}
          </button>
        ))}
      </div>

      <div className="min-h-[160px] animate-in fade-in duration-700">
        <h4 className="text-white font-serif italic text-xl mb-4 text-red-700/80">
          &ldquo;{initialChapters[activeSnippet].title}&rdquo;
        </h4>
        <p className="text-gray-400 font-serif leading-relaxed text-xl italic whitespace-pre-wrap">
          &ldquo;{initialChapters[activeSnippet].content}&rdquo;
        </p>
      </div>

      <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-[11px] font-serif italic text-zinc-500 max-w-md">
          This is only a whisper of the truth. The full testimony remains locked behind the sacred seal of the Witness Tier.
        </p>
        <button className="w-full md:w-auto px-8 py-3 bg-red-900 text-white font-serif text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(153,27,27,0.2)] flex items-center justify-center gap-2">
          Unlock Full Access <Lock size={14} />
        </button>
      </div>
    </section>
  );
}
