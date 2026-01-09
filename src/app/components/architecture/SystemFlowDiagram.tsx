"use client";

import { Wallet, Layers, Database, Shield, RotateCcw, CheckCircle, FileCheck, Unlock, Clock } from "lucide-react";

const steps = [
  {
    icon: Wallet,
    label: "User Wallet",
    description: "Initiates protected transfer",
    color: "cyan",
  },
  {
    icon: Layers,
    label: "Transfer Layer",
    description: "Protected transfer creation, claims, rewind intents",
    color: "cyan",
  },
  {
    icon: Database,
    label: "State Ledger",
    description: "Single source of truth for transfer lifecycle",
    color: "violet",
  },
  {
    icon: Shield,
    label: "Risk & Safety",
    description: "Deterministic gates: limits, cooldowns, integrity checks",
    color: "violet",
  },
];

const outcomes = [
  {
    icon: RotateCcw,
    label: "Rewind",
    description: "Sender reclaims funds",
    color: "cyan",
  },
  {
    icon: Unlock,
    label: "Early Release",
    description: "Sender releases → Recipient claims",
    color: "amber",
  },
  {
    icon: CheckCircle,
    label: "Finalize",
    description: "Expiry → Recipient claims",
    color: "emerald",
  },
];

export default function SystemFlowDiagram() {
  return (
    <div className="my-10">
      {/* Main Flow */}
      <div className="flex flex-col items-center">
        {steps.map((step, index) => (
          <div key={step.label} className="flex flex-col items-center">
            {/* Step Box */}
            <div className={`
              relative w-full max-w-sm p-4 rounded-xl border transition-all duration-300
              ${step.color === 'cyan'
                ? 'bg-cyan/5 border-cyan/30 hover:bg-cyan/10'
                : 'bg-violet/5 border-violet/30 hover:bg-violet/10'}
            `}>
              <div className="flex items-center gap-4">
                <div className={`
                  w-12 h-12 rounded-xl flex items-center justify-center
                  ${step.color === 'cyan' ? 'bg-cyan/20' : 'bg-violet/20'}
                `}>
                  <step.icon className={`w-6 h-6 ${step.color === 'cyan' ? 'text-cyan' : 'text-violet'}`} />
                </div>
                <div>
                  <h4 className="text-white font-semibold" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {step.label}
                  </h4>
                  <p className="text-white/50 text-sm">{step.description}</p>
                </div>
              </div>
            </div>

            {/* Connector Arrow */}
            {index < steps.length - 1 && (
              <div className="flex flex-col items-center py-2">
                <div className="w-px h-6 bg-gradient-to-b from-white/20 to-white/10" />
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white/20" />
              </div>
            )}
          </div>
        ))}

        {/* Window Indicator */}
        <div className="flex flex-col items-center py-3">
          <div className="w-px h-4 bg-gradient-to-b from-white/20 to-white/10" />
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5">
            <Clock className="w-4 h-4 text-white/50" />
            <span className="text-white/70 text-sm font-mono">Window Active: 2min – 48h</span>
          </div>
          <div className="w-px h-4 bg-gradient-to-b from-white/10 to-white/20" />
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white/20" />
        </div>

        {/* Outcomes Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl">
          {outcomes.map((outcome) => {
            const colorClasses = {
              cyan: { bg: 'bg-cyan/5', border: 'border-cyan/30', hover: 'hover:bg-cyan/10', iconBg: 'bg-cyan/20', text: 'text-cyan' },
              amber: { bg: 'bg-amber-500/5', border: 'border-amber-500/30', hover: 'hover:bg-amber-500/10', iconBg: 'bg-amber-500/20', text: 'text-amber-400' },
              emerald: { bg: 'bg-emerald-500/5', border: 'border-emerald-500/30', hover: 'hover:bg-emerald-500/10', iconBg: 'bg-emerald-500/20', text: 'text-emerald-400' },
            };
            const colors = colorClasses[outcome.color as keyof typeof colorClasses];

            return (
              <div key={outcome.label} className={`p-4 rounded-xl border transition-all duration-300 ${colors.bg} ${colors.border} ${colors.hover}`}>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colors.iconBg}`}>
                    <outcome.icon className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <div>
                    <h4 className={`font-semibold text-sm ${colors.text}`}>{outcome.label}</h4>
                    <p className="text-white/40 text-xs">{outcome.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Proof Layer (only from Rewind) */}
        <div className="flex flex-col items-center mt-4">
          <div className="flex items-center gap-2 text-white/30 text-xs mb-2">
            <span>↓ On rewind only</span>
          </div>
          <div className="p-4 rounded-xl border bg-violet/5 border-violet/30 hover:bg-violet/10 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-violet/20">
                <FileCheck className="w-5 h-5 text-violet" />
              </div>
              <div>
                <h4 className="text-violet font-semibold">Proof Layer</h4>
                <p className="text-white/40 text-xs">On-chain rewind attestation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Note */}
      <p className="text-center text-white/40 text-sm mt-8 max-w-md mx-auto">
        All user-initiated state changes pass through a single canonical entry layer. Internal modules cannot be invoked directly.
      </p>
    </div>
  );
}
