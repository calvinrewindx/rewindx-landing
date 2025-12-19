"use client";

import { Shield, AlertTriangle, RotateCcw, FileCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Protected Transfer",
    description:
      "AI executes a transfer on a protected rail with a bounded rewind window.",
    icon: Shield,
    color: "cyan",
  },
  {
    number: "02",
    title: "Policy / Context Flag Detected",
    description:
      "The agent detects a policy/context issue with the recipient — funds are at risk if finalized.",
    icon: AlertTriangle,
    color: "violet",
  },
  {
    number: "03",
    title: "Deterministic Rewind",
    description:
      "The agent initiates a deterministic rewind within the active window (no discretionary rollback).",
    icon: RotateCcw,
    color: "cyan",
  },
  {
    number: "04",
    title: "On-Chain Proof",
    description:
      "State change is verified on-chain. A Fragment NFT records the rewind as proof.",
    icon: FileCheck,
    color: "violet",
  },
];

export default function WhatYouJustWatched() {
  return (
    <section id="ai-demo" className="section relative">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            What You <span className="gradient-text">Just Watched</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            The AI demo in 4 steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="glass-card glass-card-hover p-6 relative"
            >
              {/* Step Number */}
              <div
                className={`absolute -top-3 -left-3 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                  step.color === "cyan"
                    ? "bg-cyan/20 text-cyan border border-cyan/40"
                    : "bg-violet/20 text-violet border border-violet/40"
                }`}
              >
                {step.number}
              </div>

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 mt-2 ${
                  step.color === "cyan"
                    ? "bg-cyan/10 border border-cyan/30"
                    : "bg-violet/10 border border-violet/30"
                }`}
              >
                <step.icon
                  className={`w-6 h-6 ${
                    step.color === "cyan" ? "text-cyan" : "text-violet"
                  }`}
                />
              </div>

              {/* Content */}
              <h3
                className="text-lg font-semibold text-white mb-2"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {step.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-white/40 text-sm font-mono tracking-wide">
            Detection is replaceable. The rewind primitive is not.
          </p>
        </div>
      </div>
    </section>
  );
}
