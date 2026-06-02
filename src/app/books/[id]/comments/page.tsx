import { getCommentsAction } from "@/lib/actions/comments";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth-options";
import Link from "next/link";
import { ChevronLeft, MessageSquare, Ghost, User, Calendar, Lock } from "lucide-react";
import { CommentForm } from "@/components/books/comment-form";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CommentsPage({ params }: PageProps) {
  const { id: bookId } = await params;
  const session = await getServerSession(authOptions);
  const result = await getCommentsAction(bookId);
  
  const comments = result.success ? result.data : [];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 pb-20 pt-24 selection:bg-red-900/30">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6">
          <Link
            href={`/books/${bookId}`}
            className="flex items-center gap-2 text-zinc-600 hover:text-red-700 transition-colors font-mono text-[10px] uppercase tracking-widest w-fit"
          >
            <ChevronLeft size={14} /> Back to Archive
          </Link>
          
          <div className="flex items-center gap-4">
             <div className="p-3 bg-red-950/20 border border-red-900/30 rounded-sm">
                <MessageSquare className="text-red-900" size={24} />
             </div>
             <div>
                <h1 className="text-3xl font-serif font-bold text-white uppercase tracking-tighter">
                  The Forbidden <span className="text-red-800">Testimonies</span>
                </h1>
                <p className="text-zinc-500 text-xs italic font-serif">
                  Voices from the shadows regarding &quot;{bookId.replace(/-/g, " ")}&quot;
                </p>
             </div>
          </div>
        </div>

        {/* Form Section */}
        <section className="mb-16">
          {session && session.user?.id ? (
            <div className="bg-zinc-950 p-6 md:p-8 border border-zinc-900 rounded-sm shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Ghost size={60} />
              </div>
              <h2 className="text-sm font-mono text-zinc-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-700 rotate-45" />
                Leave your mark
              </h2>
              <CommentForm bookSlug={bookId} userId={session.user.id} />
            </div>
          ) : (
            <div className="bg-red-950/5 border border-red-900/20 p-8 rounded-sm text-center">
               <Lock className="mx-auto text-red-900/50 mb-4" size={32} />
               <p className="font-serif italic text-zinc-400 mb-6 text-lg">
                 &quot;Only those who have signed the pact may witness and be witnessed.&quot;
               </p>
               <Link href="/sign-up-page">
                 <button className="px-8 py-3 bg-red-900 text-white font-serif text-xs font-bold uppercase tracking-widest hover:bg-red-800 transition-all">
                   Join the Circle
                 </button>
               </Link>
            </div>
          )}
        </section>

        {/* Comments List */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
             <h3 className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em]">
               Archives ({comments?.length || 0})
             </h3>
          </div>

          {comments && comments.length > 0 ? (
            <div className="space-y-6">
              {comments.map((comment: { id: number; content: string; createdAt: Date; user: { name: string; image: string | null } }) => (
                <div key={comment.id} className="bg-zinc-950/50 border border-zinc-900 p-6 rounded-sm hover:border-zinc-800 transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden">
                        {comment.user.image ? (
                          <img src={comment.user.image} alt={comment.user.name} className="w-full h-full object-cover" />
                        ) : (
                          <User size={14} className="text-zinc-700" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-serif font-bold text-white group-hover:text-red-700 transition-colors">
                          {comment.user.name}
                        </p>
                        <p className="text-[9px] font-mono text-zinc-600 uppercase flex items-center gap-1">
                          <Calendar size={10} /> {new Date(comment.createdAt).toLocaleDateString('uk-UA')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-zinc-400 font-serif italic text-base leading-relaxed md:pl-11">
                    &quot;{comment.content}&quot;
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center text-zinc-700">
               <p className="font-serif italic text-xl">The silence is deafening. Will you be the first to speak?</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
