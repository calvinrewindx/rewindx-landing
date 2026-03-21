"use client";

import { Shield, Zap, Clock, RotateCcw, CheckCircle, Lock, ArrowRight, Wallet } from "lucide-react";

export default function ExecutionRails() {
  return (
    <div className="my-10">
      {/* User Wallet Origin */}
      <div className="flex justify-center mb-6">
        <div className="p-4 rounded-xl border border-white/20 bg-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/10">
              <Wallet className="w-5 h-5 text-white/70" />
            </div>
            <div>
              <h4 className="text-white font-semibold">User Wallet</h4>
              <p className="text-white/40 text-xs">ERC-20 Transfer Flow</p>
            </div>
          </div>
        </div>
      </div>

      {/* Arrow */}
      <div className="flex justify-center mb-6">
        <div className="flex flex-col items-center">
          <div className="w-px h-8 bg-gradient-to-b from-white/20 to-cyan/50" />
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-cyan/50" />
        </div>
      </div>

      {/* Protected Rail — V1 Active */}
      <div className="max-w-md mx-auto mb-6">
        <div className="p-6 rounded-2xl border border-cyan/30 bg-cyan/5 hover:border-cyan/50 transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-cyan/20">
              <Shield className="w-7 h-7 text-cyan" />
            </div>
            <div>
              <h3
                className="text-xl font-bold text-cyan"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Protected Rail
              </h3>
              <span className="text-white/40 text-sm">V1 — Active</span>
            </div>
          </div>

          <ul className="space-y-3 mb-6">
            {[
              { icon: Clock, text: "Time-bounded window (3 min – 24h)" },
              { icon: RotateCcw, text: "Sender can rewind during window" },
              { icon: Shield, text: "Mistake and scam mitigation" },
              { icon: CheckCircle, text: "Rewind Proof NFT on execution" },
            ].map((feature) => (
              <li key={feature.text} className="flex items-center gap-3">
                <feature.icon className="w-4 h-4 text-cyan/70" />
                <span className="text-white/70 text-sm">{feature.text}</span>
              </li>
            ))}
          </ul>

          <div className="p-3 rounded-lg text-center text-sm font-medium bg-cyan/10 text-cyan border border-cyan/20">
            Safety-critical transfers
          </div>
        </div>
      </div>

      {/* Final Rail — Planned */}
      <div className="max-w-md mx-auto">
        <div className="p-5 rounded-2xl border border-dashed border-white/15 bg-white/[0.02]">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-violet/10 border border-violet/20">
              <Zap className="w-5 h-5 text-violet/60" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white/60" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                Final Rail
              </h3>
              <span className="text-violet/50 text-xs font-medium">Planned — DEX / Trading</span>
            </div>
          </div>
          <p className="text-white/40 text-sm">
            Immediate finality for trading and DeFi interactions. No rewind possible. Full composability.
          </p>
        </div>
      </div>

      {/* Note */}
      <p className="text-center text-white/40 text-sm mt-8 max-w-lg mx-auto">
        V1 supports the Protected Rail. The Final Rail is planned for a future version to support DEX and DeFi composability.
      </p>
    </div>
  );
}
