"use client";

import { Cpu, KeyRound, Wallet, Shield } from "lucide-react";

const principles = [
  {
    icon: Cpu,
    title: "Deterministic Execution",
    description:
      "All actions follow fixed on-chain rules. No exceptions, no manual intervention.",
  },
  {
    icon: Wallet,
    title: "Non-Custodial by Design",
    description:
      "Funds remain under smart contract control. No admin key can move user funds.",
  },
  {
    icon: KeyRound,
    title: "Bounded Controls",
    description:
      "Administrative functions are strictly limited. Emergency pause can halt actions, but cannot access or move balances.",
  },
];

export default function SecurityPrinciples() {
  return (
    <section className="section relative">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cyan/5 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Security <span className="text-cyan">Principles</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Deterministic, non-custodial, and designed to minimize trust.
          </p>
        </div>

        {/* Principle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="group glass-card glass-card-hover p-8 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan/[0.08] border border-cyan/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-cyan/[0.15] group-hover:border-cyan/40 transition-all duration-300">
                <principle.icon className="w-8 h-8 text-cyan/70 group-hover:text-cyan transition-colors duration-300" />
              </div>
              <h3
                className="text-xl font-semibold text-white mb-4 group-hover:text-cyan transition-colors duration-300"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {principle.title}
              </h3>
              <p className="text-white/50 leading-relaxed text-sm">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* USP Block — Preventive Safety */}
        <div className="max-w-2xl mx-auto">
          <div className="p-8 rounded-2xl border border-cyan/20 bg-cyan/[0.03]">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="w-5 h-5 text-cyan" />
              <h3
                className="text-xl sm:text-2xl font-bold text-white"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Preventive Safety — <span className="text-cyan">Not Recovery</span>
              </h3>
            </div>

            <p className="text-white/60 text-center mb-6">
              Rewind X prevents mistakes before final settlement. It is not insurance, and it does not recover lost funds.
            </p>

            <div className="space-y-3">
              {[
                "Mitigates sender-side errors within a defined time window",
                "Assumes normal wallet security practices",
                "After the window ends, finality is absolute",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan/60 flex-shrink-0" />
                  <span className="text-white/50 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-white/30 text-xs text-center mt-6 pt-4 border-t border-white/5">
              Rewind X adds a safety layer without changing the core guarantees of blockchain finality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
