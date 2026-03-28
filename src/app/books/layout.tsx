// app/books/layout.tsx
import { DynamicSidebar } from "@/components/dynamic-sidebar";

export default function BooksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300">
      <div className="container mx-auto px-6 pt-24 pb-12">
        {/* Головна сітка на 4 колонки */}
        <div className="flex flex-col lg:grid lg:grid-cols-4 gap-12 items-start">
          {/* ЛІВА ЧАСТИНА (75%) */}
          <main className="lg:col-span-3 w-full order-2 lg:order-1">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              {children}
            </div>
          </main>

          {/* ПРАВА ЧАСТИНА (25%) - САЙДБАР */}
          <aside className="lg:col-span-1 w-full order-1 lg:order-2">
            <div className="lg:sticky lg:top-24 space-y-6">
              <DynamicSidebar />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
