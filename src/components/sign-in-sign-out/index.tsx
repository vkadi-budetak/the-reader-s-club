"use client";

import Profile from "@/components/profile-page";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function SignInSignOut() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="p-4 flex gap-4 bg-zinc-900 border border-zinc-800 rounded-2xl items-center">
        <div
          className="relative group flex items-center gap-2 outline-none"
          tabIndex={0}
        >
          <div className="relative z-10 p-0.5 rounded-full border border-zinc-700 group-hover:border-red-900 transition-colors">
            <Image
              src={session.user?.image || ""}
              alt={session.user?.name || ""}
              width={32}
              height={32}
              unoptimized
              className="rounded-full"
            />
          </div>

          {/* Profile-page */}
          <Profile />
        </div>

        <button
          type="button"
          onClick={() => signOut()}
          className="text-sm font-serif font-bold bg-red-900 text-white px-5 py-2 rounded-sm hover:bg-red-700 transition-all shadow-[0_0_15px_rgba(153,27,27,0.2)] uppercase tracking-tighter"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <Link href="/sign-up-page">
      <button
        className="text-sm font-serif font-bold bg-red-900 text-white px-5 py-2 rounded-sm hover:bg-red-700 transition-all shadow-[0_0_15px_rgba(153,27,27,0.2)] uppercase tracking-tighter"
        type="button"
      >
        Join the Circle
      </button>
    </Link>
  );
}
