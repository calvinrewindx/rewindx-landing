"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import AgentRewindAnimation from "./AgentRewindAnimation";

export default function AgentsHero() {
  const [displayText, setDisplayText] = useState("");
  const [showLine, setShowLine] = useState(false);
  const fullText = "AI AGENTS";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowLine(true), 200);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-20 pb-16 md:pb-20">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-violet/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan/5 blur-[100px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Brand Title with Typing + Glow */}
        <div className="mb-6">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest uppercase agents-gradient-text"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              minHeight: "1.2em"
            }}
          >
            {displayText}
            {displayText.length < fullText.length && <span className="animate-blink" style={{ color: '#a855f7' }}>|</span>}
          </h2>
          <div className="mt-3 flex justify-center">
            <div
              className={`h-0.5 bg-gradient-to-r from-transparent via-violet to-cyan/50 to-transparent transition-all duration-700 ${
                showLine ? "w-48 sm:w-60 md:w-80" : "w-0"
              }`}
              style={{
                boxShadow: showLine ? '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(0, 212, 255, 0.3)' : 'none'
              }}
            />
          </div>
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-4"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          <span className="gradient-text">Undo</span>{" "}
          <span className="text-foreground">for AI Agents.</span>
        </h1>

        {/* Animation */}
        <div className="mb-8">
          <AgentRewindAnimation />
        </div>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Your agents can <span className="text-violet">trade</span>, <span className="text-violet">pay</span>, and <span className="text-violet">transfer</span> crypto.
          <br />
          Rewind X makes critical mistakes <span className="text-cyan font-semibold">survivable</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/demo" className="btn-primary flex items-center gap-2">
            Try Interactive Demo
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#how-it-works" className="btn-secondary flex items-center gap-2">
            See How It Works
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
