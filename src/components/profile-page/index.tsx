"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();

  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 p-3
                        bg-zinc-950 border border-zinc-800 rounded-sm shadow-2xl
                        opacity-0 scale-95 pointer-events-none
                        group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
                        group-focus:opacity-100 group-focus:scale-100 group-focus:pointer-events-auto
                        transition-all duration-300 z-50"
    >
      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-950 border-t border-l border-zinc-800 rotate-45"></div>

      <div className="flex flex-col gap-1 relative z-10">
        <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-tighter">
          Google Account
        </p>
        <p className="font-serif font-bold text-red-700 text-sm truncate">
          {session?.user?.name}
        </p>
        <p className="text-[10px] text-zinc-400 font-mono truncate">
          {session?.user?.email}
        </p>
      </div>
    </div>
  );
}
