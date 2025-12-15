"use client";

import Image from "next/image";
import { Shield, Plus, Clock, Percent, TrendingUp, Layers, Vote } from "lucide-react";

const tokens = [
  {
    symbol: "USDC",
    logo: "/tokens/usdc.png",
  },
  {
    symbol: "USDT",
    logo: "/tokens/usdt.png",
  },
  {
    symbol: "DAI",
    logo: "/tokens/dai.png",
  },
  {
    symbol: "LINK",
    logo: "/tokens/link.png",
  },
];

export default function MultiTokenPreview() {
  return (
    <section className="section relative">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Multi-Token <span className="gradient-text">Support</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Works with any ERC-20 token. No integration required.
          </p>
        </div>

        {/* Token Icons Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8">
          {tokens.map((token, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg border-2 border-white/10 bg-white">
                <Image
                  src={token.logo}
                  alt={token.symbol}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <span className="text-white/60 text-sm font-medium">
                {token.symbol}
              </span>
            </div>
          ))}

          {/* Any ERC-20 */}
          <div className="flex flex-col items-center gap-3 group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 border-2 border-dashed border-cyan/50 bg-cyan/5">
              <Plus className="w-8 h-8 text-cyan" />
            </div>
            <span className="text-cyan text-sm font-medium">Any ERC-20</span>
          </div>
        </div>

        {/* Permissionless Message */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10">
            <Shield className="w-4 h-4 text-cyan" />
            <span className="text-white/70 text-sm">
              Fully permissionless · No allowlist · No integration required
            </span>
          </div>
        </div>

        {/* RWXT Utility Section */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan/10 via-violet/10 to-cyan/10 blur-[60px] rounded-3xl" />

          <div className="relative glass-card p-8 sm:p-10">
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
              {/* RWXT Token */}
              <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                <div className="w-24 h-24 sm:w-32 sm:h-32 aspect-square rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/tokenlogo.png"
                    alt="RWXT"
                    width={128}
                    height={128}
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                </div>
                <div>
                  <h3
                    className="text-lg sm:text-xl font-bold text-white"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    RWXT Optional Utility
                  </h3>
                  <p className="text-white/50 text-xs sm:text-sm mb-2">Enhances usage. Not required for basic transfers.</p>
                  <ul className="space-y-1">
                    <li className="text-white/40 text-[10px] sm:text-xs flex items-start gap-2">
                      <span className="text-cyan mt-0.5">•</span>
                      <span className="hidden sm:inline">Basic protected transfers are paid in the token you are sending (e.g. USDC, USDT).</span>
                      <span className="sm:hidden">Fees paid in token you send (USDC, USDT, etc.)</span>
                    </li>
                    <li className="text-white/40 text-[10px] sm:text-xs flex items-start gap-2">
                      <span className="text-cyan mt-0.5">•</span>
                      <span className="hidden sm:inline">RWXT is only required if you want to acquire NFT utility tiers (Genesis → Nexus).</span>
                      <span className="sm:hidden">RWXT only for NFT tiers (Genesis → Nexus)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden lg:block w-px h-16 bg-white/10" />
              <div className="lg:hidden w-full h-px bg-white/10" />

              {/* Benefits */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
                <div className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl bg-white/5 border border-yellow-500/20 hover:border-yellow-500/40 transition-all group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border border-yellow-500/30 flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                  </div>
                  <p className="text-white text-xs sm:text-sm font-medium">Utility NFTs</p>
                  <p className="text-white/40 text-[10px] sm:text-xs mt-1">Genesis → Nexus</p>
                </div>

                <div className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl bg-white/5 border border-yellow-500/20 hover:border-yellow-500/40 transition-all group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border border-yellow-500/30 flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                    <Percent className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                  </div>
                  <p className="text-white text-xs sm:text-sm font-medium">Fee Discounts</p>
                  <p className="text-white/40 text-[10px] sm:text-xs mt-1">On activation fees</p>
                </div>

                <div className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl bg-white/5 border border-yellow-500/20 hover:border-yellow-500/40 transition-all group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border border-yellow-500/30 flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                  </div>
                  <p className="text-white text-xs sm:text-sm font-medium">Extended Windows</p>
                  <p className="text-white/40 text-[10px] sm:text-xs mt-1">Up to 48h</p>
                </div>

                <div className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl bg-white/5 border border-yellow-500/20 hover:border-yellow-500/40 transition-all group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border border-yellow-500/30 flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                  </div>
                  <p className="text-white text-xs sm:text-sm font-medium">Higher Limits</p>
                  <p className="text-white/40 text-[10px] sm:text-xs mt-1">Daily capacity</p>
                </div>

                <div className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl bg-white/5 border border-yellow-500/20 hover:border-yellow-500/40 transition-all group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border border-yellow-500/30 flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                    <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                  </div>
                  <p className="text-white text-xs sm:text-sm font-medium">Batch Ops</p>
                  <p className="text-white/40 text-[10px] sm:text-xs mt-1">Higher tiers</p>
                </div>

                <div className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl bg-white/5 border border-yellow-500/20 hover:border-yellow-500/40 transition-all group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border border-yellow-500/30 flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                    <Vote className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                  </div>
                  <p className="text-white text-xs sm:text-sm font-medium">Governance</p>
                  <p className="text-white/40 text-[10px] sm:text-xs mt-1">Off-chain</p>
                </div>
              </div>
            </div>

            {/* Legal Note */}
            <p className="text-center text-white/30 text-xs mt-6 pt-4 border-t border-white/5">
              RWXT is not required to use the core protocol. It is a software utility token for enhanced access features. It does not represent investment, yield, or financial return.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
