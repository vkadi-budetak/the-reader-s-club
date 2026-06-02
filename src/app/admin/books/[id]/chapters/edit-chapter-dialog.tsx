"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Edit, Loader2, Save } from "lucide-react";
import { updateChapter } from "@/lib/actions/chapters";

interface Chapter {
  id: number;
  bookId: number;
  title: string;
  content: string;
  order: number;
}

interface EditChapterDialogProps {
  chapter: Chapter;
}

interface ChapterFormValues {
  title: string;
  content: string;
  order: number;
}

export function EditChapterDialog({ chapter }: EditChapterDialogProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<ChapterFormValues>({
    defaultValues: {
      title: chapter.title,
      content: chapter.content,
      order: chapter.order,
    },
  });

  async function onSubmit(values: ChapterFormValues) {
    setLoading(true);
    const result = await updateChapter(chapter.id, {
      ...values,
      bookId: chapter.bookId,
    });
    setLoading(false);
    
    if (result.success) {
      setOpen(false);
    } else {
      alert(result.error);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="h-8 w-8 border-zinc-800 text-zinc-500 hover:text-white hover:border-amber-700 transition-colors">
          <Edit size={14} />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[95vw] sm:max-w-[700px] bg-zinc-950 border-zinc-900 text-white p-5 md:p-6 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-serif font-bold uppercase tracking-tighter text-center md:text-left">
            Alter <span className="text-red-700">Fragment</span>
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-3">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-zinc-500 text-[10px] uppercase font-mono">Title</FormLabel>
                            <FormControl>
                            <Input placeholder="The Crimson Vow" {...field} className="bg-black border-zinc-800" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                </div>
                <div className="md:col-span-1">
                    <FormField
                        control={form.control}
                        name="order"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-zinc-500 text-[10px] uppercase font-mono">Order</FormLabel>
                            <FormControl>
                            <Input type="number" {...field} onChange={e => field.onChange(parseInt(e.target.value))} className="bg-black border-zinc-800" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                </div>
            </div>

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zinc-500 text-[10px] uppercase font-mono">Content</FormLabel>
                  <FormControl>
                    <textarea 
                      {...field} 
                      className="w-full min-h-[300px] bg-black border border-zinc-800 p-4 rounded-sm text-sm focus:outline-none focus:border-red-900 transition-colors font-serif leading-relaxed"
                      placeholder="The archive awaits..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              disabled={loading}
              className="w-full bg-red-900 hover:bg-red-700 py-6 font-serif uppercase tracking-widest mt-4 flex items-center gap-2"
            >
              {loading ? <Loader2 className="animate-spin" /> : <><Save size={14} /> Update Fragment</>}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
