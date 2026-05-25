import Link from "next/link";
import Image from "next/image";
import {
  Lock,
  MessageSquare,
  BookOpen,
} from "lucide-react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth-options";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { booksTable, commentsTable } from "@/db/schema";
import { sql, eq } from "drizzle-orm";
import { MembershipCard } from "@/components/dashboard/membership-card";

export const dynamic = "force-dynamic";
// ... (решта коду залишається без змін до блоку правої колонки)

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/sign-in-page");
  }

  // Отримуємо книги та кількість коментарів до них
  const books = await db
    .select({
      id: booksTable.id,
      title: booksTable.title,
      slug: booksTable.slug,
      description: booksTable.description,
      commentCount: sql<number>`count(${commentsTable.id})`.mapWith(Number),
    })
    .from(booksTable)
    .leftJoin(commentsTable, eq(booksTable.slug, commentsTable.bookSlug))
    .groupBy(booksTable.id)
    .execute() as { id: number; title: string; slug: string; description: string | null; commentCount: number }[];

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
              Available Volumes: {books.length}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {books.map((book) => (
              <div 
                key={book.id}
                className="bg-zinc-900/30 p-8 rounded-sm border border-zinc-800 hover:border-red-900/40 transition-all group relative"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono text-red-800 uppercase tracking-[0.3em] font-bold">
                      Volume Unlocked
                    </span>
                  </div>
                  <Link href={`/books/${book.slug}`}>
                    <h3 className="text-3xl font-bold text-white group-hover:text-red-700 transition-colors font-serif">
                      {book.title}
                    </h3>
                  </Link>
                  <p className="text-gray-400 text-sm leading-relaxed italic line-clamp-2 font-serif">
                    &quot;{book.description}&quot;
                  </p>
                  <div className="flex items-center gap-6 pt-4 border-t border-zinc-800/50">
                    <Link
                      href={`/books/${book.slug}`}
                      className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition"
                    >
                      <BookOpen size={14} className="text-red-900" /> View Book
                    </Link>
                    <Link
                      href={`/books/${book.slug}/comments`}
                      className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition"
                    >
                      <MessageSquare size={14} className="text-red-900" /> Discuss
                      ({book.commentCount})
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Locked Volume Placeholder */}
            <div className="bg-black/60 p-8 rounded-sm border border-zinc-900 relative overflow-hidden group">
              <div className="absolute inset-0 bg-zinc-950/60 backdrop-blur-[2px]" />
              <div className="relative z-10 opacity-30 flex flex-col justify-center min-h-[120px]">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-zinc-500 font-serif">
                    Echoes of the Void
                  </h3>
                  <Lock size={18} className="text-zinc-700" />
                </div>
                <p className="text-sm text-zinc-600 italic mt-2">
                  Unlock this volume with a Sponsor Subscription.
                </p>
                <div className="mt-4 inline-block w-fit px-3 py-1 border border-zinc-800 text-[9px] font-mono text-zinc-700 uppercase">
                  Release: Coming Soon
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <MembershipCard session={session} bookCount={books.length} />
        </div>
      </div>
    </div>
  );
}
