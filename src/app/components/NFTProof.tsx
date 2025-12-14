"use client";

import { useState } from "react";
import { Award, RotateCcw, Shield, Layers, CheckCircle, FileCheck, Eye, ChevronDown } from "lucide-react";

const nftTiers = [
  { name: "Genesis", discount: "10%", window: "24h" },
  { name: "Gatekeeper", discount: "20%", window: "24h" },
  { name: "Enterprise", discount: "30%", window: "30h" },
  { name: "Prime", discount: "40%", window: "36h" },
  { name: "Nexus", discount: "50%", window: "48h" },
];

// Note: Discounts apply to Protection Activation Fee only

export default function NFTProof() {
  const [tiersOpen, setTiersOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="section relative overflow-visible py-24 sm:py-32">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-violet/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header - Centered */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-cyan text-sm font-medium mb-4 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20">
            <Award className="w-4 h-4" />
            Fragment NFT
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            On-Chain <span className="gradient-text">Proof</span> of Successful Rewinds
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A transferable proof index. Minted on first rewind, updated with cumulative stats on each subsequent rewind.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Flip Card */}
          <div className="flex justify-center lg:justify-start order-1">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-10 bg-gradient-to-br from-cyan/25 to-violet/25 blur-[100px] rounded-full pointer-events-none" />

              {/* Flip Card */}
              <div
                className="flip-card-container cursor-pointer relative z-10 select-none"
                role="button"
                tabIndex={0}
                onClick={() => setIsFlipped(prev => !prev)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setIsFlipped(prev => !prev);
                  }
                }}
              >
                <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>

                  {/* === FRONT SIDE === */}
                  <div className="flip-card-front">
                    <div className="w-full h-full rounded-3xl border border-white/20 bg-[#0a0a0a] relative overflow-hidden">
                      {/* Holographic overlay */}
                      <div className="absolute inset-0 holographic-enhanced opacity-70" />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />

                      {/* Shimmer */}
                      <div className="absolute inset-0 shimmer pointer-events-none" />

                      {/* Card Content */}
                      <div className="relative h-full p-6 flex flex-col z-10">
                        {/* Header */}
                        <div className="mb-4">
                          <h3
                            className="text-white text-base font-semibold mb-1"
                            style={{ fontFamily: "var(--font-space-grotesk)" }}
                          >
                            Rewind X Fragment #1
                          </h3>
                          <span className="text-white/50 text-xs">Proof-of-Rewind · On-Chain</span>
                        </div>

                        {/* Data Fields */}
                        <div className="flex-1 space-y-2">
                          <div className="flex justify-between items-center py-2 border-b border-white/10">
                            <span className="text-white/40 text-xs">TYPE</span>
                            <span className="text-white font-mono text-sm">Fragment</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-white/10">
                            <span className="text-white/40 text-xs">REWIND COUNT</span>
                            <span className="text-cyan font-mono text-sm">38</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-white/10">
                            <span className="text-white/40 text-xs">TOTAL VOLUME</span>
                            <span className="text-white/70 font-mono text-[10px]">7840 USDC, 196 USDT, 980 RWXT</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-white/10">
                            <span className="text-white/40 text-xs">VALID REWINDS</span>
                            <span className="text-white font-mono text-sm">38</span>
                          </div>
                          <div className="flex justify-between items-center py-2">
                            <span className="text-white/40 text-xs">FEE DISCOUNT</span>
                            <span className="text-white/50 font-mono text-sm">0%</span>
                          </div>
                        </div>

                        {/* Footer */}
                        <div className="pt-3 mt-2 border-t border-white/10">
                          <div className="flex items-center justify-center gap-2">
                            <Award className="w-4 h-4 text-violet" />
                            <span className="text-white/50 text-xs">On-Chain Proof</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* === BACK SIDE === */}
                  <div className="flip-card-back">
                    <div className="w-full h-full rounded-3xl border border-white/20 bg-gradient-to-br from-[#0c0c0c] to-[#050505] relative overflow-hidden">
                      {/* Subtle grid */}
                      <div className="absolute inset-0 grid-bg opacity-30" />

                      {/* Card Content */}
                      <div className="relative h-full p-6 flex flex-col z-10">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                          <span
                            className="text-white/90 text-xs font-semibold tracking-[0.2em]"
                            style={{ fontFamily: "var(--font-space-grotesk)" }}
                          >
                            FRAGMENT DETAILS
                          </span>
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan/20 to-violet/20 flex items-center justify-center border border-white/10">
                            <FileCheck className="w-5 h-5 text-white" />
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-white/60 text-sm leading-relaxed mb-6">
                          Tamper-evident Proof Index. On-chain audit trail for reversals.
                        </p>

                        {/* What each Fragment contains */}
                        <div className="flex-1">
                          <p className="text-white/40 text-xs mb-3 uppercase tracking-wider">Tracked Data:</p>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-white/70 text-sm">
                              <span className="w-1 h-1 rounded-full bg-cyan" />
                              Rewind Count
                            </li>
                            <li className="flex items-center gap-2 text-white/70 text-sm">
                              <span className="w-1 h-1 rounded-full bg-cyan" />
                              Total Volume (multi-token)
                            </li>
                            <li className="flex items-center gap-2 text-white/70 text-sm">
                              <span className="w-1 h-1 rounded-full bg-violet" />
                              Valid Rewinds
                            </li>
                            <li className="flex items-center gap-2 text-white/70 text-sm">
                              <span className="w-1 h-1 rounded-full bg-violet" />
                              Fee Discount (0% for Fragments)
                            </li>
                          </ul>
                        </div>

                        {/* Note */}
                        <p className="text-white/40 text-[11px] mt-auto pt-3 border-t border-white/5">
                          Fragments are an updatable index; underlying transfer records and events remain immutable. No fee discounts.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Info text below card */}
              <p className="text-white/40 text-xs mt-4 text-center max-w-[280px] mx-auto">
                <span className="sm:hidden">Tap to flip · </span>
                <span className="hidden sm:inline">Hover to flip · </span>
                Visible in any NFT-compatible wallet.
              </p>
            </div>
          </div>

          {/* Right: Features */}
          <div className="order-2">
            <h3
              className="text-2xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Tamper-Evident Audit Trail
            </h3>
            <p className="text-white/50 mb-8 leading-relaxed">
              Updated with each successful execution. No fee discounts. Fragments are proof, not utility.
            </p>

            {/* Feature List */}
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-6 h-6 text-cyan" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Automatic Minting</h4>
                  <p className="text-white/50 text-sm">Minted on your first successful rewind. Updated with cumulative stats on each subsequent rewind. Transferable.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet/10 border border-violet/30 flex items-center justify-center flex-shrink-0">
                  <RotateCcw className="w-6 h-6 text-violet" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Cumulative Tracking</h4>
                  <p className="text-white/50 text-sm">Tracks total rewind count, volume across all tokens, and valid executions.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-cyan" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Publicly Verifiable</h4>
                  <p className="text-white/50 text-sm">On-chain audit trail. Inspect any Fragment via block explorer or OpenSea.</p>
                </div>
              </div>
            </div>

            {/* NFT Tiers Accordion */}
            <div className="mt-8">
              <button
                onClick={() => setTiersOpen(!tiersOpen)}
                className="w-full flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
              >
                <span className="text-white/70 text-sm font-medium">
                  NFT Utility Tiers
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-white/50 transition-transform duration-300 ${
                    tiersOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  tiersOpen ? "max-h-[800px] mt-3" : "max-h-0"
                }`}
              >
                <div className="space-y-2">
                  {nftTiers.map((tier, index) => (
                      <div
                        key={index}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5 gap-1 sm:gap-0"
                      >
                        <span className="font-medium text-white">
                          {tier.name}
                        </span>
                        <div className="flex items-center gap-3 sm:gap-4 text-sm">
                          <span className="text-cyan font-medium">
                            {tier.discount}
                          </span>
                          <span className="text-white/50">
                            {tier.window}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
                <p className="text-white/40 text-xs mt-3 text-center">
                  Discounts apply to Protection Activation Fees only. Rewind execution fees are risk-based and not discounted.
                </p>

                {/* Enterprise+ capabilities note */}
                <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-violet/[0.08] to-cyan/[0.05] border border-white/10">
                  <div className="flex items-start gap-3">
                    <Layers className="w-5 h-5 text-violet flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-sm font-medium mb-2">
                        Gatekeeper+ tiers unlock:
                      </p>
                      <ul className="space-y-1 mb-3">
                        <li className="flex items-center gap-2 text-white/50 text-xs">
                          <CheckCircle className="w-3 h-3 text-cyan" />
                          Batch execution
                        </li>
                        <li className="flex items-center gap-2 text-white/50 text-xs">
                          <CheckCircle className="w-3 h-3 text-cyan" />
                          Team-based flows
                        </li>
                      </ul>
                      <p className="text-white/30 text-[11px]">
                        Core transfer rules remain on-chain and deterministic.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
