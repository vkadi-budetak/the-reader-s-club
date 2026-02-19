import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    // Змінюємо bg-gray-900 на bg-black для максимальної глибини
    <div className="relative min-h-[calc(100vh-64px)] flex items-center bg-black overflow-hidden">
      {/* 1. Картинка (твоя 123.jpg) */}
      <div className="absolute top-0 right-0 w-[70%] h-full">
        <Image
          src="/hero.jpg"
          alt="Atmospheric horror background"
          fill
          priority
          className="object-cover grayscale-30% contrast-110%" // Додав трохи грейскейлу та контрасту для атмосфери
        />
        {/* 2. Тінь/Градієнт: тепер він іде від чистого чорного (black) */}
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-xl">
          {/* H1: Змінюємо акцентний колір на червоний і додаємо зловісний текст */}
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight">
            Stories That Will Keep You{" "}
            <span className="text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.3)]">
              Awake.
            </span>
          </h1>

          {/* Параграф: Робимо текст більш тривожним */}
          <p className="mt-6 text-lg text-gray-400 leading-relaxed italic">
            Enter the darkness. Join our exclusive circle to read forbidden
            chapters and face the horrors that lurk between the lines.
          </p>

          <div className="mt-10">
            {/* Кнопка: Тепер червона, з ефектом пульсації або легкого світіння */}
            <Link
              href="/sign-in"
              className="inline-block bg-red-700 text-white px-8 py-4 rounded-sm font-serif font-bold text-lg hover:bg-red-600 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(153,27,27,0.4)]"
            >
              Enter the Void
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
