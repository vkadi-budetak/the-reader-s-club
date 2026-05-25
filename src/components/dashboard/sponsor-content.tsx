"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Crown, Shield, Zap, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const plans = [
  {
    name: "Seeker",
    price: "$0",
    description: "The basic path for every witness.",
    features: ["Access to public volumes", "Standard comments", "Basic rank"],
    icon: <Zap className="h-6 w-6 text-zinc-500" />,
  },
  {
    name: "Acolyte",
    price: "$9.99",
    description: "For those who seek deeper truths.",
    features: [
      "Access to 'Echoes of the Void'",
      "Special 'Acolyte' badge",
      "Priority in discussions",
      "No ads in the shadows",
    ],
    icon: <Shield className="h-6 w-6 text-red-700" />,
    popular: true,
  },
  {
    name: "Grandmaster",
    price: "$29.99",
    description: "Master of the forbidden archive.",
    features: [
      "All Acolyte features",
      "Direct line to the Scribes",
      "Custom witness alias color",
      "Exclusive gnostic content",
    ],
    icon: <Crown className="h-6 w-6 text-amber-500" />,
  },
];

export function SponsorContent() {
  const [step, setStep] = useState<"selection" | "processing" | "success">(
    "selection"
  );
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const router = useRouter();

  const handleSubscribe = (planName: string) => {
    if (planName === "Seeker") {
      router.push("/dashboard");
      return;
    }
    setSelectedPlan(planName);
    setStep("processing");

    // Імітація Stripe Checkout
    setTimeout(() => {
      setStep("success");
    }, 3000);
  };

  if (step === "processing") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8">
        <div className="relative">
          <div className="absolute inset-0 bg-red-900/20 blur-3xl rounded-full animate-pulse" />
          <Loader2 className="h-20 w-20 text-red-900 animate-spin relative z-10" />
        </div>
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-serif font-bold uppercase tracking-[0.2em] text-white">
            Verifying the Sacrifice
          </h2>
          <p className="text-zinc-500 font-mono text-lg animate-pulse">
            Processing your pledge for the {selectedPlan} rank...
          </p>
        </div>
      </div>
    );
  }

  if (step === "success") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8 animate-in fade-in zoom-in duration-700">
        <div className="h-24 w-24 bg-red-900/10 rounded-full flex items-center justify-center border border-red-900/50 shadow-[0_0_50px_rgba(153,27,27,0.4)]">
          <Crown className="h-12 w-12 text-red-600" />
        </div>
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-serif font-bold uppercase tracking-tighter text-white">
            Oath Confirmed
          </h2>
          <p className="text-zinc-400 font-serif italic text-xl max-w-md mx-auto leading-relaxed">
            Welcome, {selectedPlan}. Your status has been elevated. The shadows now recognize your devotion.
          </p>
        </div>
        <Button
          onClick={() => router.push("/dashboard")}
          className="bg-red-900 hover:bg-red-700 text-white font-serif py-8 px-12 text-lg uppercase tracking-widest transition-all duration-500 rounded-sm shadow-2xl"
        >
          Return to Archive
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <div className="flex items-center justify-between border-b border-zinc-900 pb-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white uppercase tracking-tighter">
            Elevate Your <span className="text-red-700">Presence</span>
          </h1>
          <p className="text-zinc-500 italic mt-2 font-serif text-lg">
            Choose your rank and support the eternal archive.
          </p>
        </div>
        <Link href="/dashboard">
          <Button variant="outline" className="border-zinc-800 text-zinc-500 hover:text-white hover:border-red-900 bg-transparent uppercase text-[10px] tracking-widest font-mono">
            <ArrowLeft className="mr-2 h-3 w-3" /> Back to Library
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative p-8 rounded-sm border flex flex-col transition-all hover:translate-y-[-8px] duration-500 ${
              plan.popular
                ? "border-red-900 bg-red-950/5 shadow-[0_0_40px_rgba(153,27,27,0.15)]"
                : "border-zinc-900 bg-zinc-950/50"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-red-900 text-[10px] font-mono text-white uppercase tracking-[0.2em] rounded-full z-10">
                Most Devoted
              </div>
            )}

            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="p-3 bg-zinc-900/50 rounded-sm">{plan.icon}</span>
                <span className="text-3xl font-bold font-mono text-white">
                  {plan.price}
                </span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white tracking-tight">
                {plan.name}
              </h3>
              <p className="text-xs text-zinc-500 italic mt-2 leading-relaxed">
                {plan.description}
              </p>
            </div>

            <div className="space-y-4 mb-10 flex-grow">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-red-800 mt-0.5 shrink-0" />
                  <span className="text-xs text-zinc-400 font-mono leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <Button
              onClick={() => handleSubscribe(plan.name)}
              className={`w-full py-7 font-serif uppercase tracking-widest text-sm rounded-sm transition-all duration-500 ${
                plan.popular
                  ? "bg-red-900 hover:bg-red-700 text-white shadow-[0_0_20px_rgba(153,27,27,0.3)]"
                  : "bg-transparent border border-zinc-800 text-zinc-500 hover:border-red-900 hover:text-white"
              }`}
            >
              {plan.name === "Seeker" ? "Stay Humble" : "Choose Path"}
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 bg-zinc-950 border border-zinc-900 rounded-sm text-center">
        <p className="text-[10px] text-zinc-600 font-mono uppercase tracking-[0.3em] mb-4">
          All transactions are secured via <span className="text-zinc-400">Gnostic Encryption</span>
        </p>
        <div className="flex justify-center gap-8 opacity-20 grayscale">
          {/* Фейкові лого платіжок для атмосфери */}
          <div className="text-white font-bold tracking-tighter text-xl">VISA</div>
          <div className="text-white font-bold tracking-tighter text-xl">STRIPE</div>
          <div className="text-white font-bold tracking-tighter text-xl">MASTERCARD</div>
        </div>
      </div>
    </div>
  );
}
