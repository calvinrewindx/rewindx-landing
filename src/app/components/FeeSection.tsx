"use client";

import { useState } from "react";
import { Shield, RotateCcw, ChevronDown, Check, Zap, Users, Lock, TrendingUp } from "lucide-react";

export default function FeeSection() {
  const [openCard, setOpenCard] = useState<string | null>(null);

  return (
    <section className="section relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Hero: Big Number */}
        <div className="text-center mb-14">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Fair & Predictable <span className="text-cyan">Fees</span>
          </h2>
          <p className="text-white/50 text-sm max-w-md mx-auto mb-10">
            Transparent fees for protected transfers. No hidden costs.
          </p>

          {/* Fee Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Protected Transfer Fee */}
            <div className="p-6 rounded-2xl bg-cyan/[0.05] border border-cyan/20">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-3 font-mono">Protected Transfer Fee</p>
              <h3
                className="text-5xl sm:text-6xl font-bold text-white mb-3"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  textShadow: "0 0 40px rgba(0, 212, 255, 0.2)"
                }}
              >
                1–3<span className="text-cyan">%</span>
              </h3>
              <p className="text-white/50 text-sm mb-1">1% for preferred supported tokens</p>
              <p className="text-white/50 text-sm">Up to 3% for extended / non-preferred supported tokens</p>
            </div>

            {/* Rewind Execution Fee */}
            <div className="p-6 rounded-2xl bg-violet/[0.05] border border-violet/20">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-3 font-mono">Rewind Execution Fee</p>
              <h3
                className="text-5xl sm:text-6xl font-bold text-white mb-3"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  textShadow: "0 0 40px rgba(139, 92, 246, 0.2)"
                }}
              >
                1.5<span className="text-violet">%</span>
              </h3>
              <p className="text-white/50 text-sm">Only applies if a rewind is executed</p>
            </div>
          </div>

          {/* NFT Note */}
          <p className="text-white/40 text-xs max-w-lg mx-auto mt-8 text-center">
            NFT tiers reduce the protected transfer fee. The rewind execution fee is separate and not discounted.
          </p>
        </div>

        {/* Expandable Cards */}
        <div className="space-y-5 mb-14">
          {/* Protection Activation Fee */}
          <div className={`rounded-xl border transition-all duration-300 overflow-hidden ${openCard === 'protection' ? 'border-cyan/40 bg-cyan/[0.03]' : 'border-white/10 bg-white/[0.02]'}`}>
            <button
              onClick={() => setOpenCard(openCard === 'protection' ? null : 'protection')}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <div className="flex items-center gap-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${openCard === 'protection' ? 'bg-cyan/20 border-cyan/40' : 'bg-white/5 border-white/10'} border`}>
                  <Shield className="w-5 h-5 text-cyan" />
                </div>
                <div>
                  <h4
                    className="text-white font-semibold"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    Protected Transfer Fee
                  </h4>
                  <p className="text-white/40 text-sm">Paid when creating a protected transfer</p>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-white/40 transition-transform duration-300 ${openCard === 'protection' ? 'rotate-180 text-cyan' : ''}`} />
            </button>

            <div className={`transition-all duration-300 ${openCard === 'protection' ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
              <div className="px-5 pb-5 pt-0">
                <div className="p-4 rounded-lg bg-white/[0.03] border border-white/5">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-cyan mt-0.5 flex-shrink-0" />
                      <span className="text-white/50"><span className="text-white/80">1%</span> for preferred supported tokens</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-cyan mt-0.5 flex-shrink-0" />
                      <span className="text-white/50">Up to <span className="text-white/80">3%</span> for extended / non-preferred supported tokens</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-cyan mt-0.5 flex-shrink-0" />
                      <span className="text-white/50">NFT tiers can reduce this fee</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-cyan mt-0.5 flex-shrink-0" />
                      <span className="text-white/50">Fee applies <span className="text-white/80">per protected transfer</span></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Rewind Execution Fee */}
          <div className={`rounded-xl border transition-all duration-300 overflow-hidden ${openCard === 'rewind' ? 'border-violet/40 bg-violet/[0.03]' : 'border-white/10 bg-white/[0.02]'}`}>
            <button
              onClick={() => setOpenCard(openCard === 'rewind' ? null : 'rewind')}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <div className="flex items-center gap-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${openCard === 'rewind' ? 'bg-violet/20 border-violet/40' : 'bg-white/5 border-white/10'} border`}>
                  <RotateCcw className="w-5 h-5 text-violet" />
                </div>
                <div>
                  <h4
                    className="text-white font-semibold"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    Rewind Execution Fee
                  </h4>
                  <p className="text-white/40 text-sm">Only applies if a rewind is executed</p>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-white/40 transition-transform duration-300 ${openCard === 'rewind' ? 'rotate-180 text-violet' : ''}`} />
            </button>

            <div className={`transition-all duration-300 ${openCard === 'rewind' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
              <div className="px-5 pb-5 pt-0">
                <div className="p-4 rounded-lg bg-white/[0.03] border border-white/5">
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-violet mt-0.5 flex-shrink-0" />
                      <span className="text-white/50">A flat <span className="text-white/80">1.5%</span> fee applies to all users.</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-violet mt-0.5 flex-shrink-0" />
                      <span className="text-white/50">Calculated on-chain. Fixed rules, no exceptions.</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-violet mt-0.5 flex-shrink-0" />
                      <span className="text-white/50">No manual approvals or overrides.</span>
                    </li>
                  </ul>
                  <div className="p-3 rounded-lg bg-violet/10 border border-violet/20">
                    <p className="text-violet text-sm font-medium">
                      If you never rewind → you never pay this fee.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reversal Models Comparison */}
        <div className="mb-14">
          <h3
            className="text-xl font-semibold text-white text-center mb-3"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Reversal Models <span className="text-cyan">Compared</span>
          </h3>
          <p className="text-white/50 text-sm text-center mb-8 max-w-xl mx-auto leading-relaxed">
            Most systems rely on custodial intervention. Crypto offers no recourse. <span className="text-cyan font-medium">Rewind X</span> introduces protocol-level, <span className="text-white font-medium">on-chain</span> reversibility.
          </p>

          {/* Mobile: Cards */}
          <div className="sm:hidden space-y-3">
            {[
              { name: "Chargebacks", custody: "Custodial", custodyColor: "yellow", type: "Discretionary", time: "Days – Months" },
              { name: "Bank Recall", custody: "Custodial", custodyColor: "yellow", type: "Manual", time: "Uncertain" },
              { name: "Crypto Today", custody: "Non-custodial", custodyColor: "emerald", type: "No reversal", typeColor: "red", time: "—" },
            ].map((item) => (
              <div key={item.name} className="p-4 rounded-xl border border-white/10 bg-white/[0.02] active:bg-white/[0.04] transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/70 font-medium">{item.name}</span>
                  <span className={`px-2 py-1 rounded-full text-[10px] font-medium border ${item.custodyColor === 'yellow' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/10' : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/10'}`}>
                    {item.custody}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className={item.typeColor === 'red' ? 'text-red-400/70 font-medium' : 'text-white/40'}>{item.type}</span>
                  <span className="text-white/30 font-mono text-xs">{item.time}</span>
                </div>
              </div>
            ))}
            {/* Rewind X Card - Highlighted */}
            <div className="p-4 rounded-xl border-2 border-cyan/30 bg-gradient-to-r from-cyan/[0.08] to-violet/[0.05]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-cyan font-bold" style={{ fontFamily: "var(--font-space-grotesk)" }}>Rewind X</span>
                <span className="px-2 py-1 rounded-full text-[10px] font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">Non-custodial</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-cyan font-semibold">Deterministic</span>
                <span className="text-cyan font-semibold font-mono">3 min – 24h</span>
              </div>
            </div>
          </div>

          {/* Desktop: Table */}
          <div className="hidden sm:block rounded-2xl border border-white/10 overflow-hidden backdrop-blur-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-white/[0.04]">
                  <th className="text-left py-4 px-6 text-white/50 text-[10px] uppercase tracking-[0.15em] font-medium font-mono">Model</th>
                  <th className="text-center py-4 px-6 text-white/50 text-[10px] uppercase tracking-[0.15em] font-medium font-mono">Custody</th>
                  <th className="text-left py-4 px-6 text-white/50 text-[10px] uppercase tracking-[0.15em] font-medium font-mono">Reversal Type</th>
                  <th className="text-left py-4 px-6 text-white/50 text-[10px] uppercase tracking-[0.15em] font-medium font-mono">Time Window</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-white/5 hover:bg-white/[0.03] transition-all duration-200 group">
                  <td className="py-5 px-6 text-white/60 font-medium group-hover:text-white/80 transition-colors">Chargebacks</td>
                  <td className="py-5 px-6 text-center">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-yellow-500/10 text-yellow-400/80 border border-yellow-500/10">Custodial</span>
                  </td>
                  <td className="py-5 px-6 text-white/40 group-hover:text-white/60 transition-colors">Discretionary</td>
                  <td className="py-5 px-6 text-white/40 font-mono text-sm group-hover:text-white/60 transition-colors">Days – Months</td>
                </tr>
                <tr className="border-t border-white/5 hover:bg-white/[0.03] transition-all duration-200 group">
                  <td className="py-5 px-6 text-white/60 font-medium group-hover:text-white/80 transition-colors">Bank Recall</td>
                  <td className="py-5 px-6 text-center">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-yellow-500/10 text-yellow-400/80 border border-yellow-500/10">Custodial</span>
                  </td>
                  <td className="py-5 px-6 text-white/40 group-hover:text-white/60 transition-colors">Manual</td>
                  <td className="py-5 px-6 text-white/40 font-mono text-sm group-hover:text-white/60 transition-colors">Uncertain</td>
                </tr>
                <tr className="border-t border-white/5 hover:bg-red-500/[0.03] transition-all duration-200 group">
                  <td className="py-5 px-6 text-white/60 font-medium group-hover:text-white/80 transition-colors">Crypto Today</td>
                  <td className="py-5 px-6 text-center">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/10">Non-custodial</span>
                  </td>
                  <td className="py-5 px-6 text-red-400/70 font-medium group-hover:text-red-400 transition-colors">No reversal</td>
                  <td className="py-5 px-6 text-white/20 font-mono text-sm">—</td>
                </tr>
                <tr className="border-t-2 border-cyan/20 bg-gradient-to-r from-cyan/[0.08] via-cyan/[0.04] to-violet/[0.06] hover:from-cyan/[0.12] hover:to-violet/[0.08] transition-all duration-300">
                  <td className="py-5 px-6">
                    <span className="text-cyan font-bold text-base" style={{ fontFamily: "var(--font-space-grotesk)" }}>Rewind X</span>
                  </td>
                  <td className="py-5 px-6 text-center">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">Non-custodial</span>
                  </td>
                  <td className="py-5 px-6">
                    <span className="text-cyan font-semibold">Deterministic</span>
                  </td>
                  <td className="py-5 px-6">
                    <span className="text-cyan font-semibold font-mono">3 min – 24h</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Punchline */}
          <p className="text-center text-white/40 text-sm mt-6 italic">
            Reversibility becomes a protocol feature — not a support ticket.
          </p>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* No Hidden Costs */}
          <div className="group p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:border-cyan/30 hover:bg-cyan/[0.03] transition-all duration-300">
            <h4
              className="text-white font-semibold text-base mb-4 group-hover:text-cyan transition-colors duration-300"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              No Hidden Costs
            </h4>
            <div className="space-y-2.5">
              {["No subscriptions", "No monthly fees", "No setup costs", "No hidden charges"].map((item, i) => (
                <p key={i} className="text-white/40 text-sm flex items-center gap-3 group-hover:text-white/60 transition-colors duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan/40 group-hover:bg-cyan/70 transition-colors duration-300" />
                  {item}
                </p>
              ))}
            </div>
            <p className="text-cyan/50 text-xs mt-5 pt-4 border-t border-white/5 group-hover:text-cyan/70 transition-colors duration-300 font-medium">
              You only pay when you use protection.
            </p>
          </div>

          {/* Designed to Work */}
          <div className="group p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:border-violet/30 hover:bg-violet/[0.03] transition-all duration-300">
            <h4
              className="text-white font-semibold text-base mb-4 group-hover:text-violet transition-colors duration-300"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Designed to Work
            </h4>
            <div className="space-y-3">
              {[
                { icon: Users, text: "Fair", desc: "costs only apply when needed", color: "cyan" },
                { icon: Shield, text: "Deters abuse", desc: "abnormal behavior becomes expensive", color: "violet" },
                { icon: TrendingUp, text: "Predictable", desc: "fees are fixed and on-chain", color: "cyan" },
                { icon: Lock, text: "Bounded", desc: "maximum cost is always known", color: "violet" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-2 -mx-2 rounded-lg hover:bg-white/[0.03] transition-all duration-200 cursor-default"
                >
                  <item.icon className={`w-4 h-4 mt-0.5 flex-shrink-0 transition-colors duration-300 ${
                    item.color === "cyan" ? "text-cyan/50 group-hover:text-cyan" : "text-violet/50 group-hover:text-violet"
                  }`} />
                  <p className="text-sm">
                    <span className="text-white/70 font-medium">{item.text}</span>
                    <span className="text-white/40"> · {item.desc}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
