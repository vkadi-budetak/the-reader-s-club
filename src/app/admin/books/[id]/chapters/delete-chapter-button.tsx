"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash2, Loader2 } from "lucide-react";
import { deleteChapter } from "@/lib/actions/chapters";

interface DeleteChapterButtonProps {
  chapterId: number;
  bookId: number;
  chapterTitle: string;
}

export function DeleteChapterButton({ chapterId, bookId, chapterTitle }: DeleteChapterButtonProps) {
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    if (!confirm(`Do you wish to erase the fragment "${chapterTitle}"?`)) {
      return;
    }

    setLoading(true);
    const result = await deleteChapter(chapterId, bookId);
    setLoading(false);

    if (!result.success) {
      alert("Failed to erase the fragment.");
    }
  }

  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={handleDelete}
      disabled={loading}
      className="h-8 w-8 border-zinc-800 text-red-900 hover:bg-red-900/10 hover:border-red-700 opacity-0 group-hover:opacity-100 transition-all"
    >
      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 size={14} />}
    </Button>
  );
}
