"use client";

import { useState } from "react";
import Image from "next/image";
import { Shield, ChevronDown } from "lucide-react";

const TW = "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets";

const allTokens = [
  // Stablecoins — sorted by importance
  { symbol: "USDT", logo: `${TW}/0x55d398326f99059fF775485246999027B3197955/logo.png`, category: "Stablecoins" },
  { symbol: "USDC", logo: "/tokens/usdc.png", category: "Stablecoins" },
  { symbol: "DAI", logo: "/tokens/dai.png", category: "Stablecoins" },
  { symbol: "TUSD", logo: `${TW}/0x40af3827F39D0EAcBF4A168f8D4ee67c121D11c9/logo.png`, category: "Stablecoins" },
  // Major
  { symbol: "WBNB", logo: `${TW}/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png`, category: "Major" },
  { symbol: "BTCB", logo: `${TW}/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c/logo.png`, category: "Major" },
  { symbol: "ETH", logo: `${TW}/0x2170Ed0880ac9A755fd29B2688956BD959F933F8/logo.png`, category: "Major" },
  { symbol: "SOL", logo: `${TW}/0x570A5D26f7765Ecb712C0924E4De545B89fD43dF/logo.png`, category: "Major" },
  { symbol: "XRP", logo: `${TW}/0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE/logo.png`, category: "Major" },
  { symbol: "ADA", logo: `${TW}/0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47/logo.png`, category: "Major" },
  { symbol: "DOT", logo: `${TW}/0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402/logo.png`, category: "Major" },
  { symbol: "DOGE", logo: `${TW}/0xbA2aE424d960c26247Dd6c32edC70B295c744C43/logo.png`, category: "Major" },
  { symbol: "LTC", logo: `${TW}/0x4338665CBB7B2485A8855A139b75D5e34AB0DB94/logo.png`, category: "Major" },
  { symbol: "BCH", logo: `${TW}/0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf/logo.png`, category: "Major" },
  { symbol: "AVAX", logo: `${TW}/0x1CE0c2827e2eF14D5C4f29a091d735A204794041/logo.png`, category: "Major" },
  { symbol: "ATOM", logo: `${TW}/0x0Eb3a705fc54725037CC9e008bDede697f62F335/logo.png`, category: "Major" },
  { symbol: "TRX", logo: `${TW}/0xCE7de646e7208a4Ef112cb6ed5038FA6cC6b12e3/logo.png`, category: "Major" },
  { symbol: "XTZ", logo: `${TW}/0x16939ef78684453bfDFb47825F8a5F714f12623a/logo.png`, category: "Major" },
  { symbol: "ONT", logo: `${TW}/0xFd7B3A77848f1C2D67E05E54d78d174a0C850335/logo.png`, category: "Major" },
  // DeFi
  { symbol: "LINK", logo: "/tokens/link.png", category: "DeFi" },
  { symbol: "UNI", logo: `${TW}/0xBf5140A22578168FD562DCcF235E5D43A02ce9B1/logo.png`, category: "DeFi" },
  { symbol: "AAVE", logo: `${TW}/0xfb6115445Bff7b52FeB98650C87f44907E58f802/logo.png`, category: "DeFi" },
  { symbol: "CAKE", logo: `${TW}/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png`, category: "DeFi" },
  { symbol: "SUSHI", logo: `${TW}/0x947950BcC74888a40Ffa2593C5798F11Fc9124C4/logo.png`, category: "DeFi" },
  { symbol: "COMP", logo: `${TW}/0x52CE071Bd9b1C4B00A0b92D298c512478CaD67e8/logo.png`, category: "DeFi" },
  { symbol: "YFI", logo: `${TW}/0x88f1A5ae2A3BF98AEAF342D26B30a79438c9142e/logo.png`, category: "DeFi" },
  { symbol: "1INCH", logo: `${TW}/0x111111111117dC0aa78b770fA6A738034120C302/logo.png`, category: "DeFi" },
  { symbol: "XVS", logo: `${TW}/0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63/logo.png`, category: "DeFi" },
  { symbol: "INJ", logo: `${TW}/0xa2B726B1145A4773F68593CF171187d8EBe4d495/logo.png`, category: "DeFi" },
  { symbol: "WOO", logo: `${TW}/0x4691937a7508860F876c9c0a2a617E7d9E945D4B/logo.png`, category: "DeFi" },
  { symbol: "SXP", logo: `${TW}/0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A/logo.png`, category: "DeFi" },
  { symbol: "C98", logo: `${TW}/0xaEC945e04baF28b135Fa7c640f624f8D90F1C3a6/logo.png`, category: "DeFi" },
  { symbol: "CFX", logo: "https://assets.coingecko.com/coins/images/13079/small/3vuYMbjN.png", category: "DeFi" },
  // Other
  { symbol: "AXS", logo: `${TW}/0x715D400F88C167884bbCc41C5FeA407ed4D2f8A0/logo.png`, category: "Other" },
];

