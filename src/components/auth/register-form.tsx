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

import { X } from "lucide-react";

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

  // Функція для логіну через Google (реалізуємо пізніше через Supabase)
  const handleGoogleLogin = () => {
    console.log("Redirecting to Google...");
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-zinc-950 border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,1)] rounded-sm">
      <div className="absolute top-3 right-3">
        <Link href="/">
          <Button
            variant="outline"
            type="button"
            size="icon"
            className="group border-zinc-800 hover:border-red-900 bg-transparent h-8 w-8"
          >
            <X className="h-4 w-4 text-amber-50 transition-all duration-500 group-hover:rotate-180 group-hover:text-red-700 group-hover:scale-110" />
          </Button>
        </Link>
      </div>

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

        {/* Розділювач "OR" */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-zinc-800" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-zinc-950 px-2 text-zinc-500 font-mono">
              Or continue with
            </span>
          </div>
        </div>

        {/* Кнопка Google */}
        <Button
          variant="outline"
          type="button"
          className="w-full py-6 bg-black-500 border-zinc-800 hover:bg-zinc-900 hover:text-white text-zinc-300 transition-all duration-300 rounded-sm font-mono"
          onClick={handleGoogleLogin}
        >
          <svg
            className="mr-2 h-4 w-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          Google
        </Button>

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
