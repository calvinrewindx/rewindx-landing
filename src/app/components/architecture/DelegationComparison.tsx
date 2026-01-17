"use client";

import { User, Bot, Clock, ShieldCheck, Zap, ShieldX, KeyRound, BadgeCheck } from "lucide-react";

const modes = [
  {
    title: "Manual Mode",
    icon: User,
    color: "cyan",
    features: [
      "User signs every rewind manually",
      "No delegation required",
      "Full control at all times",
      "Best for occasional users",
    ],
    cta: "Default for all users",
  },
  {
    title: "Delegated Mode",
    icon: Bot,
    color: "violet",
    features: [
      "User activates via setDelegate()",
      "1-hour cooldown before active",
      "Delegate executes rewinds under on-chain constraints",
      "Instant disable anytime",
    ],
    cta: "User-activated delegated protection",
  },
];

const authorizationFlow = [
  "User calls setDelegate(agent) to enable delegated protection",
  "1-hour security cooldown begins (anti-phishing / social-engineering protection)",
  "After cooldown, the delegate may execute rewind() only for sender-created transfers, subject to on-chain limits",
  "User can disable instantly via removeDelegate() (no cooldown)",
  "Daily limits enforced per NFT tier",
  "Delegate can only call rewind() — never transfer, redirect, or withdraw funds",
];

const securityFeatures = [
  { icon: ShieldCheck, label: "Non-Custodial", desc: "Funds held by protocol contract; move only via on-chain rules" },
  { icon: KeyRound, label: "Explicit Activation", desc: "Delegation is opt-in (setDelegate()), never default" },
  { icon: Zap, label: "Instant Revoke", desc: "removeDelegate() takes effect immediately" },
  { icon: Clock, label: "Cooldown Protection", desc: "1-hour delay prevents rushed/forced delegation changes" },
  { icon: ShieldX, label: "Daily Limits", desc: "Enforced per tier" },
  { icon: BadgeCheck, label: "Official Agents", desc: "AgentPass: delegation restricted to protocol allowlist (on-chain enforced)" },
];

export default function DelegationComparison() {
  return (
    <div className="my-10">
      {/* Mode Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {modes.map((mode) => (
          <div
            key={mode.title}
            className={`
              p-6 rounded-2xl border transition-all duration-300
              ${mode.color === 'cyan'
                ? 'bg-cyan/5 border-cyan/30 hover:border-cyan/50'
                : 'bg-violet/5 border-violet/30 hover:border-violet/50'}
            `}
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className={`
                w-14 h-14 rounded-xl flex items-center justify-center
                ${mode.color === 'cyan' ? 'bg-cyan/20' : 'bg-violet/20'}
              `}>
                <mode.icon className={`w-7 h-7 ${mode.color === 'cyan' ? 'text-cyan' : 'text-violet'}`} />
              </div>
              <div>
                <h3
                  className={`text-xl font-bold ${mode.color === 'cyan' ? 'text-cyan' : 'text-violet'}`}
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {mode.title}
                </h3>
                <span className="text-white/40 text-sm">{mode.cta}</span>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-3">
              {mode.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className={`text-lg ${mode.color === 'cyan' ? 'text-cyan' : 'text-violet'}`}>•</span>
                  <span className="text-white/70 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Convergence Arrow */}
      <div className="flex justify-center mb-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-8">
            <div className="w-20 h-px bg-gradient-to-r from-cyan/50 to-transparent" />
            <div className="w-20 h-px bg-gradient-to-l from-violet/50 to-transparent" />
          </div>
          <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-white/30 mt-1" />
        </div>
      </div>

      {/* Common Enforcement */}
      <div className="p-5 rounded-xl border border-white/20 bg-white/5 text-center mb-10">
        <p className="text-white font-semibold" style={{ fontFamily: "var(--font-space-grotesk)" }}>
          IntentBasedRewind
        </p>
        <p className="text-white/50 text-sm">Same on-chain enforcement for both modes</p>
      </div>

      {/* Authorization Flow */}
      <h4 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>
        Authorization Flow (Delegated Mode)
      </h4>
      <div className="p-5 rounded-xl border border-violet/20 bg-violet/5 mb-10">
        <ol className="space-y-3">
          {authorizationFlow.map((step, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-violet font-mono text-sm min-w-[1.5rem]">{index + 1}.</span>
              <span className="text-white/70 text-sm">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Security Grid */}
      <h4 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>
        Security Guarantees
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {securityFeatures.map((feature) => (
          <div key={feature.label} className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.02]">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-emerald-500/10 flex-shrink-0">
              <feature.icon className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h5 className="text-white font-medium text-sm">{feature.label}</h5>
              <p className="text-white/50 text-xs">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
