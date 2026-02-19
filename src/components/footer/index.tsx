import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-zinc-900 py-16">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <Link
              href="/"
              className="group flex items-center gap-2 no-underline"
            >
              <div className="flex items-center justify-center w-7 h-7 bg-red-900 text-white rounded-sm font-serif text-sm font-bold transition-transform group-hover:scale-110 shadow-[0_0_15px_rgba(153,27,27,0.3)]">
                R
              </div>
              <span className="text-xl font-serif font-black tracking-tighter text-white uppercase group-hover:text-red-700 transition">
                The Reader{"'"}s Club
              </span>
            </Link>
            <p className="mt-4 text-sm text-zinc-500 text-center md:text-left font-serif italic max-w-xs">
              Some stories are better left unread. But you won{"'"}t stop, will
              you?
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-800">
                The Archive
              </span>
              <Link
                href="/chapters"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Chapters
              </Link>
              <Link
                href="/our-history"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Our Journey
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-800">
                Covenant
              </span>
              <Link
                href="/privacy-policy"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-zinc-600 font-mono tracking-widest uppercase">
            © {currentYear} The Reader’s Club — MΛDE BY VLD KRΛVCHENKO.
          </p>

          <div className="flex gap-8">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-widest text-zinc-500 hover:text-red-700 transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-widest text-zinc-500 hover:text-red-700 transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
