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

export function AddBookDialog() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      title: "",
      slug: "",
      subtitle: "",
      author: "The Witness",
      description: "",
      coverImage: "/book.jpg",
    },
  });

  async function onSubmit(values: any) {
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
        <Button className="bg-red-900 hover:bg-red-700 text-white font-serif uppercase tracking-widest text-xs px-6 py-6 rounded-sm transition-all shadow-lg flex items-center gap-2">
          <Plus size={16} /> Add New Volume
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-zinc-950 border-zinc-900 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif font-bold uppercase tracking-tighter">
            Manifest New <span className="text-red-700">Volume</span>
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
            <div className="grid grid-cols-2 gap-4">
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
              name="subtitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zinc-500 text-[10px] uppercase font-mono">Subtitle</FormLabel>
                  <FormControl>
                    <Input placeholder="A tale of noir and shadows" {...field} className="bg-black border-zinc-800" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="author"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-zinc-500 text-[10px] uppercase font-mono">Author</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-black border-zinc-800" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="coverImage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-zinc-500 text-[10px] uppercase font-mono">Cover URL</FormLabel>
                    <FormControl>
                      <Input placeholder="/book.jpg" {...field} className="bg-black border-zinc-800" />
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
