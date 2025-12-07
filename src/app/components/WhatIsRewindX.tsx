"use client";

import { Clock, Cpu, User } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Protected Transfers",
    subtitle: "24h Undo Window",
    description:
      "Every protected transfer enters a time-bounded state. The sender remains fully in control during this window. NFT holders may unlock extended windows (up to 48h).",
  },
  {
    icon: Cpu,
    title: "Deterministic Execution",
    subtitle: "No Human Decisions",
    description:
      "Every action follows predictable on-chain logic. No operators, no approvals, no subjective judgment.",
  },
  {
    icon: User,
    title: "Non-Custodial Control",
    subtitle: "Full Authority",
    description:
      "Funds never leave the sender's authority. The protocol never holds custody and cannot intervene.",
  },
];

export default function WhatIsRewindX() {
  return (
    <section className="section relative">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            What is <span className="gradient-text">Rewind X</span>?
          </h2>
          <p className="text-white/60 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-4">
            A single typo or wrong address shouldn&apos;t mean permanent loss.
          </p>
          <p className="text-white/50 text-base max-w-3xl mx-auto leading-relaxed">
            Rewind X introduces a deterministic, non-custodial undo window for
            ERC-20 transfers. Fully on-chain, rule-based, and without admin
            keys. Finally, a safety layer that protects users without
            compromising decentralization.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover p-8 flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan/20 to-violet/20 flex items-center justify-center mb-6 border border-white/10">
                <feature.icon className="w-7 h-7 text-cyan" />
              </div>
              <h3
                className="text-xl font-semibold text-white mb-1"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {feature.title}
              </h3>
              <span className="text-cyan text-sm font-medium mb-4">
                {feature.subtitle}
              </span>
              <p className="text-white/50 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
