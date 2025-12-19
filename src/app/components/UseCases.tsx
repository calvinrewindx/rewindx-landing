"use client";

import { RotateCcw, Building2, Wallet, Bot } from "lucide-react";

const useCases = [
  {
    icon: RotateCcw,
    title: "Retail Error Recovery",
    description:
      "Wrong address, wrong amount, wrong token, duplicate payment.",
    highlight: "Time-bounded chance to undo sender errors.",
    color: "cyan",
  },
  {
    icon: Building2,
    title: "Enterprise Ready",
    description:
      "Multi-sig workflows, role separation, batched payouts, and",
    highlight: "verifiable on-chain audit trails.",
    color: "violet",
  },
  {
    icon: Wallet,
    title: "Wallet Compatibility",
    description:
      "Integrates with EVM wallets and smart account standards.",
    highlight: "Non-custodial by default.",
    color: "cyan",
  },
  {
    icon: Bot,
    title: "AI Agent Safety",
    description:
      "Agents execute protected transfers under explicit permissions.",
    highlight: "Rewind if flagged by policy.",
    color: "violet",
  },
];

export default function UseCases() {
  return (
    <section className="section relative">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Built for <span className="gradient-text">Everyone</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            From everyday users to treasury operators. A deterministic undo window for ERC-20 transfers.
          </p>
        </div>

        {/* Use Case Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover p-6 flex flex-col items-center text-center"
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 ${
                  useCase.color === "cyan"
                    ? "bg-cyan/10 border border-cyan/30"
                    : "bg-violet/10 border border-violet/30"
                }`}
              >
                <useCase.icon
                  className={`w-8 h-8 ${
                    useCase.color === "cyan" ? "text-cyan" : "text-violet"
                  }`}
                />
              </div>
              <h3
                className="text-lg font-semibold text-white mb-3"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {useCase.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {useCase.description}{" "}
                <span className={useCase.color === "cyan" ? "text-cyan" : "text-violet"}>
                  {useCase.highlight}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
