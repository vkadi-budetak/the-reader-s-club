"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  BookOpen,
  Lock,
  Library,
  ChevronDown,
  Sparkles,
  ChevronRight
} from "lucide-react";
import { DynamicSidebar } from "@/components/dynamic-sidebar";

interface PageProps {
  params: Promise<{ id: string }>;
}

export const dynamic = "force-dynamic";

export default function BookDetails({ params }: PageProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSnippet, setActiveSnippet] = useState(0);
  const { id: bookId } = React.use(params);

  const snippets = [
    {
      title: "The Midnight Retainer",
      text: "The engine of the 1981 Lincoln Town Car hummed like a dying beast. My new client didn't have a name, only a suitcase that smelled of ozone and wet earth. 'They're coming for the soul of the city, Counselor,' he whispered. I didn't ask who 'they' were. In this car, questions are more dangerous than...",
      chapter: "Chapter 01"
    },
    {
      title: "The Lincoln’s Shadow",
      text: "I noticed it in the rearview mirror first. A shape that didn't belong to the backseat. It moved when the streetlights flickered out. Most lawyers fear the bar association. I fear the thing that sits behind me when I cross the county line at 3 AM. It doesn't want a legal defense. It wants...",
      chapter: "Chapter 02"
    },
    {
      title: "The Verdict of Shadows",
      text: "The courtroom was empty, yet the benches creaked under the weight of invisible witnesses. The judge had no face, only a void beneath his hood. 'How do you plead for the sins of a man who no longer exists?' he asked. I looked at my hands. They were fading into the grey mist of the court...",
      chapter: "Chapter 05"
    }
  ];

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

      <div className="container mx-auto px-6 max-w-4xl">
        <div className="space-y-16">
          {/* Header книги */}
          <div className="flex flex-col md:flex-row gap-10 border-b border-zinc-900 pb-12">
            <div className="w-48 h-64 bg-zinc-900 border border-zinc-800 flex-shrink-0 shadow-2xl flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-[url('/book.jpg')] bg-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700" />
               <p className="relative z-10 font-serif text-white text-xs text-center p-4 font-bold uppercase tracking-widest">
                {bookId.replace(/-/g, " ")}
               </p>
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

          {/* Interactive Snippets Section */}
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
              {snippets.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSnippet(i)}
                  className={`px-4 py-2 text-[9px] font-mono uppercase tracking-widest border transition-all shrink-0 ${
                    activeSnippet === i 
                      ? "border-red-900 bg-red-950/20 text-white" 
                      : "border-zinc-800 text-zinc-600 hover:border-zinc-700"
                  }`}
                >
                  Fragment {i + 1}
                </button>
              ))}
            </div>

            <div className="min-h-[160px] animate-in fade-in duration-700">
              <h4 className="text-white font-serif italic text-xl mb-4 text-red-700/80">
                &ldquo;{snippets[activeSnippet].title}&rdquo;
              </h4>
              <p className="text-gray-400 font-serif leading-relaxed text-xl italic">
                &ldquo;{snippets[activeSnippet].text}&rdquo;
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

          {/* Discussion section is expected to be below this or handled elsewhere */}
        </div>
      </div>
    </div>
  );
}
