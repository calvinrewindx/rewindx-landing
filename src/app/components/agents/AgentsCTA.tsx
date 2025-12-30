"use client";

import { ArrowRight, BookOpen, Mail } from "lucide-react";

export default function AgentsCTA() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-cyan/5 to-violet/5 blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          <span className="text-white">Ready to protect your </span>
          <span className="gradient-text">AI agents</span>
          <span className="text-white">?</span>
        </h2>

        <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
          Explore the demo, read the lightpaper, or get in touch.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="/demo"
            className="btn-primary flex items-center gap-2 px-8 py-4"
          >
            Try Demo
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/lightpaper"
            className="btn-secondary flex items-center gap-2 px-8 py-4"
          >
            <BookOpen className="w-4 h-4" />
            Read Lightpaper
          </a>
          <a
            href="/contact"
            className="glass-card glass-card-hover flex items-center gap-2 px-8 py-4 text-white/70 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
            Contact Us
          </a>
        </div>

        {/* Tagline */}
        <div className="glass-card inline-block px-8 py-4">
          <p
            className="text-lg gradient-text font-semibold"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Rewind X: Safety for the AI Agent Era
          </p>
        </div>
      </div>
    </section>
  );
}
