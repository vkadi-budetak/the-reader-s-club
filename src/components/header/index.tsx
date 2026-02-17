import Link from "next/link";
import NavBar from "../nav-bar";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-10 py-5 bg-white border-b border-gray-100 shadow-sm">
      <Link href="/" className="group flex items-center gap-2 no-underline">
        <div className="flex items-center justify-center w-8 h-8 bg-black text-white rounded font-serif text-xl font-bold transition-transform group-hover:-rotate-12">
          R
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-xl font-serif font-black tracking-tighter text-gray-900 uppercase">
            The Reader{"'"}s
          </span>
          <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-blue-600 uppercase">
            Club Community
          </span>
        </div>
      </Link>

      <NavBar />
    </div>
  );
}
