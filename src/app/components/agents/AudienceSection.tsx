"use client";

import { Bot, Wallet, TrendingUp, Shield, Clock, FileText, ArrowRight, ChevronRight } from "lucide-react";

const audiences = [
  {
    icon: Bot,
    title: "AI agent builders",
    subtitle: "experimenting with on-chain execution",
    description: "Teams building autonomous agents that move funds on-chain and need a safety boundary for irreversible transactions.",
    color: "violet",
  },
  {
    icon: Wallet,
    title: "Wallet & infrastructure teams",
    subtitle: "exploring safety layers",
    description: "Wallets and infra providers evaluating protected transfers as a native feature for agent and user transactions.",
    color: "cyan",
  },
  {
    icon: TrendingUp,
    title: "Investors",
    subtitle: "evaluating agent-native primitives",
    description: "Technical investors assessing new infrastructure primitives for autonomous, on-chain financial systems.",
    color: "violet",
  },
];

const gettingStarted = [
  { step: "1", text: "Explore the interactive demo", link: "/demo" },
  { step: "2", text: "Read the Lightpaper", link: "/lightpaper" },
  { step: "3", text: "SDK + MCP integration coming soon", link: null },
];

const securityPoints = [
  { icon: Shield, text: "Non-custodial: you control your keys" },
  { icon: Clock, text: "Window fixed at creation, enforced on-chain" },
  { icon: FileText, text: "Fragment NFT records every rewind" },
  { icon: Bot, text: "Autonomy is opt-in and policy-controlled" },
];

export default function AudienceSection() {
  return (
    <section className="section relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-violet/5 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Who Is This For */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Who Is This <span className="gradient-text">For?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audiences.map((item, index) => (
              <div
                key={item.title}
                className="glass-card glass-card-hover p-6 stagger-item"
                style={{ animationDelay: `${0.1 + index * 0.15}s` }}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    item.color === "cyan"
                      ? "bg-gradient-to-br from-cyan/20 to-cyan/5 border border-cyan/30"
                      : "bg-gradient-to-br from-violet/20 to-violet/5 border border-violet/30"
                  }`}
                >
                  <item.icon
                    className={`w-6 h-6 ${
                      item.color === "cyan" ? "text-cyan" : "text-violet"
                    }`}
                  />
                </div>
                <h3
                  className="text-lg font-semibold text-white mb-1"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {item.title}
                </h3>
                <p className={`text-sm mb-3 ${item.color === "cyan" ? "text-cyan/80" : "text-violet/80"}`}>
                  {item.subtitle}
                </p>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Optional bridge text */}
          <p className="text-center text-white/40 text-sm mt-8">
            The same protected transfer mechanism can also be used directly by individual users.
          </p>
        </div>

        {/* Getting Started */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Getting <span className="gradient-text">Started</span>
            </h2>
            <p className="text-white/50 text-sm">Preview</p>
          </div>

          <div className="max-w-lg mx-auto space-y-4">
            {gettingStarted.map((item) => (
              <div
                key={item.step}
                className="glass-card glass-card-hover p-5 flex items-center gap-4"
              >
                <span
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold bg-cyan/20 text-cyan border border-cyan/30"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {item.step}
                </span>
                {item.link ? (
                  <a
                    href={item.link}
                    className="flex items-center gap-2 text-white/80 hover:text-cyan transition-colors group"
                  >
                    {item.text}
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ) : (
                  <span className="text-white/40">{item.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Security at a Glance */}
        <div>
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Security at a <span className="gradient-text">Glance</span>
            </h2>
          </div>

          {/* Visual Flow */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            {["Permissions", "Policy Engine", "On-chain Enforcement"].map(
              (item, i) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="glass-card px-5 py-3 text-sm font-medium text-violet">
                    {item}
                  </span>
                  {i < 2 && (
                    <ArrowRight className="w-5 h-5 text-white/20" />
                  )}
                </div>
              )
            )}
          </div>

          {/* Security Points */}
          <div className="glass-card max-w-2xl mx-auto p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {securityPoints.map((point) => (
                <div key={point.text} className="flex items-start gap-3">
                  <point.icon className="w-4 h-4 text-cyan flex-shrink-0 mt-1" />
                  <span className="text-white/60 text-sm leading-relaxed">
                    {point.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Scope Note */}
          <p className="text-center text-white/50 text-xs mt-8 font-mono">
            Works with any standard <span className="text-cyan/70">ERC-20</span> token (stablecoins included). Native coins (ETH) not supported.
          </p>
        </div>
      </div>
    </section>
  );
}
