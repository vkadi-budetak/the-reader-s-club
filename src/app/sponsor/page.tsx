import { SponsorContent } from "@/components/dashboard/sponsor-content";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth-options";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Become a Sponsor | The Reader's Club",
  description: "Support the eternal archive and unlock forbidden knowledge.",
};

export default async function SponsorPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/sign-in-page");
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-20">
      <div className="container mx-auto px-6">
        <SponsorContent />
      </div>
    </div>
  );
}
