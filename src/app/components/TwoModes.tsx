"use client";

import { User, Shield, Clock, RotateCcw, Check, KeyRound } from "lucide-react";

const guarantees = [
  { icon: Shield, text: "No private keys stored — funds held by smart contract" },
  { icon: RotateCcw, text: "Funds move only under on-chain rules" },
  { icon: Clock, text: "Configurable protection window (3 min – 24h)" },
  { icon: User, text: "Rewind execution is sender-controlled" },
  { icon: Check, text: "On-chain proof via Rewind Proof NFT" },
];

export default function TwoModes() {
  return (
    <section className="section relative">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Quote */}
        <div className="text-center mb-16">
          <blockquote
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            &ldquo;Your keys. Your transfers.{" "}
            <span className="text-cyan">Your undo button.</span>
            &rdquo;
          </blockquote>
        </div>

        {/* Your Control */}
        <div className="glass-card p-8 max-w-2xl mx-auto mb-8 group hover:border-cyan/30 transition-all duration-300">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center group-hover:bg-cyan/20 group-hover:scale-105 transition-all duration-300">
              <User className="w-6 h-6 text-cyan" />
            </div>
            <h3
              className="text-xl font-semibold text-white"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Your Control
            </h3>
          </div>
          <p className="text-cyan/70 text-sm mb-6">You stay in control of every protected transfer.</p>
          <ul className="space-y-3">
            {[
              "Create protected transfers",
              "Rewind anytime within your window (3 min – 24h)",
              "Release early to allow immediate settlement",
              "All actions require your explicit signature",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-white/[0.03] transition-colors">
                <span className="text-cyan">•</span>
                <span className="text-white/70">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-4 border-t border-white/10">
            <p className="text-white/50 text-sm flex items-center gap-2">
              <KeyRound className="w-4 h-4 text-cyan/60" />
              You sign every transaction.
            </p>
          </div>
        </div>

        {/* Security Guarantees */}
        <div className="glass-card p-6 max-w-3xl mx-auto hover:border-white/20 transition-all duration-300">
          <p className="text-white/40 text-xs uppercase tracking-wider mb-4 text-center font-mono">
            Security Guarantees
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {guarantees.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white/[0.03] transition-colors group/item"
              >
                <item.icon className="w-4 h-4 text-cyan/50 flex-shrink-0 group-hover/item:text-cyan transition-colors duration-300" />
                <span className="text-white/50 text-sm group-hover/item:text-white/70 transition-colors duration-300">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
