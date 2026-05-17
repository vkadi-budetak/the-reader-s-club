"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Lock, Sparkles, ChevronRight } from "lucide-react";
import { useSession } from "next-auth/react";

export default function ChaptersPage() {
  const { data: session } = useSession();
  
  const featuredVolumes = [
    {
      title: "The Silent Witness",
      description: "A journey through the whispers of time where every shadow holds a secret.",
      image: "/book.jpg",
      chapters: 12,
      status: "Available",
    },
    {
      title: "Echoes of the Void",
      description: "When the stars stop speaking, the darkness begins to scream. Are you ready?",
      image: "/hero.jpg",
      chapters: 8,
      status: "Available",
    },
    {
      title: "The Last Pact",
      description: "A forbidden ritual, a forgotten bloodline, and the price of absolute truth.",
      image: "/read-book.jpg",
      chapters: 15,
      status: "Coming Soon",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-zinc-300 selection:bg-red-900/30">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent opacity-50" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tighter uppercase">
            The Sacred <span className="text-red-800">Archive</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-zinc-500 italic font-serif leading-relaxed">
            "Knowledge is a weight that only the strong can bear. Step into the vault of stories untold and secrets preserved."
          </p>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-zinc-800" />
          <h2 className="text-[10px] font-mono uppercase tracking-[0.5em] text-red-700">
            Featured Volumes
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-zinc-800" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredVolumes.map((volume, index) => (
            <div 
              key={index} 
              className="group relative bg-zinc-950 border border-zinc-900 rounded-sm overflow-hidden hover:border-red-900/50 transition-all duration-700"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img 
                  src={volume.image} 
                  alt={volume.title}
                  className="object-cover w-full h-full opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                
                {volume.status === "Coming Soon" && (
                  <div className="absolute top-4 right-4 bg-red-950/80 border border-red-900 px-3 py-1 rounded-full backdrop-blur-sm">
                    <p className="text-[8px] font-mono text-red-500 uppercase tracking-widest flex items-center gap-1">
                      <Lock size={8} /> Locked
                    </p>
                  </div>
                )}
              </div>

              <div className="p-8 relative">
                <h3 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-red-700 transition-colors">
                  {volume.title}
                </h3>
                <p className="text-sm text-zinc-500 italic mb-6 leading-relaxed">
                  {volume.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                    {volume.chapters} Chapters
                  </span>
                  <Link href={volume.status === "Available" ? "/dashboard" : "#"}>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-red-900 hover:text-red-700 font-serif italic text-sm group-hover:translate-x-1 transition-transform"
                    >
                      {volume.status === "Available" ? "Read Volume" : "Await the Call"} <ChevronRight size={14} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-zinc-950 border-y border-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('/hero.jpg')] bg-cover bg-fixed grayscale" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <Sparkles className="mx-auto text-red-900 mb-6 animate-pulse" size={32} />
          <h2 className="text-4xl font-serif font-bold text-white mb-6 uppercase tracking-tight">
            The Circle Awaits Its <span className="italic">Witness</span>
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto mb-10 leading-relaxed italic">
            "Don't just read the story. Become part of the unspoken legacy. Every chapter you unlock brings you closer to the absolute truth."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {!session ? (
              <Link href="/sign-up-page">
                <Button className="bg-red-900 hover:bg-red-700 text-white font-serif px-10 py-6 uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(153,27,27,0.2)]">
                  Join the Club
                </Button>
              </Link>
            ) : (
              <Link href="/dashboard">
                <Button className="bg-red-900 hover:bg-red-700 text-white font-serif px-10 py-6 uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(153,27,27,0.2)]">
                  Browse My Library
                </Button>
              </Link>
            )}
            
            {!session && (
              <Link href="/sign-in-page">
                <Button variant="outline" className="border-zinc-800 hover:border-red-900 text-zinc-400 hover:text-white font-serif px-10 py-6 uppercase tracking-widest transition-all">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Stats/Footer Teaser */}
      <section className="py-12 container mx-auto px-6 border-t border-zinc-900/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center opacity-40">
          {[
            { label: "Total Volumes", value: "12" },
            { label: "Active Witnesses", value: "2.4k" },
            { label: "Sacred Pages", value: "15k+" },
            { label: "New Chapters", value: "Weekly" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-xl font-serif font-bold text-white">{stat.value}</p>
              <p className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
