import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pb-12 text-gray-300">
      {/* Атмосферний Header кабінету з твоєю новою картинкою */}
      <div className="relative h-64 md:h-80 mb-8 overflow-hidden border-b border-red-900/30">
        <Image
          src="/read-book.jpg" // Заміни на назву свого файлу
          alt="Members reading horror"
          fill
          className="object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
        />
        {/* Градієнт, щоб текст читався, а картинка йшла в чорний */}
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />

        <div className="container mx-auto px-6 relative h-full flex flex-col justify-end pb-8">
          <h1 className="text-4xl font-serif font-bold text-white tracking-tight">
            Welcome back, <span className="text-red-700">Reader.</span>
          </h1>
          <p className="text-gray-400 mt-2 italic">
            The shadows have missed you. Here is your forbidden progress.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Ліва колонка: Список глав */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-xl font-serif font-semibold text-gray-100 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-red-700 rotate-45" />
            Continue the Nightmare
          </h2>

          {/* Картка активної глави */}
          <div className="bg-zinc-900/50 p-6 rounded-sm border border-zinc-800 hover:border-red-900/50 transition-all group">
            <span className="text-xs font-mono text-red-800 uppercase tracking-[0.2em]">
              Chapter 4
            </span>
            <h3 className="text-xl font-bold mt-1 mb-3 text-white group-hover:text-red-700 transition">
              The Unspoken Secret
            </h3>
            <p className="text-gray-500 text-sm mb-6 line-clamp-2">
              The wind was howling through the cracks of the old lighthouse as
              Marcus finally found the map...
            </p>
            <Link
              href="/chapters/4"
              className="text-sm font-serif italic text-gray-300 hover:text-white border-b border-red-900 pb-1"
            >
              Return to the shadows
            </Link>
          </div>

          {/* Картка закритої глави */}
          <div className="bg-black/40 p-6 rounded-sm border border-zinc-900 opacity-50 relative overflow-hidden">
            <div className="absolute top-2 right-4 text-[10px] font-mono text-zinc-700 rotate-12 border border-zinc-700 px-2">
              LOCKED
            </div>
            <span className="text-xs font-mono text-gray-600 uppercase">
              Chapter 5
            </span>
            <h3 className="text-xl font-bold mt-1 mb-3 text-zinc-600 font-serif">
              Echoes of the Past
            </h3>
            <p className="text-sm text-zinc-700 italic">
              Unlocks on February 25th
            </p>
          </div>
        </div>

        {/* Права колонка: Статистика */}
        <div className="space-y-6">
          <div className="bg-zinc-950 p-6 rounded-sm border border-red-900/20 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <h3 className="text-lg font-serif font-bold mb-4 text-white border-b border-zinc-800 pb-2">
              Your Membership
            </h3>
            <div className="space-y-4 text-sm font-mono">
              <div className="flex justify-between">
                <span className="text-zinc-500">Status:</span>
                <span className="text-red-700 font-bold">Active Member</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Chapters read:</span>
                <span className="text-gray-300">12 / 24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Comments left:</span>
                <span className="text-gray-300">5</span>
              </div>
            </div>
            <button className="w-full mt-8 py-2 bg-red-900/10 border border-red-900 text-red-100 rounded-sm font-serif text-sm hover:bg-red-900/30 transition-all">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
