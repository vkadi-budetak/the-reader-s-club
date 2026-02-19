import Link from "next/link";
import Image from "next/image";

export default function OurHistory() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="text-sm text-red-800 hover:text-red-600 transition-colors"
        >
          ← Back to home
        </Link>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Секція з текстом */}
          <div>
            <h1 className="text-4xl font-serif font-bold mb-6 text-white tracking-tight">
              The Origins
            </h1>

            <div className="space-y-6 text-gray-400 leading-relaxed font-serif italic">
              <p>
                The Reader’s Club emerged from the shadows in 2024. It wasn’t
                just about writing; it was about finding those who dare to read
                what others fear to speak.
              </p>

              <p>
                I realized that horror needs more than a screen—it needs a
                community. A place where the boundary between the author’s mind
                and the reader’s fear completely dissolves.
              </p>
            </div>
          </div>

          {/* Секція з дивною картинкою та тінями */}
          <div className="relative group">
            {/* Багатошарова тінь для ефекту глибини */}
            <div className="absolute -inset-4 bg-red-900/20 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition duration-1000"></div>

            <div
              className="relative w-full aspect-square bg-zinc-900 overflow-hidden shadow-2xl"
              style={{
                clipPath:
                  "polygon(7% 12%, 85% 5%, 98% 39%, 82% 91%, 15% 95%, 2% 52%)",
              }}
            >
              <Image
                src="/our-history.jpg"
                alt="Ancient records"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Накладання темряви поверх картинки */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Секція Місія */}
        <div className="mt-20 border-y border-zinc-900 py-10 px-6 bg-zinc-950/50">
          <h2 className="text-center text-xl font-serif text-red-800 uppercase tracking-widest mb-4">
            Our Covenant
          </h2>
          <p className="max-w-xl mx-auto text-center text-gray-400 italic">
            To bridge the gap between the pen and the reader, creating an
            exclusive space where every scream shapes the next page.
          </p>
        </div>

        {/* CTA внизу */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 text-sm mb-6 uppercase tracking-tighter">
            Do you have the courage to proceed?
          </p>
          <Link
            href="/sign-up"
            className="inline-block bg-red-900/20 border border-red-900 text-red-100 px-10 py-3 rounded-sm hover:bg-red-900/40 transition-all duration-500 shadow-[0_0_15px_rgba(153,27,27,0.2)]"
          >
            Join the Club
          </Link>
        </div>
      </section>
    </div>
  );
}
