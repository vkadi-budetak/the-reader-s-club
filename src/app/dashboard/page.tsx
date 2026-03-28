"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Lock,
  MessageSquare,
  BookOpen,
  Loader2,
  Scroll,
  Ghost,
  Zap,
} from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/sign-up-page");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <Loader2 className="text-red-900 animate-spin" size={40} />
      </div>
    );
  }

  if (!session) return null;

  return (
    <div className="min-h-screen bg-[#0a0a0a] pb-12 text-gray-300 font-sans">
      <div className="relative h-64 md:h-80 mb-8 overflow-hidden border-b border-red-900/30">
        <Image
          src="/read-book.jpg"
          alt="Members reading horror"
          fill
          priority
          className="object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />

        <div className="container mx-auto px-6 relative h-full flex flex-col justify-end pb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Welcome back,{" "}
            <span className="text-red-700">
              {session.user?.name || "Reader"}.
            </span>
          </h1>
          <p className="text-gray-400 mt-2 italic font-serif">
            The shadows have missed you. Your forbidden library awaits.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <h2 className="text-2xl font-serif font-semibold text-gray-100 flex items-center gap-3">
              <span className="w-2 h-2 bg-red-700 rotate-45 shadow-[0_0_10px_rgba(153,27,27,0.8)]" />
              Current Library
            </h2>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
              Last accessed: Just now
            </span>
          </div>

          <div className="bg-zinc-900/30 p-8 rounded-sm border border-zinc-800 hover:border-red-900/40 transition-all group relative">
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-red-800 uppercase tracking-[0.3em] font-bold">
                New Chapters Available
              </span>
              <Link href="/books/lawyer-on-lincoln">
                <h3 className="text-3xl font-bold text-white group-hover:text-red-700 transition-colors font-serif">
                  Lawyer on Lincoln
                </h3>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed italic line-clamp-2 font-serif">
                &quot;The wind whistled through the cracks of the old Lincoln as
                the lawyer drove off to his next case...&quot;
              </p>
              <div className="flex items-center gap-6 pt-4 border-t border-zinc-800/50">
                <Link
                  href="/books/lawyer-on-lincoln"
                  className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition"
                >
                  <BookOpen size={14} className="text-red-900" /> View Book
                </Link>
                <Link
                  href="/books/lawyer-on-lincoln/comments"
                  className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition"
                >
                  <MessageSquare size={14} className="text-red-900" /> Discuss
                  (12)
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-black/60 p-8 rounded-sm border border-zinc-900 relative overflow-hidden group">
            <div className="absolute inset-0 bg-zinc-950/60 backdrop-blur-[2px]" />
            <div className="relative z-10 opacity-30 flex flex-col justify-center min-h-[120px]">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold text-zinc-500 font-serif">
                  Echoes of the Past
                </h3>
                <Lock size={18} className="text-zinc-700" />
              </div>
              <p className="text-sm text-zinc-600 italic mt-2">
                Unlock this volume with a Sponsor Subscription.
              </p>
              <div className="mt-4 inline-block w-fit px-3 py-1 border border-zinc-800 text-[9px] font-mono text-zinc-700 uppercase">
                Release: Feb 25
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-zinc-950 p-8 rounded-sm border border-red-900/10 shadow-2xl sticky top-8">
            <div className="flex items-center justify-between mb-6 border-b border-zinc-900 pb-4">
              <h3 className="text-xl font-serif font-bold text-white">
                Membership
              </h3>
              <Ghost size={20} className="text-red-900 opacity-50" />
            </div>

            <div className="space-y-6 text-sm font-mono">
              <div className="flex justify-between items-center">
                <span className="text-zinc-500 uppercase text-[10px]">
                  Alias:
                </span>
                <span className="text-zinc-200">{session.user?.name}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-zinc-500 uppercase text-[10px]">
                  Status:
                </span>
                <span className="text-red-600 font-bold tracking-tighter">
                  ACTIVE WITNESS
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-zinc-500 uppercase text-[10px]">
                  Rank:
                </span>
                <span className="text-zinc-400 flex items-center gap-1">
                  Seeker <Zap size={12} className="text-yellow-600" />
                </span>
              </div>

              <div className="pt-4 border-t border-zinc-900 space-y-4">
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <Scroll size={14} className="text-zinc-600" />
                    <span className="text-zinc-500 text-[10px] uppercase">
                      Unlocked:
                    </span>
                  </div>
                  <span className="text-zinc-200">1 / 12</span>
                </div>

                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <MessageSquare size={14} className="text-zinc-600" />
                    <span className="text-zinc-500 text-[10px] uppercase">
                      Testimonies:
                    </span>
                  </div>
                  <span className="text-zinc-200">5</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-[9px] uppercase text-zinc-600">
                  <span>Knowledge Level</span>
                  <span>45%</span>
                </div>
                <div className="w-full bg-zinc-900 h-1 rounded-full overflow-hidden">
                  <div className="bg-red-900 h-full w-[45%]" />
                </div>
              </div>
            </div>

            <div className="mt-10 space-y-3">
              <button className="w-full py-3 bg-red-900 text-white rounded-sm font-serif text-xs font-bold hover:bg-red-800 transition-all uppercase tracking-widest shadow-lg">
                Account Settings
              </button>
              <button className="w-full py-3 bg-transparent border border-zinc-800 text-zinc-500 rounded-sm font-serif text-xs hover:border-red-900 hover:text-red-700 transition-all uppercase tracking-widest">
                Become a Sponsor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
