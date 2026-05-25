import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth-options";
import { db } from "@/db";
import { booksTable, usersTable, commentsTable } from "@/db/schema";
import { Button } from "@/components/ui/button";
import { Trash2, Edit, BookOpen, ShieldAlert, Scroll } from "lucide-react";
import Link from "next/link";
import { count } from "drizzle-orm";
import { AddBookDialog } from "@/components/admin/add-book-dialog";
import { DeleteBookButton } from "@/components/admin/delete-book-button";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-zinc-950 border border-red-900/50 p-10 text-center space-y-6 rounded-sm shadow-[0_0_50px_rgba(153,27,27,0.2)]">
          <ShieldAlert className="h-16 w-16 text-red-700 mx-auto" />
          <h1 className="text-2xl font-serif font-bold text-white uppercase tracking-tighter">
            Access Forbidden
          </h1>
          <p className="text-zinc-500 font-serif italic">
            This chamber is reserved for the Scribes only. Your presence here has been noted.
          </p>
          <Link href="/dashboard" className="block">
            <Button variant="outline" className="w-full border-zinc-800 text-zinc-400 hover:text-white hover:border-red-900 transition-all uppercase text-[10px] tracking-widest font-mono">
              Return to Library
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const books = await db.select().from(booksTable);
  const [usersCountResult] = await db.select({ value: count() }).from(usersTable);
  const [commentsCountResult] = await db.select({ value: count() }).from(commentsTable);

  return (
    <div className="min-h-screen bg-[#0a0a0a] pb-20 pt-10 text-gray-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-zinc-900 pb-8 gap-6">
          <div>
            <h1 className="text-4xl font-serif font-bold text-white uppercase tracking-tighter">
              Admin <span className="text-red-700">Sanctum</span>
            </h1>
            <p className="text-zinc-500 italic font-serif mt-1">
              Manage the forbidden volumes and update the archive.
            </p>
          </div>
          <AddBookDialog />
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-zinc-950 border border-zinc-900 rounded-sm overflow-hidden">
            <div className="grid grid-cols-12 gap-4 p-4 bg-zinc-900/50 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 border-b border-zinc-900">
              <div className="col-span-1">ID</div>
              <div className="col-span-4">Title / Slug</div>
              <div className="col-span-5">Description</div>
              <div className="col-span-2 text-right">Actions</div>
            </div>

            {books.length === 0 ? (
              <div className="p-20 text-center space-y-4">
                <BookOpen className="h-12 w-12 text-zinc-800 mx-auto opacity-20" />
                <p className="text-zinc-600 font-serif italic text-sm">The archive is currently empty.</p>
              </div>
            ) : (
              books.map((book) => (
                <div key={book.id} className="grid grid-cols-12 gap-4 p-6 items-center hover:bg-zinc-900/20 border-b border-zinc-900 last:border-0 transition-colors">
                  <div className="col-span-1 font-mono text-zinc-700 text-xs">#{book.id}</div>
                  <div className="col-span-4 space-y-1">
                    <p className="text-white font-serif font-bold text-lg">{book.title}</p>
                    <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">/{book.slug}</p>
                  </div>
                  <div className="col-span-5">
                    <p className="text-zinc-500 text-xs italic font-serif line-clamp-1">
                      {book.description || "No description provided."}
                    </p>
                  </div>
                  <div className="col-span-2 flex justify-end gap-2">
                    <Link href={`/admin/books/${book.id}/chapters`}>
                      <Button variant="outline" size="icon" title="Manage Fragments" className="h-8 w-8 border-zinc-800 text-amber-600 hover:bg-amber-900/10 hover:border-amber-700">
                        <Scroll size={14} />
                      </Button>
                    </Link>
                    <Button variant="outline" size="icon" className="h-8 w-8 border-zinc-800 text-zinc-500 hover:text-white hover:border-red-900">
                      <Edit size={14} />
                    </Button>
                    <DeleteBookButton bookId={book.id} bookTitle={book.title} />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-950 p-6 border border-zinc-900 rounded-sm space-y-2 hover:border-zinc-700 transition-colors">
                <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Total Volumes</p>
                <p className="text-3xl font-serif font-bold text-white">{books.length}</p>
            </div>
            <div className="bg-zinc-950 p-6 border border-zinc-900 rounded-sm space-y-2 hover:border-zinc-700 transition-colors">
                <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Active Witnesses</p>
                <p className="text-3xl font-serif font-bold text-red-800">{usersCountResult.value}</p>
            </div>
            <div className="bg-zinc-950 p-6 border border-zinc-900 rounded-sm space-y-2 hover:border-zinc-700 transition-colors">
                <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Testimonies Written</p>
                <p className="text-3xl font-serif font-bold text-white">{commentsCountResult.value}</p>
            </div>
        </div>
      </div>
    </div>
  );
}
