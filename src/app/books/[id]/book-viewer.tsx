"use client";

import React, { useState } from "react";
import { Sparkles, Lock } from "lucide-react";

export function BookViewer() {
  const [activeSnippet, setActiveSnippet] = useState(0);

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
  );
}
