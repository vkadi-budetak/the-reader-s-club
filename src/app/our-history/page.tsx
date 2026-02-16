import Link from "next/link";

export default function OurHistory() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <Link href="/" className="text-sm text-blue-600 hover:underline">
        ← Back to home
      </Link>

      <h1 className="text-4xl font-bold mt-8 mb-6">Our Journey</h1>

      <div className="prose prose-slate lg:prose-xl">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The Reader’s Club wasn’t built overnight. It started with a simple
          idea:
          <strong> stories deserve a dedicated home.</strong> In a world of
          fast-paced social media, we wanted to create a sanctuary for deep
          reading and meaningful conversations.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">How it Started</h2>
        <p className="text-gray-600 mb-6">
          It all began in 2024. As an author, I felt that traditional platforms
          lacked the intimacy between a writer and their community. I wanted a
          place where readers could not only read my chapters but participate in
          the evolution of the story.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500 my-8">
          <h3 className="text-xl font-medium mb-2">Our Mission</h3>
          <p className="italic text-gray-700">
            To bridge the gap between the pen and the reader, creating an
            exclusive space where every comment shapes the next page.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">The Club Today</h2>
        <p className="text-gray-600 mb-6">
          Today, The Reader’s Club is more than just a blog. It’s an ecosystem.
          Registered members get access to early drafts, behind-the-scenes
          content, and a direct line of communication with the author.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 text-center">
        <p className="text-gray-500 mb-4">
          Want to be part of our next chapter?
        </p>
        <Link
          href="/sign-up"
          className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition shadow-md"
        >
          Join the Club
        </Link>
      </div>
    </section>
  );
}
