export default function TermsOfService() {
  return (
    // Змінюємо фон на чорний, текст на світлий через prose-invert
    <div className="min-h-screen bg-black">
      <div className="max-w-3xl mx-auto px-6 py-12 prose prose-invert prose-red">
        <h1 className="text-4xl font-serif font-bold mb-6 text-red-700 tracking-tighter">
          The Unholy Agreement
        </h1>
        <p className="text-gray-500 text-sm mb-8 italic">
          Bound by Blood since February 2026
        </p>

        <section className="mb-8 border-l-2 border-red-900 pl-6">
          <h2 className="text-xl font-bold text-gray-100">
            1. Acceptance of the Pact
          </h2>
          <p className="text-gray-400">
            By creating an account at The Reader’s Club, you are not just a
            user; you are a witness. You agree to respect the shadows and the
            author{"'"}s solemn intellectual property. Once you enter, there is
            no turning back.
          </p>
        </section>

        <section className="mb-8 border-l-2 border-red-900 pl-6">
          <h2 className="text-xl font-bold text-gray-100">
            2. Forbidden Redistribution
          </h2>
          <p className="text-gray-400">
            Every word, every scream, and every chapter published here is the
            sole property of the author. Stealing or redistributing these
            horrors without express permission will haunt you. Commercial use is
            strictly prohibited.
          </p>
        </section>

        <section className="mb-8 border-l-2 border-red-900 pl-6">
          <h2 className="text-xl font-bold text-gray-100">
            3. Conduct Within the Dark
          </h2>
          <p className="text-gray-400">
            Constructive feedback is welcomed. However, harassment or offensive
            language in the comment sections is a sin we do not forgive.
            Violators will be immediately banished from the club.
          </p>
        </section>

        <div className="mt-12 text-sm text-gray-600 italic">
          Read at your own risk. The author is not responsible for any
          nightmares that may follow.
        </div>
      </div>
    </div>
  );
}
