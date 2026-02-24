"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { X } from "lucide-react";

export function LoginForm() {
  // Функція для логіну через Google (реалізуємо пізніше через Supabase)
  const handleGoogleLogin = () => {
    console.log("Redirecting to Google...");
  };

  return (
    <div className="relative bg-zinc-950 p-8 border border-zinc-900 shadow-2xl rounded-sm">
      <div className="absolute top-4 right-4">
        <Link href="/">
          <Button
            variant="outline"
            type="button"
            size="icon"
            className="group border-zinc-800 hover:border-red-900 bg-transparent h-8 w-8"
          >
            <X className="h-4 w-4 text-amber-50 transition-all duration-500 group-hover:rotate-180 group-hover:text-red-700 group-hover:scale-110" />
          </Button>
        </Link>
      </div>

      <div className="mb-8 text-center">
        <h2 className="text-2xl font-serif font-bold text-white uppercase tracking-tighter pt-2">
          Identify Yourself
        </h2>
        <p className="text-zinc-500 text-sm italic mt-2">
          The shadows remember your name.
        </p>
      </div>

      <form className="space-y-6">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest text-left">
            Email Portal
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="m@example.com"
            className="bg-black border border-zinc-800 p-3 text-white focus:outline-none focus:border-red-900 transition-colors rounded-sm"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest text-left">
            Secret Key
          </label>
          <input
            name="password"
            type="password"
            required
            placeholder="••••••••"
            className="bg-black border border-zinc-800 p-3 text-white focus:outline-none focus:border-red-900 transition-colors rounded-sm"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-red-900 hover:bg-red-700 text-white font-serif py-6 uppercase tracking-widest transition-all duration-500 shadow-[0_0_15px_rgba(153,27,27,0.3)]"
        >
          Enter the Circle
        </Button>
      </form>

      {/* Розділювач "OR" */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-zinc-800" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-zinc-950 px-2 text-zinc-500 font-mono">
            Or continue with
          </span>
        </div>
      </div>

      <Button
        variant="outline"
        type="button"
        className="w-full py-6 bg-black-500 border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-white transition-all duration-300 rounded-sm font-mono"
        onClick={handleGoogleLogin}
      >
        <svg
          className="mr-2 h-4 w-4"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="google"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 488 512"
        >
          <path
            fill="currentColor"
            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
          ></path>
        </svg>
        Google
      </Button>

      <div className="mt-6 text-center text-xs font-mono text-zinc-600 uppercase tracking-widest">
        New here?{" "}
        <Link
          href="/sign-up-page"
          className="text-red-800 hover:text-red-600 underline underline-offset-4 transition-colors"
        >
          Sign the Pact
        </Link>
      </div>
    </div>
  );
}
