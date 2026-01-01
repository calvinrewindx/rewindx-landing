"use client";

import { Send, ScanSearch, RotateCcw, Award, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Send,
    title: "Protected Transfer",
    description: "Agent creates protected transfer with configurable rewind window.",
    note: "If no rewind, recipient finalizes after window expires.",
    color: "cyan",
  },
  {
    number: "02",
    icon: ScanSearch,
    title: "Risk Analysis",
    description: "Policy engine analyzes recipient. Risk score calculated.",
    color: "violet",
  },
  {
    number: "03",
    icon: RotateCcw,
    title: "Policy-Controlled Rewind",
    description: "If threat detected, policy can trigger a rewind.",
    note: "Autonomy is opt-in (policy-controlled).",
    color: "cyan",
  },
  {
    number: "04",
    icon: Award,
    title: "On-Chain Proof",
    description: "On-chain confirmation. Fragment NFT records the event.",
    color: "violet",
  },
];

export default function AgentsHowItWorks() {
  return (
    <section id="how-it-works" className="section relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-cyan/5 via-violet/5 to-transparent blur-[120px]" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Four deterministic steps to protect agent transfers
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col stagger-item" style={{ animationDelay: `${0.1 + index * 0.12}s` }}>
              <div className="glass-card glass-card-hover p-6 h-full group">
                {/* Step Number Badge */}
                <div
                  className={`inline-flex px-3 py-1 rounded-full text-xs font-bold mb-4 ${
                    step.color === "cyan"
                      ? "bg-cyan/20 text-cyan border border-cyan/30"
                      : "bg-violet/20 text-violet border border-violet/30"
                  }`}
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Step {step.number}
                </div>

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${
                    step.color === "cyan"
                      ? "bg-gradient-to-br from-cyan/20 to-cyan/5 border-cyan/30"
                      : "bg-gradient-to-br from-violet/20 to-violet/5 border-violet/30"
                  } border`}
                >
                  <step.icon
                    className={`w-7 h-7 ${
                      step.color === "cyan" ? "text-cyan" : "text-violet"
                    }`}
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-semibold text-white mb-3"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed mb-3">
                  {step.description}
                </p>

                {/* Note */}
                {step.note && (
                  <p className="text-white/30 text-xs italic">{step.note}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Key Principle */}
        <div className="glass-card max-w-2xl mx-auto p-6 text-center mb-10">
          <p className="text-white/60 text-sm">
            Rewind X enforces the safety window <span className="text-cyan">on-chain</span>.
            The agent only decides <span className="text-violet">when</span> to use it.
          </p>
        </div>

        {/* Trust Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
          {["Non-custodial", "Configurable window", "On-chain proof"].map(
            (item, i) => (
              <div key={item} className="flex items-center gap-4">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
                  <span className="text-white/60 text-sm font-medium">{item}</span>
                </span>
                {i < 2 && <span className="text-white/20 hidden md:inline">·</span>}
              </div>
            )
          )}
        </div>

        {/* Mid-Page CTA */}
        <div className="text-center">
          <a
            href="/demo"
            className="btn-secondary inline-flex items-center gap-2"
          >
            See the agent flow in 30s
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
