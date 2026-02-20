"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function LoginForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Спроба входу:", data);
  };

  return (
    <div className="bg-zinc-950 p-8 border border-zinc-900 shadow-2xl rounded-sm">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-serif font-bold text-white uppercase tracking-tighter">
          Identify Yourself
        </h2>
        <p className="text-zinc-500 text-sm italic mt-2">
          The shadows remember your name.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
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
          <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
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
          className="w-full bg-red-900 hover:bg-red-700 text-white font-serif py-6 uppercase tracking-widest transition-all duration-500"
        >
          Enter the Circle
        </Button>
      </form>

      <div className="mt-6 text-center text-xs font-mono text-zinc-600 uppercase tracking-widest">
        New here?{" "}
        <Link
          href="/sign-up"
          className="text-red-800 hover:text-red-600 underline underline-offset-4"
        >
          Sign the Pact
        </Link>
      </div>
    </div>
  );
}
