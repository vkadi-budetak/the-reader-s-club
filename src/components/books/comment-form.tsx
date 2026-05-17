"use client";

import { useState } from "react";
import { addComment } from "@/lib/actions/comments";
import { Button } from "@/components/ui/button";
import { Send, Loader2 } from "lucide-react";

export function CommentForm({ bookSlug }: { bookSlug: string }) {
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!content.trim()) return;

    setIsSubmitting(true);
    setError(null);

    const result = await addComment(bookSlug, content);

    if (result.success) {
      setContent("");
    } else {
      setError(result.error || "An error occurred.");
    }
    setIsSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Share your testimony..."
          className="w-full bg-black border border-zinc-800 p-4 text-gray-200 focus:outline-none focus:border-red-900 transition-colors min-h-[120px] rounded-sm font-serif italic text-lg resize-none"
          disabled={isSubmitting}
        />
        {error && (
          <p className="text-[10px] font-mono text-red-600 uppercase tracking-widest mt-2 animate-pulse">
            {error}
          </p>
        )}
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={isSubmitting || !content.trim()}
          className="bg-red-900 hover:bg-red-700 text-white font-serif px-8 py-6 rounded-sm uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(153,27,27,0.2)]"
        >
          {isSubmitting ? (
            <Loader2 className="animate-spin" size={18} />
          ) : (
            <span className="flex items-center gap-2">
              Deliver Testimony <Send size={14} />
            </span>
          )}
        </Button>
      </div>
    </form>
  );
}
