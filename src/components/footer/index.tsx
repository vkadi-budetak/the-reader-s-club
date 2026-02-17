import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <Link
              href="/"
              className="group flex items-center gap-2 no-underline"
            >
              <div className="flex items-center justify-center w-6 h-6 bg-black text-white rounded font-serif text-sm font-bold">
                R
              </div>
              <span className="text-lg font-serif font-black tracking-tighter text-gray-900 uppercase">
                The Reader{"'"}s Club
              </span>
            </Link>
            <p className="mt-2 text-sm text-gray-500 text-center md:text-left">
              The sanctuary for deep reading and community stories.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-10">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Platform
              </span>
              <Link
                href="/chapters"
                className="text-sm text-gray-600 hover:text-black transition"
              >
                Chapters
              </Link>
              <Link
                href="/our-history"
                className="text-sm text-gray-600 hover:text-black transition"
              >
                Our History
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Legal
              </span>
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-600 hover:text-black transition"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-600 hover:text-black transition"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            © {currentYear} The Reader’s Club. MΛDE BY VLD KRΛVCHENKO.
          </p>
          <div className="flex gap-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-blue-500 transition-colors cursor-pointer"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-blue-500 transition-colors cursor-pointer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
