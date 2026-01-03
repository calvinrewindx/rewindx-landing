"use client";

import { User, Bot, Shield, Clock, Zap, RotateCcw, Check } from "lucide-react";

export default function TwoModes() {
  return (
    <section className="section relative">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Quote */}
        <div className="text-center mb-16">
          <blockquote
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            &ldquo;Same protocol.{" "}
            <span className="gradient-text">Two permission models.</span>
            &rdquo;
          </blockquote>
        </div>

        {/* Two Modes Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Manual Mode */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center">
                <User className="w-6 h-6 text-cyan" />
              </div>
              <h3
                className="text-xl font-semibold text-white"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Manual Mode
              </h3>
            </div>
            <p className="text-cyan/70 text-sm mb-6">You control everything</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-cyan mt-1">•</span>
                <span className="text-white/70">Create protected transfers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan mt-1">•</span>
                <span className="text-white/70">Rewind anytime yourself</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan mt-1">•</span>
                <span className="text-white/70">No delegation needed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan mt-1">•</span>
                <span className="text-white/70">Full manual control</span>
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-white/50 text-sm flex items-center gap-2">
                <User className="w-4 h-4" />
                You sign every rewind
              </p>
            </div>
          </div>

          {/* Delegated Mode */}
          <div className="glass-card p-8 border-violet/20">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-violet/10 border border-violet/30 flex items-center justify-center">
                <Bot className="w-6 h-6 text-violet" />
              </div>
              <h3
                className="text-xl font-semibold text-white"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Delegated Mode
              </h3>
            </div>
            <p className="text-violet/70 text-sm mb-6">AI monitors and rewinds for you</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-violet mt-1">•</span>
                <span className="text-white/70">You create transfers normally</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-violet mt-1">•</span>
                <span className="text-white/70">AI detects threats automatically</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-violet mt-1">•</span>
                <span className="text-white/70">AI triggers rewind if needed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-violet mt-1">•</span>
                <span className="text-white/70">Works while you sleep</span>
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-white/50 text-sm flex items-center gap-2">
                <Shield className="w-4 h-4" />
                You must activate first · Disable anytime
              </p>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mb-8">
          <p
            className="text-xl sm:text-2xl font-bold text-white"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Autonomy = <span className="text-cyan">Permissions</span>, not{" "}
            <span className="text-white/50">Custody</span>.
          </p>
          <p className="text-white/50 text-sm mt-3">
            Both modes use the same protocol. You decide: keep full control or enable AI protection.
          </p>
        </div>

        {/* Security Guarantees */}
        <div className="glass-card p-6 max-w-3xl mx-auto">
          <p className="text-white/40 text-xs uppercase tracking-wider mb-4 text-center font-mono">
            Security Guarantees (Delegated Mode)
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-cyan flex-shrink-0" />
              <span className="text-white/60 text-sm">You must enable it first</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan flex-shrink-0" />
              <span className="text-white/60 text-sm">1-hour activation cooldown</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan flex-shrink-0" />
              <span className="text-white/60 text-sm">Instant revoke anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-cyan flex-shrink-0" />
              <span className="text-white/60 text-sm">Daily limits (3-70/day)</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-cyan flex-shrink-0" />
              <span className="text-white/60 text-sm">Non-custodial: rewind only</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-cyan flex-shrink-0" />
              <span className="text-white/60 text-sm">On-chain proof (Fragment NFT)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
