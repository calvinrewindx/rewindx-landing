"use client";

import { AlertTriangle, Flame, Bot } from "lucide-react";

const risks = [
  {
    icon: AlertTriangle,
    title: "Address Poisoning",
    description: "Scammers send from lookalike addresses hoping agents copy the wrong one",
    color: "cyan",
  },
  {
    icon: Bot,
    title: "Agent Errors",
    description: "Hallucinations, wrong amounts, or misconfigured parameters",
    color: "violet",
  },
  {
    icon: Flame,
    title: "Compromised Inputs",
    description: "Malicious data sources or manipulated API responses triggering bad transfers",
    color: "cyan",
  },
];

export default function ProblemSection() {
  return (
    <section className="section relative">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            The <span className="gradient-text">Problem</span>
          </h2>
        </div>

        {/* Quote */}
        <div className="glass-card max-w-3xl mx-auto mb-16 p-8 md:p-10 text-center">
          <p
            className="text-xl md:text-2xl font-medium leading-relaxed text-white/90"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            &ldquo;AI agents are getting wallets.
            <br />
            But blockchain transactions are{" "}
            <span className="text-red-400">irreversible</span>.&rdquo;
          </p>
        </div>

        {/* Risk Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {risks.map((risk, index) => (
            <div
              key={risk.title}
              className="glass-card glass-card-hover p-8 text-center stagger-item"
              style={{ animationDelay: `${0.1 + index * 0.15}s` }}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6 border ${
                  risk.color === "cyan"
                    ? "bg-gradient-to-br from-cyan/20 to-cyan/5 border-cyan/30"
                    : "bg-gradient-to-br from-violet/20 to-violet/5 border-violet/30"
                }`}
              >
                <risk.icon
                  className={`w-7 h-7 ${
                    risk.color === "cyan" ? "text-cyan" : "text-violet"
                  }`}
                />
              </div>
              <h3
                className="text-xl font-semibold text-white mb-3"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {risk.title}
              </h3>
              <p className="text-white/50 leading-relaxed">{risk.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Line */}
        <p className="text-center text-lg text-white/60">
          Without protection:{" "}
          <span className="text-red-400 font-semibold">Funds lost forever.</span>
        </p>
      </div>
    </section>
  );
}
