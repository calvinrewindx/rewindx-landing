"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Shield, ShieldOff, Clock, Wallet, Users, Coins, AlertTriangle, ArrowRight, Percent, Mail } from "lucide-react";

const faqs = [
  {
    question: "Is Rewind X custodial?",
    answer:
      "No. Rewind X is non-custodial: funds are held by smart contracts under deterministic on-chain rules. No admin key can move or redirect user funds. During the active window, only the sender can execute a rewind. After expiry, the transfer moves to settlement and either the sender or recipient can complete it.",
    icon: Shield,
    color: "cyan",
  },
  {
    question: "Who can undo a transfer?",
    answer:
      "Only the sender who created the protected transfer can execute a rewind, and only while the rewind window is active. Receivers and third parties cannot rewind or cancel a transfer.",
    icon: Users,
    color: "violet",
  },
  {
    question: "What happens when the rewind window expires?",
    answer:
      "Windows are configurable from 3 minutes to 24 hours. Users select their preferred duration at transfer creation. After expiry, the transfer moves to settlement and either party can complete it. No rewinds are possible beyond the window.",
    icon: Clock,
    color: "cyan",
  },
  {
    question: "Does the recipient receive the full amount?",
    answer:
      "This depends on the fee mode you choose. Fee deducted: the protection fee is taken from the transfer amount, so the recipient receives less than you entered. Fee added on top: you pay the protection fee separately, so the recipient receives exactly what you entered. If a rewind is executed, the sender recovers the held amount minus the rewind execution fee. The exact amounts are shown before you confirm.",
    icon: Coins,
    color: "violet",
  },
  {
    question: "Why are protection fees higher than standard transfers?",
    answer:
      "Standard transfers settle immediately with no protection or recovery option. Protected transfers add a review window, deterministic rewind logic, and on-chain proof. Protection fees range from 1% to 3% depending on token category. The 1.5% rewind execution fee applies only when you actively execute a rewind. Token category depends on liquidity, oracle reliability, and operational risk. Use protected transfers when the cost of being wrong on a specific transaction would be higher than the protection fee.",
    icon: Percent,
    color: "cyan",
  },
  {
    question: "Do I need a special wallet?",
    answer:
      "No special wallet is required. Rewind X is designed to work with standard EVM-compatible wallets. Protected transfers use standard ERC-20 approvals and do not require allowlists or custom infrastructure.",
    icon: Wallet,
    color: "cyan",
  },
  {
    question: "What prevents abuse?",
    answer:
      "Rewind X uses bounded rewind windows, fixed execution rules, and protocol-level constraints (sender limits, cooldowns) instead of open-ended reversals. These protections restrict actions under specific conditions but do not give the protocol control over user funds. It is designed as preventive transaction safety, not unlimited rollback.",
    icon: AlertTriangle,
    color: "violet",
  },
  {
    question: "Which tokens are supported?",
    answer:
      "Rewind X currently supports 34 ERC-20 tokens on BNB Chain, including major stablecoins (USDT, USDC, DAI) and popular DeFi assets (WBNB, ETH, BTCB, and more). Native chain tokens (BNB) require the wrapped version (WBNB).",
    icon: Coins,
    color: "violet",
  },
  {
    question: "Is Rewind X insurance?",
    answer:
      "No. Rewind X is not insurance and does not guarantee fund recovery. It is a technical mechanism that provides a time-limited rewind window, enforced by smart contract logic. A rewind is only possible while the window is open and the transfer is still pending. Once a transfer is received, expires, or is otherwise finalized on-chain, no rewind is possible.",
    icon: ShieldOff,
    color: "cyan",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-[0.15]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan/5 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-violet/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan/70 text-[10px] uppercase tracking-[0.3em] font-mono mb-3">
            FAQ · {String(faqs.length).padStart(2, "0")} Questions
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Frequently Asked <span className="text-cyan">Questions</span>
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto">
            Everything you need to know about Rewind X
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const isCyan = faq.color === "cyan";
            const Icon = faq.icon;

            return (
              <div
                key={index}
                className={`relative rounded-2xl border bg-white/[0.02] backdrop-blur-sm overflow-hidden transition-all duration-300 ${
                  isOpen ? "lg:col-span-2" : ""
                } ${
                  isOpen
                    ? isCyan
                      ? "border-cyan/30 bg-cyan/[0.03] shadow-[0_0_30px_-10px_rgba(0,212,255,0.25)]"
                      : "border-violet/30 bg-violet/[0.03] shadow-[0_0_30px_-10px_rgba(139,92,246,0.25)]"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                {/* Accent line on left when open */}
                {isOpen && (
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-0.5 ${
                      isCyan ? "bg-cyan" : "bg-violet"
                    }`}
                  />
                )}

                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center gap-4 p-5 text-left group"
                >
                  {/* Q-Number */}
                  <span
                    className={`hidden sm:block flex-shrink-0 font-mono text-[11px] tracking-wider w-8 ${
                      isOpen
                        ? isCyan
                          ? "text-cyan/80"
                          : "text-violet/80"
                        : "text-white/30"
                    }`}
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? isCyan
                          ? "bg-gradient-to-br from-cyan/30 to-cyan/10 border border-cyan/40 shadow-[0_0_20px_-5px_rgba(0,212,255,0.5)]"
                          : "bg-gradient-to-br from-violet/30 to-violet/10 border border-violet/40 shadow-[0_0_20px_-5px_rgba(139,92,246,0.5)]"
                        : isCyan
                          ? "bg-cyan/[0.08] border border-cyan/20 group-hover:bg-cyan/[0.12]"
                          : "bg-violet/[0.08] border border-violet/20 group-hover:bg-violet/[0.12]"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isCyan ? "text-cyan" : "text-violet"}`} />
                  </div>

                  {/* Question */}
                  <div className="flex-1 min-w-0">
                    <span
                      className={`block pr-4 font-medium text-sm sm:text-base transition-colors ${
                        isOpen ? "text-white" : "text-white/85 group-hover:text-white"
                      }`}
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* Chevron */}
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? `rotate-180 ${isCyan ? "text-cyan" : "text-violet"}`
                        : "text-white/40 group-hover:text-white/60"
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 sm:pl-[4.75rem]">
                      <div
                        className={`h-px w-full mb-4 ${
                          isCyan
                            ? "bg-gradient-to-r from-cyan/30 via-cyan/10 to-transparent"
                            : "bg-gradient-to-r from-violet/30 via-violet/10 to-transparent"
                        }`}
                      />
                      <p className="text-white/65 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA — Inline, minimal */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm">
          <span className="text-white/40 inline-flex items-center gap-2">
            <HelpCircle className="w-4 h-4" />
            Still have questions?
          </span>
          <a
            href="/contact"
            className="group inline-flex items-center gap-1.5 text-cyan/80 hover:text-cyan transition-colors font-medium"
          >
            <Mail className="w-3.5 h-3.5" />
            Get in touch
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
