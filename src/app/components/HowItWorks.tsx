"use client";

import { Send, Clock, RotateCcw, Award } from "lucide-react";
import CircularRewindAnimation from "./CircularRewindAnimation";

const steps = [
  {
    number: "01",
    icon: Send,
    title: "Create Protected Transfer",
    description:
      "Send any ERC-20 using protected mode. The funds enter a time-bounded non-custodial state.",
    bullets: ["Sender retains full control", "Funds remain under deterministic protocol rules", "State transitions are enforced by fixed on-chain rules"],
    color: "cyan",
  },
  {
    number: "02",
    icon: Clock,
    title: "Active Undo Window (24h)",
    description:
      "The sender can initiate a rewind anytime during the active window. After expiry, the transfer becomes final.",
    bullets: ["NFT tiers unlock extended windows up to 48h"],
    color: "violet",
  },
  {
    number: "03",
    icon: RotateCcw,
    title: "Execute Rewind",
    description:
      "The sender initiates the rewind. Automated on-chain checks validate hold time, deterministic rules, and integrity conditions.",
    bullets: ["Balances update under deterministic logic"],
    color: "cyan",
  },
  {
    number: "04",
    icon: Award,
    title: "On-Chain Proof",
    description:
      "Each successful rewind mints a Fragment NFT: a permanent, verifiable audit artifact.",
    bullets: ["Immutable proof", "Publicly visible on-chain"],
    color: "violet",
  },
];

export default function HowItWorks() {
  return (
    <section className="section relative overflow-hidden py-24 sm:py-32" style={{ isolation: "isolate" }}>
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-cyan/5 via-violet/5 to-transparent blur-[120px]" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Four deterministic steps to protect your transfers
          </p>
        </div>

        {/* Circular Rewind Animation */}
        <CircularRewindAnimation />

        <div className="mb-4" />

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col">
              {/* Step Card */}
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
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-1">
                  {step.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${
                        step.color === "cyan" ? "bg-cyan" : "bg-violet"
                      }`} />
                      <span className="text-white/40">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
