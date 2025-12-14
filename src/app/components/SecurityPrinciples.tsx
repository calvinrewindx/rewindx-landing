"use client";

import { Cpu, KeyRound, Wallet } from "lucide-react";

const principles = [
  {
    icon: Cpu,
    title: "Deterministic Execution",
    description:
      "Rules apply equally to all users. No exceptions.",
  },
  {
    icon: KeyRound,
    title: "Trust-Minimized Controls",
    description:
      "Administrative functions are bounded and cannot move user funds. Emergency pause can halt operations. Balances always remain in place.",
  },
  {
    icon: Wallet,
    title: "Non-Custodial Fund Flow",
    description:
      "Funds are held under deterministic smart contract rules during protected transfers. No admin keys can move them.",
  },
];

export default function SecurityPrinciples() {
  return (
    <section className="section relative">
      {/* Background gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cyan/5 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Security <span className="gradient-text">Principles</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-3">
            Built on transparency and trust minimization
          </p>
          <p className="text-white/40 text-sm max-w-2xl mx-auto">
            Protected execution for operational transfers — strict finality for DeFi-critical flows.
          </p>
        </div>

        {/* Principle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="gradient-border glass-card-hover p-8 text-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan/10 to-violet/10 flex items-center justify-center mx-auto mb-6 border border-white/10">
                <principle.icon className="w-8 h-8 text-cyan" />
              </div>

              {/* Content */}
              <h3
                className="text-xl font-semibold text-white mb-4"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {principle.title}
              </h3>
              <p className="text-white/50 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* Scope Clarification */}
        <div className="mt-16 pt-10 border-t border-white/5">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-cyan/60 text-xs font-mono tracking-[0.2em] mb-6">
              PREVENTIVE SAFETY LAYER · NOT RECOVERY OR INSURANCE
            </p>
            <div className="glass-card p-6 border border-white/5">
              <ul className="text-white/40 text-sm space-y-3">
                <li className="flex items-center justify-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-cyan/50" />
                  <span>Mitigates sender-side mistakes within a bounded time window</span>
                </li>
                <li className="flex items-center justify-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-cyan/50" />
                  <span>Assumes standard wallet security practices by the user</span>
                </li>
                <li className="flex items-center justify-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-cyan/50" />
                  <span>After window expiry, finality is absolute by design</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
