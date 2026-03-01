import { signIn, signOut } from "next-auth/react";
import React from "react";

export default function SignInSignOut() {
  return (
    <div>
      <button
        type="button"
        onClick={() => signIn("google")}
        className="text-sm font-serif font-bold bg-red-900 text-white px-5 py-2 rounded-sm hover:bg-red-700 transition-all shadow-[0_0_15px_rgba(153,27,27,0.2)] uppercase tracking-tighter"
      >
        Google Sign In
      </button>
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
