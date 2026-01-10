"use client";

import { X, Check, Sparkles } from "lucide-react";

export default function SolutionSection() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-violet/5 to-transparent blur-[100px]" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            The <span className="gradient-text">Solution</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Bounded reversibility for AI agent transfers
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {/* Traditional */}
          <div className="glass-card p-8 border-red-500/20">
            <div className="inline-flex px-3 py-1 rounded-full text-xs font-bold mb-6 bg-red-500/20 text-red-400 border border-red-500/30">
              Traditional
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-white/80 text-lg mb-2">You send transfer</p>
                <div className="h-px w-full bg-white/10" />
              </div>

              <p
                className="text-2xl font-bold text-red-400"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Irreversible
              </p>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <X className="w-4 h-4 text-red-400" />
                </div>
                <span className="text-white/50">No recourse</span>
              </div>
            </div>
          </div>

          {/* Rewind X */}
          <div className="glass-card p-8 border-green-500/20 glow-cyan">
            <div className="inline-flex px-3 py-1 rounded-full text-xs font-bold mb-6 bg-cyan/20 text-cyan border border-cyan/30">
              With Rewind X
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-white/80 text-lg mb-2">You send transfer</p>
                <div className="h-px w-full bg-white/10" />
              </div>

              <p
                className="text-2xl font-bold text-cyan"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Configurable Rewind Window
              </p>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-white/50">AI auto-rewinds if threat detected</span>
              </div>
            </div>
          </div>
        </div>

        {/* Delegated Protection Box */}
        <div className="gradient-border glass-card-hover p-8 md:p-10 max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-violet" />
            <h3
              className="text-2xl font-bold text-violet"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Delegated Protection
            </h3>
          </div>

          {/* Gold Sentence */}
          <p
            className="text-xl md:text-2xl font-semibold mb-4 gradient-text"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            AI classifies risk. On-chain rules enforce outcomes.
          </p>

          <p className="text-white/50 leading-relaxed">
            Agents act autonomously — only when <span className="text-violet">you activate</span>. Disable anytime.
          </p>

          {/* Security Disclaimer */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-white/40 text-sm">
              <span className="text-emerald-400/80">⚡</span> AI provides threat signals. Smart contract enforces constraints. The agent <span className="text-white/60">cannot move funds</span> outside protocol rules.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
