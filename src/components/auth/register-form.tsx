"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function RegisterForm() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // Функція для майбутнього бекенду (Server Actions)
  async function onSubmit(values: unknown) {
    console.log("Welcome to the circle:", values);
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-zinc-950 border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,1)] rounded-sm">
      <CardHeader className="space-y-1 text-center border-b border-zinc-900 mb-6">
        <CardTitle className="text-3xl font-serif font-bold text-white tracking-tighter uppercase">
          Join the Circle
        </CardTitle>
        <CardDescription className="text-zinc-500 italic">
          Enter your details to witness the unspoken.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zinc-400 font-serif">
                    Your Alias
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      {...field}
                      className="bg-black border-zinc-800 focus:border-red-900 text-white rounded-sm transition-all"
                    />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zinc-400 font-serif">
                    Email Portal
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="m@example.com"
                      type="email"
                      {...field}
                      className="bg-black border-zinc-800 focus:border-red-900 text-white rounded-sm transition-all"
                    />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zinc-400 font-serif">
                    Secret Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      {...field}
                      className="bg-black border-zinc-800 focus:border-red-900 text-white rounded-sm transition-all"
                    />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-red-900 hover:bg-red-700 text-white font-serif font-bold py-6 rounded-sm transition-all duration-500 uppercase tracking-widest shadow-[0_0_20px_rgba(153,27,27,0.2)]"
            >
              Sign the Pact
            </Button>
          </form>
        </Form>
        <div className="mt-8 text-center text-xs font-mono text-zinc-600 uppercase tracking-widest">
          Already a witness?{" "}
          <Link
            href="/sign-in-page"
            className="text-red-800 hover:text-red-600 underline underline-offset-4 transition"
          >
            Sign In
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
