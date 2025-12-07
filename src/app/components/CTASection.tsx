"use client";

import Link from "next/link";
import { Twitter, FileText, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan/10 to-violet/10 blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 mb-8">
          <Sparkles className="w-4 h-4 text-cyan" />
          <span className="text-cyan text-sm font-medium">Coming Soon</span>
        </div>

        {/* Headline */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Ready to protect your{" "}
          <span className="gradient-text">transfers</span>?
        </h2>

        {/* Subtext */}
        <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Rewind X is currently in private development. Follow updates and technical progress as we move toward mainnet readiness.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://x.com/calvinrewindx"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 text-lg py-4 px-8"
          >
            <Twitter className="w-5 h-5" />
            Follow Updates on X
          </a>
          <Link
            href="/docs"
            className="btn-secondary flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            Read Lightpaper
          </Link>
        </div>

        {/* Trust Line */}
        <p className="text-white/30 text-sm mt-12">
          Non-custodial · Deterministic · Fully On-Chain
        </p>
      </div>
    </section>
  );
}
