"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, RotateCw, Hash, Layers, TrendingUp, Clock, Crown } from "lucide-react";

const IPFS_BASE = "https://ipfs.io/ipfs/bafybeifjix6vdc3p7ztecontvzqg2u2q4og6uufiikepcfmnb4f2kcwdye";

const nftTiers = [
  {
    name: "Rewind Proof",
    discount: "0%",
    note: "Auto-mint after first valid rewind",
    color: "white",
  },
  {
    name: "Genesis",
    discount: "10%",
    note: "Auto-mint after 3 valid rewinds",
    color: "cyan",
  },
  {
    name: "Gatekeeper",
    discount: "20%",
    note: "Auto-mint after 10 valid rewinds",
    color: "violet",
  },
];

export default function NFTProof() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="section relative overflow-visible py-24 sm:py-32">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-violet/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-cyan text-sm font-medium mb-4 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20">
            <Award className="w-4 h-4" />
            Rewind Proof NFT
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            On-Chain <span className="text-cyan">Proof</span> of Successful Rewinds
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Flip Card */}
          <div className="flex justify-center lg:justify-start order-1">
            <div className="relative">
              {/* Animated Glow effect */}
              <div className="absolute -inset-12 bg-gradient-conic from-cyan/30 via-violet/20 to-cyan/30 blur-[120px] rounded-full pointer-events-none animate-[spin_20s_linear_infinite]" style={{ background: "conic-gradient(from 0deg, rgba(0,212,255,0.25), rgba(139,92,246,0.2), rgba(0,212,255,0.25))" }} />

              {/* Flip Card */}
              <div
                className="flip-card-container cursor-pointer relative z-10 select-none group"
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

                  {/* === FRONT SIDE — NFT Trading Card === */}
                  <div className="flip-card-front">
                    <div className="w-full h-full rounded-3xl relative overflow-hidden bg-gradient-to-br from-[#0a0e16] via-[#0a0a0a] to-[#0e0a16] border border-white/15 group-hover:border-cyan/30 transition-colors">
                      {/* Layered backdrop */}
                      <div className="absolute inset-0 bg-gradient-to-b from-cyan/[0.06] via-transparent to-violet/[0.08]" />
                      <div className="absolute inset-0 grid-bg opacity-[0.08]" />

                      {/* Holographic shimmer */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent rotate-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1500 pointer-events-none" />

                      {/* Corner brackets — sci-fi feel */}
                      <span className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-cyan/50 rounded-tl-md" />
                      <span className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-cyan/50 rounded-tr-md" />
                      <span className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-violet/50 rounded-bl-md" />
                      <span className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-violet/50 rounded-br-md" />

                      {/* Card Content */}
                      <div className="relative h-full px-6 py-7 flex flex-col items-center justify-between z-10">
                        {/* Header */}
                        <div className="w-full">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-cyan/80 text-[9px] uppercase tracking-[0.3em] font-mono">
                              ◆ Rewind Proof
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-white/40 text-[9px] font-mono tracking-wider">
                              ERC-721
                            </span>
                          </div>
                          <p className="text-white/30 text-[9px] font-mono tracking-wider">
                            #0000 · GENESIS EDITION
                          </p>
                        </div>

                        {/* NFT Image with frame */}
                        <div className="relative w-full max-w-[220px] aspect-square my-2">
                          {/* Inner frame ring */}
                          <div className="absolute inset-[-8px] rounded-2xl border border-white/10 bg-gradient-to-br from-cyan/[0.04] to-violet/[0.04]" />
                          <div className="relative w-full h-full">
                            <Image
                              src={`${IPFS_BASE}/0.png`}
                              alt="Rewind Proof NFT"
                              fill
                              className="object-contain drop-shadow-[0_0_40px_rgba(0,212,255,0.3)] group-hover:drop-shadow-[0_0_60px_rgba(0,212,255,0.45)] transition-all duration-500"
                              unoptimized
                            />
                          </div>
                        </div>

                        {/* Property bar */}
                        <div className="w-full">
                          {/* Network indicator */}
                          <div className="flex items-center justify-center gap-2 mb-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                            <span className="text-white/60 text-[10px] font-mono tracking-wider">BNB CHAIN</span>
                          </div>

                          {/* Property pills */}
                          <div className="flex flex-wrap items-center justify-center gap-1">
                            <span className="px-2 py-1 rounded-md text-[9px] font-mono bg-cyan/[0.08] border border-cyan/15 text-cyan/80 tracking-wider">
                              AUTO-MINT
                            </span>
                            <span className="px-2 py-1 rounded-md text-[9px] font-mono bg-white/[0.04] border border-white/10 text-white/50 tracking-wider">
                              TRANSFERABLE
                            </span>
                            <span className="px-2 py-1 rounded-md text-[9px] font-mono bg-violet/[0.08] border border-violet/15 text-violet/80 tracking-wider">
                              ON-CHAIN
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* === BACK SIDE — Dashboard Data === */}
                  <div className="flip-card-back">
                    <div className="w-full h-full rounded-3xl border border-white/15 bg-gradient-to-br from-[#0c0c0c] to-[#050505] relative overflow-hidden">
                      <div className="absolute inset-0 grid-bg opacity-[0.12]" />
                      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-cyan/[0.08] blur-[80px]" />

                      {/* Corner brackets */}
                      <span className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-violet/50 rounded-tl-md" />
                      <span className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-violet/50 rounded-tr-md" />
                      <span className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-cyan/50 rounded-bl-md" />
                      <span className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-cyan/50 rounded-br-md" />

                      <div className="relative h-full px-6 py-7 flex flex-col z-10">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-1">
                          <div>
                            <span className="text-violet/80 text-[9px] uppercase tracking-[0.3em] font-mono">
                              ◇ On-Chain Data
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/10">
                            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                            <span className="text-white/50 text-[9px] font-mono tracking-wider">PREVIEW</span>
                          </div>
                        </div>
                        <p className="text-white/30 text-[9px] font-mono tracking-wider mb-5">
                          PROOF INDEX · CUMULATIVE
                        </p>

                        {/* Data fields — Dashboard style */}
                        <div className="flex-1 space-y-2.5">
                          <DataRow icon={<Hash className="w-3 h-3" />} label="Rewind Count" value="—" accent="cyan" />
                          <DataRow icon={<Layers className="w-3 h-3" />} label="Tokens Used" value="—" accent="cyan" />
                          <DataRow icon={<TrendingUp className="w-3 h-3" />} label="Cumulative Volume" value="—" accent="cyan" />
                          <DataRow icon={<Clock className="w-3 h-3" />} label="Latest Rewind" value="—" accent="violet" />
                          <DataRow icon={<Crown className="w-3 h-3" />} label="Tier Status" value="Rewind Proof" accent="violet" highlight />
                        </div>

                        {/* Footer */}
                        <div className="mt-4 pt-3 border-t border-white/5">
                          <p className="text-white/40 text-[10px] leading-relaxed">
                            Index updates per rewind · Underlying records immutable on-chain
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Flip hint */}
              <div className="flex items-center justify-center gap-2 mt-5 text-white/40 text-xs">
                <RotateCw className="w-3 h-3" />
                <span className="sm:hidden">Tap to flip</span>
                <span className="hidden sm:inline">Hover or click to flip</span>
              </div>
            </div>
          </div>

          {/* Right: Tier Cards */}
          <div className="order-2">
            <h3
              className="text-2xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Loyalty Discounts via Rewind Proof
            </h3>

            {/* Minimum Threshold Callout */}
            <div className="rounded-xl border border-cyan/20 bg-cyan/[0.04] p-4 mb-6">
              <div className="flex items-baseline justify-between gap-3 mb-2">
                <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-mono">
                  Minimum
                </span>
                <span
                  className="text-cyan font-mono text-sm font-semibold"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  &gt; $10 USD
                </span>
              </div>
              <p className="text-white/55 text-xs leading-relaxed">
                Per rewind. Proof minted automatically after each valid rewind (above $10 USD). Appears in your wallet as an ERC-721 token. Volume and token data update on-chain.
              </p>
            </div>

            {/* Tier Cards — Text only */}
            <div className="space-y-3 mb-6">
              {nftTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`p-4 rounded-xl border transition-colors ${
                    tier.color === "cyan"
                      ? "border-cyan/20 bg-cyan/[0.03] hover:border-cyan/30"
                      : tier.color === "violet"
                        ? "border-violet/20 bg-violet/[0.03] hover:border-violet/30"
                        : "border-white/10 bg-white/[0.02] hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`font-bold text-base ${
                        tier.color === "cyan" ? "text-cyan" : tier.color === "violet" ? "text-violet" : "text-white/90"
                      }`}
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {tier.name}
                    </span>
                    <span
                      className={`font-mono font-semibold text-sm ${
                        tier.color === "cyan" ? "text-cyan" : tier.color === "violet" ? "text-violet" : "text-white/60"
                      }`}
                    >
                      {tier.discount} discount
                    </span>
                  </div>
                  <p className="text-white/50 text-xs">{tier.note}</p>
                </div>
              ))}
            </div>

            <p className="text-white/40 text-xs leading-relaxed mb-2">
              Each tier mints as a separate NFT — your wallet collects all earned tiers.
            </p>
            <p className="text-white/40 text-xs leading-relaxed">
              Discounts apply to the protected transfer fee only. The rewind execution fee (1.5%) is separate and not discounted. Tier thresholds use USD value at rewind time (Chainlink-priced).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DataRow({
  icon,
  label,
  value,
  accent,
  highlight,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  accent: "cyan" | "violet";
  highlight?: boolean;
}) {
  const accentColor = accent === "cyan" ? "text-cyan" : "text-violet";
  const accentBorder = accent === "cyan" ? "border-cyan/15" : "border-violet/15";
  const accentBg = accent === "cyan" ? "bg-cyan/[0.04]" : "bg-violet/[0.04]";

  return (
    <div
      className={`flex items-center justify-between rounded-lg px-2.5 py-2 border ${
        highlight ? `${accentBorder} ${accentBg}` : "border-white/5 bg-white/[0.02]"
      }`}
    >
      <div className="flex items-center gap-2">
        <span className={`${accentColor} opacity-70`}>{icon}</span>
        <span className="text-white/60 text-[10px] uppercase tracking-wider font-mono">{label}</span>
      </div>
      <span
        className={`text-[11px] font-mono ${
          highlight ? `${accentColor} font-semibold` : "text-white/40"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