const categories = ["Stablecoins", "Major", "DeFi", "Other"];

// Featured: USDT, USDC, DAI, WBNB, BTCB, ETH
const featuredTokens = [
  allTokens[0], // USDT
  allTokens[1], // USDC
  allTokens[2], // DAI
  allTokens[6], // WBNB
  allTokens[7], // BTCB
  allTokens[8], // ETH
];

export default function MultiTokenPreview() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="section relative">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Multi-Token <span className="text-cyan">Support</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
            Supported across major ERC-20 assets on BNB Chain.
          </p>
          <p className="text-white/40 text-xs sm:text-sm mt-2">
            USDT, USDC, DAI, WBNB and more · <span className="text-cyan font-medium">34 supported tokens</span>
          </p>
        </div>

        {/* Featured Tokens */}
        <div className="flex items-center justify-center gap-3 sm:gap-5 mb-6">
          {featuredTokens.map((token, index) => (
            <div key={index} className="flex flex-col items-center gap-1.5 sm:gap-2 group">
              <div className="w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden transition-all duration-300 group-hover:scale-110 border border-white/10 sm:border-2 bg-white">
                <Image
                  src={token.logo}
                  alt={token.symbol}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain p-0.5 sm:p-1"
                  unoptimized
                />
              </div>
              <span className="text-white/50 text-[9px] sm:text-[11px] font-mono">{token.symbol}</span>
            </div>
          ))}
          {/* +28 more tokens */}
          <div
            className="flex flex-col items-center gap-1.5 sm:gap-2 cursor-pointer group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center border border-dashed border-white/20 sm:border-2 bg-white/[0.02] group-hover:border-cyan/40 transition-all duration-300">
              <span className="text-white/40 text-[10px] sm:text-sm font-mono group-hover:text-cyan/60 transition-colors">+28</span>
            </div>
            <span className="text-white/30 text-[9px] sm:text-[11px] font-mono group-hover:text-white/50 transition-colors">more tokens</span>
          </div>
        </div>

        {/* Info line — mobile friendly */}
        <div className="text-center mb-6">
          <p className="text-white/30 text-[10px] sm:text-xs font-mono">
            Includes major stablecoins, BTC, ETH, BNB, and popular DeFi assets
          </p>
        </div>

        {/* Expand Button */}
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors text-xs sm:text-sm"
          >
            <span>{isOpen ? "Hide tokens" : "View all supported tokens"}</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
          </button>
        </div>

        {/* Expandable Full Token Grid */}
        <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[1200px]" : "max-h-0"}`}>
          <div className="max-w-4xl mx-auto">
            {categories.map((category) => {
              const tokens = allTokens.filter((t) => t.category === category);
              return (
                <div key={category} className="mb-5 last:mb-0">
                  <p className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-mono mb-2 ml-1">
                    {category}
                  </p>
                  <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8 gap-2 sm:gap-3">
                    {tokens.map((token) => (
                      <div
                        key={token.symbol}
                        className="flex flex-col items-center gap-1 p-2 sm:p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04] transition-all duration-200 group"
                      >
                        <div className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full overflow-hidden bg-white border border-white/10 group-hover:scale-110 transition-transform duration-200">
                          <Image
                            src={token.logo}
                            alt={token.symbol}
                            width={40}
                            height={40}
                            className="w-full h-full object-contain p-0.5"
                            unoptimized
                          />
                        </div>
                        <span className="text-white/50 text-[9px] sm:text-[10px] font-mono group-hover:text-white/70 transition-colors">
                          {token.symbol}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            <p className="text-white/20 text-[10px] font-mono mt-5 text-center">
              All prices via Chainlink oracle feeds · BNB Chain (BSC)
            </p>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-8 sm:mt-10">
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-white/[0.03] border border-white/10">
            <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan/70" />
            <span className="text-white/50 text-xs sm:text-sm font-mono">
              Non-custodial · Fully on-chain
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
