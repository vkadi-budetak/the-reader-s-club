import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth-options";
import { db } from "@/db";
import { booksTable, chaptersTable } from "@/db/schema";
import { eq, asc } from "drizzle-orm";
import { notFound, redirect } from "next/navigation";
import { ChevronLeft, Scroll } from "lucide-react";
import Link from "next/link";
import { AddChapterForm } from "./add-chapter-form";
import { DeleteChapterButton } from "./delete-chapter-button";
import { EditChapterDialog } from "./edit-chapter-dialog";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Визначаємо тип для розділу
interface Chapter {
  id: number;
  bookId: number;
  title: string;
  content: string;
  order: number;
  createdAt: Date;
}

export default async function ManageChapters({ params }: PageProps) {
  const session = await getServerSession(authOptions);
  const { id: bookIdStr } = await params;
  const bookId = parseInt(bookIdStr);

  if (!session || session.user.role !== "admin") {
    redirect("/dashboard");
  }

  // Отримуємо дані книги
  const [book] = await db
    .select()
    .from(booksTable)
    .where(eq(booksTable.id, bookId))
    .limit(1);

  if (!book) {
    notFound();
  }

  // Отримуємо розділи з явною типізацією
  const chapters = await db
    .select()
    .from(chaptersTable)
    .where(eq(chaptersTable.bookId, bookId))
    .orderBy(asc(chaptersTable.order)) as Chapter[];

  return (
    <div className="min-h-screen bg-[#0a0a0a] pb-20 pt-10 text-gray-300">
      <div className="container mx-auto px-6 max-w-5xl">
        <Link
          href="/admin"
          className="flex items-center gap-2 text-zinc-600 hover:text-red-700 transition-colors font-mono text-[10px] uppercase tracking-widest mb-8 w-fit"
        >
          <ChevronLeft size={14} /> Back to Sanctum
        </Link>

        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-zinc-900 pb-8 gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-serif font-bold text-white uppercase tracking-tighter leading-none">
              Fragments of <span className="text-red-700">{book.title}</span>
            </h1>
            <p className="text-zinc-500 italic font-serif">
              Add, remove, or reorder the whispers of this volume.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Список розділів */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em] mb-4">Existing Fragments</h2>
            
            {chapters.length === 0 ? (
              <div className="bg-zinc-950 border border-zinc-900 border-dashed p-16 text-center space-y-4 rounded-sm">
                <Scroll className="h-12 w-12 text-zinc-800 mx-auto opacity-20" />
                <p className="text-zinc-600 font-serif italic text-sm">No fragments have been bound to this volume yet.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {chapters.map((chapter: Chapter) => (
                  <div key={chapter.id} className="bg-zinc-950 border border-zinc-900 p-6 rounded-sm hover:border-zinc-800 transition-all group">
                    <div className="flex justify-between items-start mb-4">
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono text-red-900 uppercase tracking-widest">Fragment {chapter.order}</span>
                        <h3 className="text-xl font-serif font-bold text-white">{chapter.title}</h3>
                      </div>
                      <div className="flex gap-2">
                        <EditChapterDialog chapter={chapter} />
                        <DeleteChapterButton chapterId={chapter.id} bookId={bookId} chapterTitle={chapter.title} />
                      </div>
                    </div>
                    <p className="text-zinc-500 text-sm italic font-serif line-clamp-3 leading-relaxed">
                      &quot;{chapter.content}&quot;
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Форма додавання */}
          <div className="space-y-6">
             <h2 className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em] mb-4">New Fragment</h2>
             <div className="bg-zinc-950 border border-zinc-900 p-8 rounded-sm lg:sticky lg:top-8">
                <AddChapterForm bookId={bookId} nextOrder={chapters.length + 1} />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
