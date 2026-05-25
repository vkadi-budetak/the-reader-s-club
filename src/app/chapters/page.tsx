import { db } from "@/db";
import { booksTable } from "@/db/schema";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth-options";
import Link from "next/link";
import { Book, ChevronRight, Lock, Unlock } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function ChaptersPage() {
  const session = await getServerSession(authOptions);
  const books = await db.select().from(booksTable);

  return (
    <div className="min-h-screen bg-[#0a0a0a] pb-20 pt-10">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white uppercase tracking-tighter">
            The Sacred <span className="text-red-700">Archive</span>
          </h1>
          <div className="w-24 h-1 bg-red-900 mx-auto" />
          <p className="max-w-2xl mx-auto text-zinc-500 font-serif italic text-lg leading-relaxed">
            Every volume here was written in blood and whispers. Explore the collection, 
            but remember: once you open a chapter, the shadows follow you home.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <div 
              key={book.id}
              className="group relative bg-zinc-950 border border-zinc-900 p-8 rounded-sm hover:border-red-900/50 transition-all duration-500 flex flex-col h-full"
            >
              <div className="absolute -inset-0.5 bg-red-900 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-zinc-900/50 rounded-sm">
                    <Book className="h-6 w-6 text-red-800" />
                  </div>
                  {session ? (
                    <Unlock className="h-4 w-4 text-green-900/50" />
                  ) : (
                    <Lock className="h-4 w-4 text-zinc-800" />
                  )}
                </div>

                <h2 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-red-600 transition-colors">
                  {book.title}
                </h2>
                
                <p className="text-zinc-500 text-sm font-serif italic leading-relaxed mb-8 flex-grow">
                  &quot;{book.description}&quot;
                </p>

                <div className="pt-6 border-t border-zinc-900">
                  <Link
                    href={session ? `/books/${book.slug}` : "/sign-up-page"}
                    className="flex items-center justify-between w-full group/btn"
                  >
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 group-hover/btn:text-white transition-colors">
                      {session ? "Enter the Story" : "Sign to Unlock"}
                    </span>
                    <ChevronRight className="h-4 w-4 text-red-900 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Locked Teaser Card */}
          <div className="bg-black/40 border border-dashed border-zinc-900 p-8 rounded-sm flex flex-col justify-center items-center text-center space-y-4 opacity-60">
            <Lock className="h-8 w-8 text-zinc-800" />
            <div className="space-y-1">
              <h3 className="text-lg font-serif font-bold text-zinc-500 uppercase">Coming Soon</h3>
              <p className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest">Forbidden Knowledge</p>
            </div>
          </div>
        </div>

        {/* Guest CTA Section */}
        {!session && (
          <div className="mt-20 p-12 bg-zinc-950 border border-red-900/20 rounded-sm text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-red-900/5 blur-3xl rounded-full translate-y-1/2" />
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl font-serif font-bold text-white uppercase tracking-tighter">
                Ready to Witness the <span className="text-red-800">Unspoken</span>?
              </h2>
              <p className="max-w-md mx-auto text-zinc-500 text-sm font-serif italic">
                Join our circle of readers and gain full access to all forbidden volumes and interactive testimonies.
              </p>
              <Link
                href="/sign-up-page"
                className="inline-block bg-red-900 text-white px-10 py-4 font-serif font-bold uppercase tracking-widest text-xs hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(153,27,27,0.3)]"
              >
                Sign the Pact
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
