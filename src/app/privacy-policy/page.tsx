export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 prose prose-slate">
      <h1 className="text-3xl font-serif font-bold mb-6">Privacy Policy</h1>
      <p className="text-gray-500 text-sm mb-8">Last Updated: February 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-bold">1. Information We Collect</h2>
        <p>
          When you register for The Reader’s Club, we collect basic information
          to provide our services:
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li>
            <strong>Identity Data:</strong> Name and email address provided via
            Google or GitHub login.
          </li>
          <li>
            <strong>Interaction Data:</strong> Comments you post and chapters
            you mark as read.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold">2. How We Use Your Data</h2>
        <p>
          Your data is used solely to manage your access to exclusive chapters
          and to display your name alongside your comments.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold">3. Data Security</h2>
        <p>
          We use industry-standard encryption and secure authentication
          providers (Next-Auth) to ensure your data remains protected.
        </p>
      </section>
    </div>
  );
}
