"use client";

import { useState } from "react";
import { Ghost, Zap, Scroll, AlertCircle } from "lucide-react";
import { Session } from "next-auth";
import Link from "next/link";

interface MembershipCardProps {
  session: Session;
  bookCount: number;
}

export function MembershipCard({ session, bookCount }: MembershipCardProps) {
  const [showHint, setShowHint] = useState(false);
  
  const totalVolumes = 12;
  const progress = Math.round((bookCount / totalVolumes) * 100);

  const handleSettingsClick = () => {
    setShowHint(true);
    setTimeout(() => setShowHint(false), 3000);
  };

  return (
    <div className="bg-zinc-950 p-5 md:p-8 rounded-sm border border-red-900/10 shadow-2xl relative md:sticky md:top-8 z-10">
      <div className="flex items-center justify-between mb-6 border-b border-zinc-900 pb-4">
        <h3 className="text-xl font-serif font-bold text-white uppercase tracking-tighter">
          Membership
        </h3>
        <Ghost size={20} className="text-red-900 opacity-50" />
      </div>

      <div className="space-y-6 text-sm font-mono">
        <div className="flex justify-between items-center gap-2">
          <span className="text-zinc-500 uppercase text-[10px] shrink-0">Alias:</span>
          <span className="text-zinc-200 truncate text-right">
            {session.user?.name}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-zinc-500 uppercase text-[10px]">Status:</span>
          <span className="text-red-600 font-bold tracking-tighter">
            ACTIVE WITNESS
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-zinc-500 uppercase text-[10px]">Rank:</span>
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
            <span className="text-zinc-200">
              {bookCount} / {totalVolumes}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-[9px] uppercase text-zinc-600">
            <span>Knowledge Level</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-zinc-900 h-1 rounded-full overflow-hidden">
            <div
              className="bg-red-900 h-full transition-all duration-1000"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="mt-10 space-y-3">
        {showHint && (
          <div className="flex items-center gap-2 p-3 bg-red-900/10 border border-red-900/30 rounded-sm animate-in fade-in slide-in-from-top-1 duration-300 mb-2">
            <AlertCircle className="h-4 w-4 text-red-600 shrink-0" />
            <p className="text-[10px] font-mono text-red-500 leading-tight">
              This feature is coming in the next update.
            </p>
          </div>
        )}
        <button
          onClick={handleSettingsClick}
          className="w-full py-3 bg-red-900 text-white rounded-sm font-serif text-xs font-bold hover:bg-red-800 transition-all uppercase tracking-widest shadow-lg cursor-pointer"
        >
          Account Settings
        </button>
        <Link href="/sponsor" className="block w-full">
          <button 
            className="w-full py-3 bg-transparent border border-zinc-800 text-zinc-500 rounded-sm font-serif text-xs hover:border-red-900 hover:text-red-700 transition-all uppercase tracking-widest cursor-pointer"
          >
            Become a Sponsor
          </button>
        </Link>
      </div>
    </div>
  );
}
