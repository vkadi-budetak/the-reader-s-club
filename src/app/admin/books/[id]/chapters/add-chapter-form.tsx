"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
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
import { Loader2, Sparkles } from "lucide-react";
import { addChapter } from "@/lib/actions/chapters";

interface AddChapterFormProps {
  bookId: number;
  nextOrder: number;
}

export function AddChapterForm({ bookId, nextOrder }: AddChapterFormProps) {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      title: "",
      content: "",
      order: nextOrder,
    },
  });

  async function onSubmit(values: any) {
    setLoading(true);
    const result = await addChapter({
      ...values,
      bookId,
    });
    setLoading(false);

    if (result.success) {
      form.reset({
        title: "",
        content: "",
        order: nextOrder + 1,
      });
    } else {
      alert(result.error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-zinc-500 text-[10px] uppercase font-mono">Fragment Title</FormLabel>
              <FormControl>
                <Input placeholder="The Crimson Vow" {...field} className="bg-black border-zinc-800" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="order"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-zinc-500 text-[10px] uppercase font-mono">Chronological Order</FormLabel>
              <FormControl>
                <Input type="number" {...field} onChange={e => field.onChange(parseInt(e.target.value))} className="bg-black border-zinc-800" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-zinc-500 text-[10px] uppercase font-mono">Testimony Content</FormLabel>
              <FormControl>
                <textarea 
                  {...field} 
                  className="w-full min-h-[200px] bg-black border border-zinc-800 p-4 rounded-sm text-sm focus:outline-none focus:border-red-900 transition-colors font-serif leading-relaxed"
                  placeholder="The words began to bleed on the page..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          disabled={loading}
          className="w-full bg-red-900 hover:bg-red-700 py-6 font-serif uppercase tracking-widest flex items-center gap-2"
        >
          {loading ? <Loader2 className="animate-spin" /> : <><Sparkles size={14} /> Bind Fragment</>}
        </Button>
      </form>
    </Form>
  );
}
