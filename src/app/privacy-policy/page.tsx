export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Мінімалістичний заголовок без зайвого декору */}
        <h1 className="text-4xl font-serif font-bold mb-2 text-white tracking-tight">
          Privacy Policy
        </h1>
        <div className="h-1 w-12 bg-red-800 mb-8" />{" "}
        {/* Маленька акцентна лінія */}
        <p className="text-sm text-gray-500 mb-12 font-mono uppercase tracking-widest">
          Last Updated // Feb 2026
        </p>
        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-serif font-semibold text-white mb-4 italic">
              1. Information Collection
            </h2>
            <p className="leading-relaxed text-gray-400">
              When you join the Club, we collect only what is necessary to
              maintain your access:
            </p>
            <ul className="mt-4 space-y-2 border-l border-red-900/30 pl-6">
              <li>
                <span className="text-red-800 mr-2">†</span>{" "}
                <strong>Identity:</strong> Name and email via secure auth
                providers.
              </li>
              <li>
                <span className="text-red-800 mr-2">†</span>{" "}
                <strong>Activity:</strong> Your comments and reading progress.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-serif font-semibold text-white mb-4 italic">
              2. Usage of Data
            </h2>
            <p className="leading-relaxed text-gray-400">
              Your data serves one purpose: to personalize your experience
              within these walls. We do not share your information with outside
              entities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-semibold text-white mb-4 italic">
              3. Security
            </h2>
            <p className="leading-relaxed text-gray-400">
              We employ Next-Auth and industry-standard encryption. Your secrets
              remain protected by modern digital safeguards.
            </p>
          </section>
        </div>
        <div className="mt-20 pt-8 border-t border-zinc-900 text-center">
          <p className="text-[10px] text-zinc-600 font-mono tracking-[0.4em] uppercase">
            The Reader’s Club — Secure Records
          </p>
        </div>
      </div>
    </div>
  );
}
