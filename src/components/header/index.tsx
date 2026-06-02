import Link from "next/link";
import NavBar from "../nav-bar";

export default function Header() {
  return (
    // Адаптивні падінги: px-4 на мобільних, px-10 на десктопах
    <header className="flex items-center justify-between px-4 md:px-10 py-5 bg-[#0a0a0a] border-b border-zinc-900 sticky top-0 z-50 shadow-2xl">
      <Link href="/" className="group flex items-center gap-2 no-underline">
        {/* Квадратик лого тепер червоний з ефектом застиглої крові */}
        <div className="flex items-center justify-center w-8 h-8 bg-red-900 text-white rounded-sm font-serif text-xl font-bold transition-all group-hover:bg-red-700 group-hover:-rotate-12 shadow-[0_0_15px_rgba(153,27,27,0.4)] shrink-0">
          R
        </div>

        <div className="flex flex-col leading-none">
          {/* Назва стає білою */}
          <span className="text-lg md:text-xl font-serif font-black tracking-tighter text-white uppercase transition group-hover:text-gray-200">
            The Reader{"'"}s
          </span>
          <span className="text-[8px] md:text-[10px] font-sans font-bold tracking-[0.3em] text-red-700 uppercase">
            Dark Community
          </span>
        </div>
      </Link>

      <NavBar />
    </header>
  );
}
