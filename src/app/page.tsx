import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth-options";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="relative min-h-[calc(100vh-64px)] flex items-center bg-black overflow-hidden">
      <div className="absolute top-0 right-0 w-full md:w-[70%] h-full">
        <Image
          src="/hero.jpg"
          alt="Atmospheric horror background"
          fill
          priority
          className="object-cover grayscale-30% contrast-110% opacity-60 md:opacity-100" 
        />
        {/* Вертикальний градієнт на мобільних, горизонтальний на десктопі */}
        <div className="absolute inset-0 bg-linear-to-b from-black via-black/60 to-transparent md:bg-linear-to-r md:from-black md:via-black/70 md:to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
            Stories That Will Keep You{" "}
            <span className="text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.3)]">
              Awake.
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-400 leading-relaxed italic">
            Enter the darkness. Join our exclusive circle to read forbidden
            chapters and face the horrors that lurk between the lines.
          </p>

          <div className="mt-10">
            <Link
              href={session ? "/dashboard" : "/sign-up-page"}
              className="inline-block bg-red-700 text-white px-8 py-4 rounded-sm font-serif font-bold text-lg hover:bg-red-600 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(153,27,27,0.4)]"
            >
              {session ? "Enter the Void" : "Join the Circle"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
