"use client";

import React from "react";
import Link from "next/link";
import { ChevronLeft, Heart, MessageCircle, Share2, Send } from "lucide-react";

interface ChapterProps {
  params: Promise<{ id: string; chapterId: string }>;
}

export default function ChapterPage({ params }: ChapterProps) {
  const { id, chapterId } = React.use(params);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 pb-20 font-serif">
      {/* Навігація */}
      <div className="container mx-auto px-6 pt-8 flex justify-between items-center">
        <Link
          href={`/books/${id}`}
          className="flex items-center gap-2 text-zinc-500 hover:text-red-700 transition-colors font-mono text-xs uppercase tracking-widest"
        >
          <ChevronLeft size={16} />
          Back to Book
        </Link>
        <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest">
          Chapter {chapterId} of 24
        </span>
      </div>

      <main className="container mx-auto px-6 mt-12 max-w-3xl">
        {/* Заголовок глави */}
        <header className="mb-12 space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter uppercase">
            The First Witness
          </h1>
          <div className="flex justify-center items-center gap-4 text-xs font-mono text-red-900 uppercase tracking-widest">
            <span>March 28, 2026</span>
            <span className="w-1 h-1 bg-zinc-800 rounded-full" />
            <span>12 min read</span>
          </div>
        </header>

        {/* Текст глави (Preview Style) */}
        <article className="prose prose-invert prose-red max-w-none relative">
          <p className="text-xl leading-relaxed mb-6 first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-red-700">
            The wind whistled through the cracks of the old Lincoln as the
            lawyer drove off to his next case. Rain lashed against the
            windshield, turning the neon lights of the city into blurred streaks
            of crimson and violet. He checked the rearview mirror again. The
            same black sedan had been following him since the courthouse.
          </p>
          <p className="text-xl leading-relaxed mb-6">
            Silence is a dangerous thing in this business. It usually means
            someone is waiting for the right moment to speak with a lead pipe or
            a silenced pistol. Elias gripped the steering wheel, his knuckles
            white against the worn leather. The file on the passenger seat
            contained enough evidence to bury the city`&apos`s entire political
            elite, or bury him along with it.
          </p>

          {/* Ефект обрізки тексту (Preview) */}
          <div className="h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent absolute bottom-0 left-0 right-0" />
        </article>

        {/* Панель взаємодії */}
        <div className="flex items-center justify-between py-8 border-y border-zinc-900 mt-8">
          <div className="flex gap-6">
            <button className="flex items-center gap-2 group text-zinc-500 hover:text-red-700 transition-colors">
              <Heart
                size={20}
                className="group-active:scale-125 transition-transform"
              />
              <span className="font-mono text-sm">124</span>
            </button>
            <div className="flex items-center gap-2 text-zinc-500">
              <MessageCircle size={20} />
              <span className="font-mono text-sm">8</span>
            </div>
          </div>
          <button className="text-zinc-500 hover:text-white transition-colors">
            <Share2 size={20} />
          </button>
        </div>

        {/* Секція коментарів */}
        <section className="mt-16 space-y-8">
          <h3 className="text-2xl font-bold text-white tracking-tight uppercase border-b border-zinc-900 pb-4">
            Discussion
          </h3>

          {/* Форма нового коментаря */}
          <div className="bg-zinc-900/30 p-4 rounded-sm border border-zinc-800 focus-within:border-red-900/50 transition-all">
            <textarea
              placeholder="What do you think, Witness?"
              className="w-full bg-transparent border-none outline-none text-sm font-serif resize-none h-24 text-gray-200"
            />
            <div className="flex justify-end mt-2">
              <button className="bg-red-900 hover:bg-red-700 text-white p-2 rounded-full transition-all">
                <Send size={16} />
              </button>
            </div>
          </div>

          {/* Список коментарів */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-zinc-800 rounded-full flex-shrink-0 border border-red-900/30" />
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-red-700 font-bold text-sm">
                    Unknown_Witness
                  </span>
                  <span className="text-[10px] text-zinc-600 font-mono">
                    2 hours ago
                  </span>
                </div>
                <p className="text-sm text-gray-400">
                  That black sedan... I have a feeling it`&apos`s the same one
                  from the prologue. Elias should have stayed in the courtroom.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
