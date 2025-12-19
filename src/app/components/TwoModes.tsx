"use client";

import { User, Bot } from "lucide-react";

export default function TwoModes() {
  return (
    <section className="section relative">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Quote */}
        <div className="text-center mb-16">
          <blockquote
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            &ldquo;Same protocol.{" "}
            <span className="gradient-text">Different permission model.</span>
            &rdquo;
          </blockquote>
        </div>

        {/* Two Modes Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Human Authority */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center">
                <User className="w-6 h-6 text-cyan" />
              </div>
              <h3
                className="text-xl font-semibold text-white"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Human Authority
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-cyan mt-1">→</span>
                <span className="text-white/70">User approves every action</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan mt-1">→</span>
                <span className="text-white/70">AI prepares, user signs</span>
              </li>
            </ul>
          </div>

          {/* AI Autonomous */}
          <div className="glass-card p-8 border-violet/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-violet/10 border border-violet/30 flex items-center justify-center">
                <Bot className="w-6 h-6 text-violet" />
              </div>
              <div>
                <h3
                  className="text-xl font-semibold text-white"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  AI Autonomous
                </h3>
                <span className="text-xs text-violet/80 font-mono">(Demo)</span>
              </div>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-violet mt-1">→</span>
                <span className="text-white/70">
                  Agent acts within delegated, revocable permissions
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-violet mt-1">→</span>
                <span className="text-white/70">
                  Fast, bounded execution (capped test funds)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center">
          <p
            className="text-xl sm:text-2xl font-bold text-white"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Autonomy = <span className="text-cyan">Permissions</span>, not{" "}
            <span className="text-white/50">Custody</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
