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
import { Plus, Loader2 } from "lucide-react";
import { addBook } from "@/lib/actions/books";

interface BookFormValues {
  title: string;
  slug: string;
  description: string;
}

export function AddBookDialog() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<BookFormValues>({
    defaultValues: {
      title: "",
      slug: "",
      description: "",
    },
  });

  async function onSubmit(values: BookFormValues) {
    setLoading(true);
    const result = await addBook(values);
    setLoading(false);
    
    if (result.success) {
      setOpen(false);
      form.reset();
    } else {
      alert(result.error);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full md:w-auto bg-red-900 hover:bg-red-700 text-white font-serif uppercase tracking-widest text-xs px-6 py-6 rounded-sm transition-all shadow-lg flex items-center justify-center gap-2">
          <Plus size={16} /> Add New Volume
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[95vw] sm:max-w-[500px] bg-zinc-950 border-zinc-900 text-white p-5 md:p-6 overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-serif font-bold uppercase tracking-tighter text-center md:text-left">
            Manifest New <span className="text-red-700">Volume</span>
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-zinc-500 text-[10px] uppercase font-mono">Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Lawyer on Lincoln" {...field} className="bg-black border-zinc-800" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-zinc-500 text-[10px] uppercase font-mono">Slug</FormLabel>
                    <FormControl>
                      <Input placeholder="lawyer-on-lincoln" {...field} className="bg-black border-zinc-800" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zinc-500 text-[10px] uppercase font-mono">Description</FormLabel>
                  <FormControl>
                    <textarea 
                      {...field} 
                      className="w-full min-h-[100px] bg-black border border-zinc-800 p-3 rounded-sm text-sm focus:outline-none focus:border-red-900 transition-colors"
                      placeholder="Describe the darkness..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              disabled={loading}
              className="w-full bg-red-900 hover:bg-red-700 py-6 font-serif uppercase tracking-widest mt-4"
            >
              {loading ? <Loader2 className="animate-spin mr-2" /> : "Bind to Archive"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
