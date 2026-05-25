"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash2, Loader2 } from "lucide-react";
import { deleteBook } from "@/lib/actions/books";

interface DeleteBookButtonProps {
  bookId: number;
  bookTitle: string;
}

export function DeleteBookButton({ bookId, bookTitle }: DeleteBookButtonProps) {
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    if (!confirm(`Are you sure you want to erase "${bookTitle}" from the archive? This ritual cannot be undone.`)) {
      return;
    }

    setLoading(true);
    const result = await deleteBook(bookId);
    setLoading(false);

    if (!result.success) {
      alert("Failed to delete the volume.");
    }
  }

  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={handleDelete}
      disabled={loading}
      className="h-8 w-8 border-zinc-800 text-red-900 hover:bg-red-900/10 hover:border-red-700 disabled:opacity-50"
    >
      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 size={14} />}
    </Button>
  );
}
