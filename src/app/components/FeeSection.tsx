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
            A transparent dual-fee model designed for safety without hidden costs.
          </p>

          {/* Main Fee Display */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {/* Left: Big Number */}
            <div className="text-center">
              <p className="text-white/40 text-xs tracking-widest uppercase mb-3 font-mono">
                EOA Forward Transfers
              </p>
              <h3
                className="text-7xl sm:text-8xl font-bold text-white"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  textShadow: "0 0 60px rgba(0, 212, 255, 0.3), 0 0 120px rgba(0, 212, 255, 0.1)"
                }}
              >
                1–3<span className="text-cyan">%</span>
              </h3>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            <div className="md:hidden h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* Right: Breakdown */}
            <div className="flex flex-col gap-3">
              {/* Base + Surcharge */}
              <div className="flex items-center gap-2 text-sm">
                <span className="text-white font-medium">1% base fee</span>
                <span className="text-white/30">+</span>
                <span className="text-cyan font-medium">0–2% surcharge</span>
              </div>

              {/* Token Cards */}
              <div className="flex gap-3">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-cyan/10 border border-cyan/30">
                  <span className="text-white/60 text-xs">RWXT & Stablecoins</span>
                  <span className="text-cyan font-bold">1%</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/20">
                  <span className="text-white/60 text-xs">Other tokens</span>
                  <span className="text-white font-bold">3%</span>
                </div>
              </div>
            </div>
          </div>

          {/* NFT Note */}
          <p className="text-white/40 text-xs max-w-md mx-auto mt-8 text-center">
            <span className="text-emerald-400">NFT tiers</span> reduce the Protection Activation Fee portion by up to <span className="text-emerald-400">50%</span>. Rewind execution fees are not discounted.
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
                    Protection Activation Fee
                  </h4>
                  <p className="text-white/40 text-sm">Paid when creating a protected transfer</p>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-white/40 transition-transform duration-300 ${openCard === 'protection' ? 'rotate-180 text-cyan' : ''}`} />
            </button>

            <div className={`transition-all duration-300 ${openCard === 'protection' ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
              <div className="px-5 pb-5 pt-0">
                <div className="p-4 rounded-lg bg-white/[0.03] border border-white/5">
                  <p className="text-white/60 text-sm mb-4">
                    This fee enables the deterministic safety window.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-cyan mt-0.5 flex-shrink-0" />
                      <span className="text-white/50"><span className="text-white/80">Typical cost:</span> 1–3% for normal EOA transfers</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-cyan mt-0.5 flex-shrink-0" />
                      <span className="text-white/50"><span className="text-white/80">NFT tiers</span> can reduce this activation fee by up to 50%</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-cyan mt-0.5 flex-shrink-0" />
                      <span className="text-white/50">Fee applies <span className="text-white/80">per protected transfer</span></span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-cyan mt-0.5 flex-shrink-0" />
                      <span className="text-white/50">Only charged again when initiating a new protected transfer</span>
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
                  <p className="text-white/60 text-sm mb-4">
                    Determined by the protocol's on-chain Integrity Engine, which adjusts fees based on wallet behavior patterns:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-violet mt-0.5 flex-shrink-0" />
                      <span className="text-white/50"><span className="text-white/80">~1.5%</span> for established, normal wallets (typical case)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-violet mt-0.5 flex-shrink-0" />
                      <span className="text-white/50">Higher fees only for anomalous or high-risk patterns</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-violet mt-0.5 flex-shrink-0" />
                      <span className="text-white/50">Bounded by a <span className="text-white/80">strict maximum cap</span> enforced by protocol rules</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-violet mt-0.5 flex-shrink-0" />
                      <span className="text-white/50"><span className="text-white/80">Fully deterministic.</span> No manual approvals or overrides.</span>
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
            Traditional systems rely on custodial dispute processes. Crypto today offers no recourse. <span className="text-cyan font-medium">Rewind X</span> introduces protocol-level, <span className="text-white font-medium">deterministic</span> reversibility.
          </p>

          {/* Mobile: Cards */}
          <div className="sm:hidden space-y-3">
            {[
              { name: "Chargebacks", custody: "Custodial", custodyColor: "yellow", type: "Discretionary", time: "Days – Months" },
              { name: "Bank Recall", custody: "Custodial", custodyColor: "yellow", type: "Manual", time: "Uncertain" },
              { name: "Crypto Today", custody: "Non-custodial", custodyColor: "emerald", type: "Irreversible", typeColor: "red", time: "—" },
            ].map((item) => (
              <div key={item.name} className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/70 font-medium">{item.name}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.custodyColor === 'yellow' ? 'bg-yellow-500/10 text-yellow-400' : 'bg-emerald-500/10 text-emerald-400'}`}>
                    {item.custody}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className={item.typeColor === 'red' ? 'text-red-400/80' : 'text-white/50'}>{item.type}</span>
                  <span className="text-white/30">{item.time}</span>
                </div>
              </div>
            ))}
            {/* Rewind X Card - Highlighted */}
            <div className="p-4 rounded-xl border border-cyan/30 bg-gradient-to-r from-cyan/10 to-violet/5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-cyan font-semibold">Rewind X</span>
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400">Non-custodial</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-cyan font-medium">Deterministic</span>
                <span className="text-cyan font-medium font-mono">2min – 48h</span>
              </div>
            </div>
          </div>

          {/* Desktop: Table */}
          <div className="hidden sm:block rounded-xl border border-white/10 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-white/[0.03]">
                  <th className="text-left py-4 px-5 text-white/50 text-xs uppercase tracking-wider font-medium">Model</th>
                  <th className="text-center py-4 px-5 text-white/50 text-xs uppercase tracking-wider font-medium">Custody</th>
                  <th className="text-left py-4 px-5 text-white/50 text-xs uppercase tracking-wider font-medium">Reversal Type</th>
                  <th className="text-left py-4 px-5 text-white/50 text-xs uppercase tracking-wider font-medium">Time Window</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-5 text-white/70 font-medium">Chargebacks</td>
                  <td className="py-4 px-5 text-center">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400">Custodial</span>
                  </td>
                  <td className="py-4 px-5 text-white/50">Discretionary</td>
                  <td className="py-4 px-5 text-white/50">Days – Months</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-5 text-white/70 font-medium">Bank Recall</td>
                  <td className="py-4 px-5 text-center">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400">Custodial</span>
                  </td>
                  <td className="py-4 px-5 text-white/50">Manual</td>
                  <td className="py-4 px-5 text-white/50">Uncertain</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-5 text-white/70 font-medium">Crypto Today</td>
                  <td className="py-4 px-5 text-center">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400">Non-custodial</span>
                  </td>
                  <td className="py-4 px-5 text-red-400/80">Irreversible</td>
                  <td className="py-4 px-5 text-white/30">—</td>
                </tr>
                <tr className="bg-gradient-to-r from-cyan/10 to-violet/5">
                  <td className="py-4 px-5">
                    <span className="text-cyan font-semibold">Rewind X</span>
                  </td>
                  <td className="py-4 px-5 text-center">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400">Non-custodial</span>
                  </td>
                  <td className="py-4 px-5">
                    <span className="text-cyan font-medium">Deterministic</span>
                  </td>
                  <td className="py-4 px-5">
                    <span className="text-cyan font-medium font-mono">2min – 48h</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* No Hidden Costs */}
          <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02]">
            <h4 className="text-white font-semibold text-sm mb-3" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              No Hidden Costs
            </h4>
            <div className="space-y-1.5">
              {["No subscription", "No monthly fees", "No setup fees", "No claim fees"].map((item, i) => (
                <p key={i} className="text-white/40 text-xs flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-cyan/50" />
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Why This Model Works */}
          <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02]">
            <h4 className="text-white font-semibold text-sm mb-3" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Why This Model Works
            </h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2 text-white/40 text-xs">
                <Users className="w-3.5 h-3.5 text-cyan" />
                <span>Fair for users</span>
              </div>
              <div className="flex items-center gap-2 text-white/40 text-xs">
                <Shield className="w-3.5 h-3.5 text-violet" />
                <span>Deters attackers</span>
              </div>
              <div className="flex items-center gap-2 text-white/40 text-xs">
                <TrendingUp className="w-3.5 h-3.5 text-cyan" />
                <span>Predictable</span>
              </div>
              <div className="flex items-center gap-2 text-white/40 text-xs">
                <Lock className="w-3.5 h-3.5 text-violet" />
                <span>Bounded costs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
