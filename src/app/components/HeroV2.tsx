"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Shield, Link2, Coins } from "lucide-react";
import CtrlZAnimation from "./CtrlZAnimation";
import HeroFlow from "./HeroFlow";

export default function HeroV2() {
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<"typing" | "cursor" | "done">("typing");
  const fullText = "REWIND";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setPhase("cursor");
        setTimeout(() => setPhase("done"), 600);
      }
    }, 120);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background — Clean dark */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 md:pt-20">

        {/* Brand */}
        <div className="mb-8">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest uppercase font-mono"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              color: "#ffffff",
              minHeight: "1.2em"
            }}
          >
            {displayText}
            {phase === "typing" && <span className="animate-blink text-cyan">|</span>}
            {phase === "cursor" && <span className="animate-blink text-cyan">|</span>}
            {phase === "done" && <span className="text-cyan animate-bounce-in"> X</span>}
          </h2>
          <div className="mt-3 flex justify-center">
            <div
              className={`h-px bg-cyan/40 transition-all duration-700 ${
                phase === "done" ? "w-48 sm:w-64 md:w-80" : "w-0"
              }`}
            />
          </div>
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-4"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          <span className="text-cyan">Ctrl+Z</span>{" "}
          <span className="text-white">for Crypto.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-8 leading-relaxed">
          Send with a rewind window before transfers become final.
        </p>

        {/* Animation */}
        <div className="mb-8">
          <CtrlZAnimation size="md" />
        </div>

        {/* Flow Diagram — Animated */}
        <HeroFlow phase={phase} />

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-white/60 text-xs font-mono">
            <Shield className="w-3.5 h-3.5 text-cyan/70" />
            Non-custodial
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-white/60 text-xs font-mono">
            <Link2 className="w-3.5 h-3.5 text-cyan/70" />
            On-chain
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-white/60 text-xs font-mono">
            <Coins className="w-3.5 h-3.5 text-cyan/70" />
            ERC-20 compatible
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/[0.03] text-yellow-500/70 text-xs font-mono">
            Built on BNB Chain
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#how-it-works" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-cyan/30 bg-cyan/[0.08] text-cyan hover:bg-cyan/[0.15] transition-colors text-sm font-medium">
            How it works
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#features" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 bg-white/[0.03] text-white/60 hover:text-white/80 hover:bg-white/[0.06] transition-colors text-sm font-medium">
            What is Rewind X?
          </a>
        </div>

      </div>

    </section>
  );
}
