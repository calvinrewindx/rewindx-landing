"use client";

import { Shield, Zap, Clock, RotateCcw, CheckCircle, Lock, ArrowRight, Wallet } from "lucide-react";

const rails = [
  {
    title: "Protected Rail",
    subtitle: "Rewind X Layer",
    icon: Shield,
    color: "cyan",
    features: [
      { icon: Clock, text: "Time-bounded window (2min–48h)" },
      { icon: RotateCcw, text: "Sender can rewind" },
      { icon: Shield, text: "Mistake mitigation" },
      { icon: CheckCircle, text: "Proof on rewind" },
    ],
    useCase: "Safety-critical transfers",
  },
  {
    title: "Final Rail",
    subtitle: "DEX / Trading",
    icon: Zap,
    color: "violet",
    features: [
      { icon: Zap, text: "Immediate finality" },
      { icon: Lock, text: "No rewind possible" },
      { icon: ArrowRight, text: "Full composability" },
      { icon: CheckCircle, text: "Liquidity & trading" },
    ],
    useCase: "Trading and DeFi interactions",
  },
];

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

      {/* Fork Arrows */}
      <div className="flex justify-center mb-6">
        <div className="flex items-end gap-16">
          <div className="flex flex-col items-center">
            <div className="w-px h-8 bg-gradient-to-b from-white/20 to-cyan/50" />
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-cyan/50" />
          </div>
          <div className="flex flex-col items-center">
            <div className="w-px h-8 bg-gradient-to-b from-white/20 to-violet/50" />
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-violet/50" />
          </div>
        </div>
      </div>

      {/* Rails Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rails.map((rail) => (
          <div
            key={rail.title}
            className={`
              p-6 rounded-2xl border transition-all duration-300
              ${rail.color === 'cyan'
                ? 'bg-cyan/5 border-cyan/30 hover:border-cyan/50'
                : 'bg-violet/5 border-violet/30 hover:border-violet/50'}
            `}
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className={`
                w-14 h-14 rounded-xl flex items-center justify-center
                ${rail.color === 'cyan' ? 'bg-cyan/20' : 'bg-violet/20'}
              `}>
                <rail.icon className={`w-7 h-7 ${rail.color === 'cyan' ? 'text-cyan' : 'text-violet'}`} />
              </div>
              <div>
                <h3
                  className={`text-xl font-bold ${rail.color === 'cyan' ? 'text-cyan' : 'text-violet'}`}
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {rail.title}
                </h3>
                <span className="text-white/40 text-sm">{rail.subtitle}</span>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-6">
              {rail.features.map((feature) => (
                <li key={feature.text} className="flex items-center gap-3">
                  <feature.icon className={`w-4 h-4 ${rail.color === 'cyan' ? 'text-cyan/70' : 'text-violet/70'}`} />
                  <span className="text-white/70 text-sm">{feature.text}</span>
                </li>
              ))}
            </ul>

            {/* Use Case */}
            <div className={`
              p-3 rounded-lg text-center text-sm font-medium
              ${rail.color === 'cyan'
                ? 'bg-cyan/10 text-cyan border border-cyan/20'
                : 'bg-violet/10 text-violet border border-violet/20'}
            `}>
              {rail.useCase}
            </div>
          </div>
        ))}
      </div>

      {/* Note */}
      <p className="text-center text-white/40 text-sm mt-8 max-w-lg mx-auto">
        Users choose the appropriate rail based on use case. The Final Rail preserves DeFi composability and market finality.
      </p>
    </div>
  );
}
