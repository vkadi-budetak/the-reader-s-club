import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-64px)] flex items-center bg-gray-900 overflow-hidden">
      {/* 1. Картинка, що заповнює 70% з правого боку */}
      <div className="absolute top-0 right-0 w-[70%] h-full">
        <Image
          src="/hero-room.jpg"
          alt="Atmospheric reading space"
          fill
          priority
          className="object-cover"
        />
        {/* 2. Тінь/Градієнт, що переходить від тексту до картинки */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/60 to-transparent" />
      </div>

      {/* 3. Контент (текст) поверх усього */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight">
            Your Next Great Story{" "}
            <span className="text-blue-400">Begins Here.</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Join an exclusive community of book lovers. Read unpublished
            chapters and influence the narrative in real-time.
          </p>

          <div className="mt-10">
            <Link
              href="/chapters"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-xl"
            >
              Start Reading
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
