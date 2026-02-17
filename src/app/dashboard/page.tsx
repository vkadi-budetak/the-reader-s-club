import Link from "next/link";

export default function Dashboard() {
  // В майбутньому тут буде: const session = await auth();
  // А поки що робимо статику для верстки

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header секція кабінету */}
      <div className="bg-white border-b border-gray-200 py-8 mb-8">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-serif font-bold text-gray-900">
            Welcome back, Reader!
          </h1>
          <p className="text-gray-500 mt-2">
            Here is your progress and the latest updates from the club.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left column: Reading progress */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-xl font-bold text-gray-800">Continue Reading</h2>

          {/* Chapter card */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Chapter 4
            </span>
            <h3 className="text-xl font-bold mt-1 mb-3">The Unspoken Secret</h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              The wind was howling through the cracks of the old lighthouse as
              Marcus finally found the map...
            </p>
            <Link
              href="/chapters/4"
              className="text-sm font-semibold text-gray-900 underline underline-offset-4 hover:text-blue-600"
            >
              Resume reading
            </Link>
          </div>

          {/* Another card (plug) */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 opacity-60">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Chapter 5
            </span>
            <h3 className="text-xl font-bold mt-1 mb-3">Echoes of the Past</h3>
            <p className="text-sm text-gray-400 italic">
              Coming soon: February 25th
            </p>
          </div>
        </div>

        {/* Right column: Statistics / Menu */}
        <div className="space-y-6">
          <div className="bg-black text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-bold mb-4">Your Membership</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Status:</span>
                <span className="text-green-400 font-bold">Active Member</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Chapters read:</span>
                <span>12 / 24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Comments left:</span>
                <span>5</span>
              </div>
            </div>
            <button className="w-full mt-6 py-2 bg-white text-black rounded-md font-bold text-sm hover:bg-gray-200 transition">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
