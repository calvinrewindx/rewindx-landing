"use client";

import { Clock, Cpu, User, Check, X } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Protected Transfers",
    subtitle: "3 min – 24h Window",
    description:
      "Transfers enter a short rewind window before they become final.",
  },
  {
    icon: Cpu,
    title: "Deterministic Execution",
    subtitle: "Fixed On-Chain Rules",
    description:
      "Outcomes follow fixed on-chain rules — not manual review or discretionary reversal.",
  },
  {
    icon: User,
    title: "Non-Custodial Design",
    subtitle: "Smart Contract Logic",
    description:
      "Funds are controlled by smart contract logic, not by a human operator.",
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
            What is <span className="text-cyan">Rewind X</span>?
          </h2>
          <p className="text-white/70 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-3">
            Undo transfers before they become final.
          </p>
          <p className="text-white/50 text-base max-w-3xl mx-auto leading-relaxed">
            A time-bounded rewind window for ERC-20 transfers.
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

        {/* Is / Is Not Card */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* IS */}
            <div className="p-5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10">
              <h4 className="text-emerald-400 font-semibold text-sm mb-3 flex items-center gap-2">
                <Check className="w-4 h-4" />
                What it is
              </h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>A protocol for time-bounded protected transfers</li>
                <li>Deterministic on-chain rules</li>
                <li>Sender-initiated rewind window</li>
              </ul>
            </div>
            {/* IS NOT */}
            <div className="p-5 rounded-xl border border-red-500/20 bg-red-500/5 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-lg hover:shadow-red-500/10">
              <h4 className="text-red-400 font-semibold text-sm mb-3 flex items-center gap-2">
                <X className="w-4 h-4" />
                What it is not
              </h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>Not insurance or fund recovery</li>
                <li>Not a chargeback system</li>
                <li>Not custody</li>
                <li>Not a promise that every mistake can be reversed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
