import { Shield, RotateCcw, Check, Landmark, Building2, Wallet, X, Sparkles } from "lucide-react";

export default function FeeSection() {
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
            <div className="group relative p-6 rounded-2xl bg-cyan/[0.05] border border-cyan/20 hover:border-cyan/40 hover:bg-cyan/[0.08] transition-all duration-300 overflow-hidden">
              <div className="absolute -inset-1 rounded-2xl bg-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-cyan/10 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="relative text-white/40 text-xs uppercase tracking-wider mb-3 font-mono group-hover:text-cyan/70 transition-colors">
                Protected Transfer Fee
              </p>
              <h3
                className="relative text-5xl sm:text-6xl font-bold text-white mb-3 group-hover:scale-[1.02] transition-transform duration-300 origin-left"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  textShadow: "0 0 40px rgba(0, 212, 255, 0.2)"
                }}
              >
                1–3<span className="text-cyan">%</span>
              </h3>
              <p className="relative text-white/50 text-sm mb-1 group-hover:text-white/70 transition-colors">1% for preferred supported tokens</p>
              <p className="relative text-white/50 text-sm group-hover:text-white/70 transition-colors">Up to 3% for extended / non-preferred supported tokens</p>
            </div>

            {/* Rewind Execution Fee */}
            <div className="group relative p-6 rounded-2xl bg-violet/[0.05] border border-violet/20 hover:border-violet/40 hover:bg-violet/[0.08] transition-all duration-300 overflow-hidden">
              <div className="absolute -inset-1 rounded-2xl bg-violet/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-violet/10 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="relative text-white/40 text-xs uppercase tracking-wider mb-3 font-mono group-hover:text-violet/70 transition-colors">
                Rewind Execution Fee
              </p>
              <h3
                className="relative text-5xl sm:text-6xl font-bold text-white mb-3 group-hover:scale-[1.02] transition-transform duration-300 origin-left"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  textShadow: "0 0 40px rgba(139, 92, 246, 0.2)"
                }}
              >
                1.5<span className="text-violet">%</span>
              </h3>
              <p className="relative text-white/50 text-sm group-hover:text-white/70 transition-colors">Only applies if a rewind is executed</p>
            </div>
          </div>

          {/* NFT Note */}
          <p className="text-white/40 text-xs max-w-lg mx-auto mt-8 text-center">
            NFT tiers reduce the protected transfer fee. The rewind execution fee is separate and not discounted.
          </p>
        </div>

        {/* Compact Fee Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
          {/* Protection Fee */}
          <div className="group p-5 rounded-xl border border-cyan/15 bg-cyan/[0.02] hover:border-cyan/30 hover:bg-cyan/[0.05] hover:shadow-[0_0_25px_-8px_rgba(0,212,255,0.4)] transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center group-hover:bg-cyan/20 group-hover:border-cyan/40 group-hover:scale-110 transition-all duration-300">
                <Shield className="w-4 h-4 text-cyan" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  Protection Fee
                </h4>
                <p className="text-white/40 text-xs">Charged at transfer creation</p>
              </div>
            </div>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2 text-xs">
                <Check className="w-3.5 h-3.5 text-cyan mt-0.5 flex-shrink-0" />
                <span className="text-white/60"><span className="text-white/90">1%</span> preferred · Up to <span className="text-white/90">3%</span> extended</span>
              </li>
              <li className="flex items-start gap-2 text-xs">
                <Check className="w-3.5 h-3.5 text-cyan mt-0.5 flex-shrink-0" />
                <span className="text-white/60">NFT tiers can reduce this fee</span>
              </li>
              <li className="flex items-start gap-2 text-xs">
                <Check className="w-3.5 h-3.5 text-cyan mt-0.5 flex-shrink-0" />
                <span className="text-white/60">Applies per protected transfer</span>
              </li>
            </ul>
          </div>

          {/* Rewind Fee */}
          <div className="group p-5 rounded-xl border border-violet/15 bg-violet/[0.02] hover:border-violet/30 hover:bg-violet/[0.05] hover:shadow-[0_0_25px_-8px_rgba(139,92,246,0.4)] transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-violet/10 border border-violet/20 flex items-center justify-center group-hover:bg-violet/20 group-hover:border-violet/40 group-hover:scale-110 transition-all duration-300">
                <RotateCcw className="w-4 h-4 text-violet" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  Rewind Fee
                </h4>
                <p className="text-white/40 text-xs">Only if a rewind is executed</p>
              </div>
            </div>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2 text-xs">
                <Check className="w-3.5 h-3.5 text-violet mt-0.5 flex-shrink-0" />
                <span className="text-white/60"><span className="text-white/90">1.5%</span> per rewind execution</span>
              </li>
              <li className="flex items-start gap-2 text-xs">
                <Check className="w-3.5 h-3.5 text-violet mt-0.5 flex-shrink-0" />
                <span className="text-white/60">Calculated on-chain · Hard-capped by contract</span>
              </li>
              <li className="flex items-start gap-2 text-xs">
                <Check className="w-3.5 h-3.5 text-violet mt-0.5 flex-shrink-0" />
                <span className="text-violet/80 font-medium">Never rewind → never pay this fee</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Concrete Example Block */}
        <div className="mb-14">
          <h3
            className="text-xl font-semibold text-white text-center mb-3"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            What does it cost in <span className="text-cyan">practice</span>?
          </h3>
          <p className="text-white/50 text-sm text-center mb-8 max-w-xl mx-auto">
            Example: $1,000 protected transfer · Preferred token (1%)
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {/* Scenario A: Settles Normally */}
            <div className="p-5 rounded-2xl border border-cyan/20 bg-cyan/[0.03] hover:border-cyan/30 transition-colors">
              <p className="text-cyan/80 text-xs uppercase tracking-wider font-mono mb-4">
                If transfer settles normally
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-white/50">You pay</span><span className="text-white/80 font-mono">$1,000</span></div>
                <div className="flex justify-between"><span className="text-white/50">Recipient receives</span><span className="text-white/80 font-mono">$990</span></div>
                <div className="h-px bg-white/10 my-3" />
                <div className="flex justify-between"><span className="text-white/60 font-medium">Protection cost</span><span className="text-cyan font-semibold font-mono">$10</span></div>
              </div>
            </div>

            {/* Scenario B: If Rewind */}
            <div className="p-5 rounded-2xl border border-violet/20 bg-violet/[0.03] hover:border-violet/30 transition-colors">
              <p className="text-violet/80 text-xs uppercase tracking-wider font-mono mb-4">
                If you execute a rewind
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-white/50">You pay</span><span className="text-white/80 font-mono">$1,000</span></div>
                <div className="flex justify-between"><span className="text-white/50">You recover</span><span className="text-white/80 font-mono">~$975</span></div>
                <div className="h-px bg-white/10 my-3" />
                <div className="flex justify-between"><span className="text-white/60 font-medium">Total cost</span><span className="text-violet font-semibold font-mono">~$25</span></div>
              </div>
            </div>
          </div>

          {/* Extended Token Comparison */}
          <p className="text-white/40 text-xs text-center mt-6 max-w-xl mx-auto">
            Extended tokens (3% protection fee): total cost if recovered ≈ <span className="text-white/60 font-medium">$45</span> on a $1,000 transfer.
          </p>

          {/* Token Tier Note */}
          <p className="text-white/30 text-xs text-center mt-4 max-w-2xl mx-auto leading-relaxed">
            Most supported tokens (USDT, USDC, DAI, WBNB, ETH, BTCB) fall into the 1% preferred tier. Token category is determined by liquidity, oracle reliability, and operational risk profile. Exact fees are shown at transfer creation in the app.
          </p>
        </div>

        {/* Positioning Statement */}
        <div className="mb-14 max-w-2xl mx-auto p-6 rounded-2xl border border-cyan/15 bg-cyan/[0.02]">
          <p className="text-white/70 text-sm leading-relaxed mb-3">
            Protected transfers cost more than standard transfers because they add a review window and recovery path.
          </p>
          <p className="text-cyan text-sm font-medium">
            Use protected transfers when the cost of an error would be higher than the protection fee.
          </p>
        </div>

        {/* Reversal Models Comparison */}
        <div className="mb-14">
          <p className="text-cyan/70 text-[10px] uppercase tracking-[0.3em] font-mono mb-3 text-center">
            Comparison
          </p>
          <h3
            className="text-2xl sm:text-3xl font-bold text-white text-center mb-3"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Reversal Models <span className="text-cyan">Compared</span>
          </h3>
          <p className="text-white/50 text-sm text-center mb-10 max-w-xl mx-auto leading-relaxed">
            Most systems rely on custodial intervention. Crypto offers no recourse.{" "}
            <span className="text-cyan font-medium">Rewind X</span> introduces protocol-level,{" "}
            <span className="text-white font-medium">on-chain</span> reversibility.
          </p>

          {/* Mobile: Cards */}
          <div className="sm:hidden space-y-3">
            {[
              { name: "Chargebacks", icon: Building2, custody: "Custodial", custodyColor: "yellow", type: "Discretionary", time: "Days – Months", typeIcon: X },
              { name: "Bank Recall", icon: Landmark, custody: "Custodial", custodyColor: "yellow", type: "Manual", time: "Uncertain", typeIcon: X },
              { name: "Crypto Today", icon: Wallet, custody: "Non-custodial", custodyColor: "emerald", type: "No reversal", typeColor: "red", time: "—", typeIcon: X },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  className="p-4 rounded-xl border border-white/10 bg-white/[0.02] active:bg-white/[0.04] transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5 text-white/50" />
                      </div>
                      <span className="text-white/70 font-medium text-sm">{item.name}</span>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-[10px] font-medium border ${
                        item.custodyColor === "yellow"
                          ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/10"
                          : "bg-emerald-500/10 text-emerald-400 border-emerald-500/10"
                      }`}
                    >
                      {item.custody}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm pl-9">
                    <span className={item.typeColor === "red" ? "text-red-400/70 font-medium" : "text-white/40"}>
                      {item.type}
                    </span>
                    <span className="text-white/30 font-mono text-xs">{item.time}</span>
                  </div>
                </div>
              );
            })}
            {/* Rewind X Card — Highlighted */}
            <div className="relative p-4 rounded-xl border-2 border-cyan/30 bg-gradient-to-br from-cyan/[0.10] via-cyan/[0.04] to-violet/[0.08] shadow-[0_0_30px_-10px_rgba(0,212,255,0.4)]">
              <span className="absolute -top-2 right-4 px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider bg-cyan/15 text-cyan border border-cyan/30">
                Protocol-Native
              </span>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-cyan/20 border border-cyan/40 flex items-center justify-center shadow-[0_0_12px_-2px_rgba(0,212,255,0.5)]">
                    <RotateCcw className="w-3.5 h-3.5 text-cyan" />
                  </div>
                  <span className="text-cyan font-bold text-sm" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    Rewind X
                  </span>
                </div>
                <span className="px-2 py-1 rounded-full text-[10px] font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                  Non-custodial
                </span>
              </div>
              <div className="flex items-center justify-between text-sm pl-9">
                <span className="text-cyan font-semibold inline-flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  Deterministic
                </span>
                <span className="text-cyan font-semibold font-mono text-xs">3 min – 24h</span>
              </div>
            </div>
          </div>

          {/* Desktop: Enhanced Table */}
          <div className="hidden sm:block relative">
            {/* Glow accent behind Rewind X row */}
            <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-cyan/[0.05] blur-[40px] pointer-events-none" />

            <div className="relative rounded-2xl border border-white/10 overflow-hidden backdrop-blur-sm bg-white/[0.01]">
              <table className="w-full">
                <thead>
                  <tr className="bg-white/[0.04] border-b border-white/[0.08]">
                    <th className="text-left py-4 px-6 text-white/50 text-[10px] uppercase tracking-[0.2em] font-medium font-mono">
                      Model
                    </th>
                    <th className="text-center py-4 px-6 text-white/50 text-[10px] uppercase tracking-[0.2em] font-medium font-mono">
                      Custody
                    </th>
                    <th className="text-left py-4 px-6 text-white/50 text-[10px] uppercase tracking-[0.2em] font-medium font-mono">
                      Reversal Type
                    </th>
                    <th className="text-right py-4 px-6 text-white/50 text-[10px] uppercase tracking-[0.2em] font-medium font-mono">
                      Time Window
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Chargebacks", icon: Building2, custody: "Custodial", custodyColor: "yellow", type: "Discretionary", typeColor: "neutral", time: "Days – Months" },
                    { name: "Bank Recall", icon: Landmark, custody: "Custodial", custodyColor: "yellow", type: "Manual", typeColor: "neutral", time: "Uncertain" },
                    { name: "Crypto Today", icon: Wallet, custody: "Non-custodial", custodyColor: "emerald", type: "No reversal", typeColor: "red", time: "—" },
                  ].map((row) => {
                    const Icon = row.icon;
                    return (
                      <tr
                        key={row.name}
                        className="border-t border-white/5 hover:bg-white/[0.03] transition-all duration-200 group"
                      >
                        <td className="py-5 px-6">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                              <Icon className="w-4 h-4 text-white/50 group-hover:text-white/70 transition-colors" />
                            </div>
                            <span className="text-white/70 font-medium group-hover:text-white/90 transition-colors">
                              {row.name}
                            </span>
                          </div>
                        </td>
                        <td className="py-5 px-6 text-center">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium border ${
                              row.custodyColor === "yellow"
                                ? "bg-yellow-500/10 text-yellow-400/80 border-yellow-500/15"
                                : "bg-emerald-500/10 text-emerald-400 border-emerald-500/15"
                            }`}
                          >
                            {row.custody}
                          </span>
                        </td>
                        <td className="py-5 px-6">
                          <span
                            className={`inline-flex items-center gap-1.5 ${
                              row.typeColor === "red"
                                ? "text-red-400/70 font-medium group-hover:text-red-400"
                                : "text-white/40 group-hover:text-white/60"
                            } transition-colors`}
                          >
                            {row.typeColor === "red" && <X className="w-3.5 h-3.5" />}
                            {row.type}
                          </span>
                        </td>
                        <td className="py-5 px-6 text-right text-white/40 font-mono text-sm group-hover:text-white/60 transition-colors">
                          {row.time}
                        </td>
                      </tr>
                    );
                  })}
                  {/* Rewind X — Highlighted Row */}
                  <tr className="relative border-t-2 border-cyan/30 bg-gradient-to-r from-cyan/[0.10] via-cyan/[0.05] to-violet/[0.08] hover:from-cyan/[0.14] hover:to-violet/[0.10] transition-all duration-300">
                    <td className="py-6 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan/30 to-cyan/10 border border-cyan/40 flex items-center justify-center shadow-[0_0_20px_-5px_rgba(0,212,255,0.5)]">
                          <RotateCcw className="w-4 h-4 text-cyan" />
                        </div>
                        <div className="flex flex-col">
                          <span
                            className="text-cyan font-bold text-base"
                            style={{ fontFamily: "var(--font-space-grotesk)" }}
                          >
                            Rewind X
                          </span>
                          <span className="text-cyan/50 text-[9px] font-mono uppercase tracking-wider">
                            On-Chain
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                        <Check className="w-3 h-3" />
                        Non-custodial
                      </span>
                    </td>
                    <td className="py-6 px-6">
                      <span className="inline-flex items-center gap-1.5 text-cyan font-semibold">
                        <Sparkles className="w-3.5 h-3.5" />
                        Deterministic
                      </span>
                    </td>
                    <td className="py-6 px-6 text-right">
                      <span className="text-cyan font-semibold font-mono">3 min – 24h</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Punchline */}
          <p className="text-center text-white/40 text-sm mt-6 italic">
            Reversibility becomes a protocol feature — not a support ticket.
          </p>
        </div>

      </div>
    </section>
  );
}
