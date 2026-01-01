"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Shield, Link2, Coins } from "lucide-react";
import CtrlZAnimation from "./CtrlZAnimation";
import DemoVideoToggle from "./DemoVideoToggle";

export default function HeroV2() {
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<"typing" | "cursor" | "done">("typing");
  const fullText = "REWIND";

  // Typing effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setPhase("cursor");
        // Show X with bounce after cursor blinks
        setTimeout(() => setPhase("done"), 600);
      }
    }, 120);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-cyan/8 via-violet/5 to-transparent blur-[100px]" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full bg-violet/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan/3 blur-[150px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 md:pt-20">

        {/* Brand */}
        <div className="mb-6">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest uppercase animate-glow-pulse"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              color: "#00d4ff",
              textShadow: "0 0 30px rgba(0, 212, 255, 0.6), 0 0 60px rgba(0, 212, 255, 0.4)",
              minHeight: "1.2em"
            }}
          >
            {displayText}
            {phase === "typing" && <span className="animate-blink text-cyan">|</span>}
            {phase === "cursor" && <span className="animate-blink text-cyan">|</span>}
            {phase === "done" && <span className="gradient-text animate-bounce-in"> X</span>}
          </h2>
          <div className="mt-3 flex justify-center">
            <div
              className={`h-px bg-gradient-to-r from-transparent via-cyan to-transparent transition-all duration-700 ${
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
          <span className="gradient-text">Ctrl+Z</span>{" "}
          <span className="text-white">for Crypto.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-4 leading-relaxed">
          The <span className="gradient-text font-semibold">first</span> <span className="text-cyan">reversible</span> transfer layer for <span className="text-cyan">ERC-20</span> tokens.
        </p>
        <p className="font-mono text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-8 tracking-wide">
          <span className="text-cyan">24h</span> undo window · <span className="text-violet">Configurable</span> · <span className="text-cyan/80">Deterministic</span>
        </p>

        {/* Animation */}
        <div className="mb-6">
          <CtrlZAnimation size="md" />
        </div>

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <span className="badge">
            <Shield className="w-3.5 h-3.5 text-cyan" />
            Non-custodial
          </span>
          <span className="badge">
            <Link2 className="w-3.5 h-3.5 text-violet" />
            On-chain
          </span>
          <span className="badge">
            <Coins className="w-3.5 h-3.5 text-cyan" />
            Any ERC-20
          </span>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="/demo" className="btn-primary flex items-center gap-2">
            Try Interactive Demo
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#how-it-works" className="btn-secondary flex items-center gap-2">
            Explore the Mechanism
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Video */}
        <DemoVideoToggle />

        {/* Contact */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-white/40 hover:text-cyan/70 transition-colors text-base"
          >
            <span>Partnerships & inquiries</span>
            <span className="text-cyan/50">→</span>
            <span className="font-mono text-sm">investors.rewindx@proton.me</span>
          </a>
          <span className="text-white/20 hidden sm:inline">|</span>
          <a
            href="https://x.com/calvinrewindx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/40 hover:text-cyan/70 transition-colors text-sm"
          >
            <span>DMs open</span>
            <span className="text-cyan/50">→</span>
            <span className="font-mono">@calvinrewindx</span>
          </a>
        </div>

      </div>

    </section>
  );
}
