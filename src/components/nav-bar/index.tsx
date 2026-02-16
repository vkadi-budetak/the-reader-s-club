import Link from "next/link";

export default function NavBar() {
  return (
    <div>
      <nav className="flex gap-3">
        <Link href="/our-history">Our History</Link>
      </nav>
    </div>
  );
}
