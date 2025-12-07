"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Shield, Clock, Wallet, Lock, Users, Coins, CheckCircle, AlertTriangle, Zap, Ban, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "Is Rewind X custodial?",
    answer:
      "No. Rewind X never takes custody of user funds. During a protected transfer, assets remain under the sender's authority and can only move according to deterministic on-chain rules.",
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
    question: "What happens when the 24h / 48h window expires?",
    answer:
      "After the window expires, the transfer becomes final and behaves exactly like a normal ERC-20 transfer. No rewinds are possible beyond the window.",
    icon: Clock,
    color: "cyan",
  },
  {
    question: "Does Rewind X modify Ethereum or BNB Chain finality?",
    answer:
      "No. Rewind X operates entirely at the application layer. Chain finality is unchanged. The protocol simply adds a deterministic safety window before final settlement.",
    icon: Lock,
    color: "violet",
  },
  {
    question: "Do I need a special wallet or custom integration?",
    answer:
      "No. Any EVM-compatible wallet can interact with Rewind X. Protected transfers work using standard ERC-20 approvals and do not require allowlists or special infrastructure.",
    icon: Wallet,
    color: "cyan",
  },
  {
    question: "What prevents abuse or malicious reversals?",
    answer:
      "Rewind X includes multiple automated safeguards: daily sender limits, tier-based cooldowns, behavior analysis for fresh wallets, and circuit breakers for abnormal patterns. All protections are deterministic and non-custodial.",
    icon: AlertTriangle,
    color: "violet",
  },
  {
    question: "Can receivers skip the waiting period and claim instantly?",
    answer:
      "No. During the active rewind window, only the sender can act. The receiver cannot claim or finalize early. Once the window expires, the transfer either finalizes automatically or can be claimed where supported.",
    icon: CheckCircle,
    color: "cyan",
  },
  {
    question: "Which tokens are supported?",
    answer:
      "Rewind X supports all ERC-20 tokens. Native chain tokens (ETH, BNB, MATIC) require wrapped versions such as WETH or WBNB.",
    icon: Coins,
    color: "violet",
  },
  {
    question: "What is RWXT used for?",
    answer:
      "RWXT is used to acquire optional NFT utility tiers that unlock enhanced protocol parameters: fee discounts on protection activation, extended windows (up to 48h), higher daily limits, batch operations, and team wallet controls for enterprise users.",
    icon: Zap,
    color: "cyan",
  },
  {
    question: "Does RWXT give yield or profit?",
    answer:
      "No. RWXT provides software access and fee benefits only. It is not designed as an investment. There are no profit promises, yield mechanisms, or return expectations associated with holding RWXT.",
    icon: Ban,
    color: "violet",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-cyan text-sm font-medium mb-4 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20">
            <HelpCircle className="w-4 h-4" />
            Common Questions
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Everything you need to know about Rewind X
          </p>
        </div>

        {/* FAQ Grid - 2 columns on larger screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`glass-card overflow-hidden transition-all duration-300 hover:border-white/20 ${
                openIndex === index ? "lg:col-span-2" : ""
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-start gap-4 p-5 text-left"
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    faq.color === "cyan"
                      ? "bg-cyan/10 border border-cyan/30"
                      : "bg-violet/10 border border-violet/30"
                  }`}
                >
                  <faq.icon
                    className={`w-5 h-5 ${
                      faq.color === "cyan" ? "text-cyan" : "text-violet"
                    }`}
                  />
                </div>

                {/* Question */}
                <div className="flex-1 min-w-0">
                  <span
                    className="text-white font-medium text-base block pr-4"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {faq.question}
                  </span>
                </div>

                {/* Chevron */}
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-cyan" : "text-white/40"
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-48 pb-5" : "max-h-0"
                }`}
              >
                <p className="px-5 pl-[4.5rem] text-white/60 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16">
          <a
            href="/contact"
            className="group relative block max-w-2xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan/20 via-violet/20 to-cyan/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative glass-card p-8 border border-white/10 group-hover:border-cyan/30 transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan/20 to-violet/20 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <HelpCircle className="w-7 h-7 text-cyan" />
                </div>
                <div className="text-center sm:text-left">
                  <h3
                    className="text-xl font-semibold text-white mb-1"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    Still have questions?
                  </h3>
                  <p className="text-white/50 text-sm">
                    Get in touch
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-cyan/10 group-hover:border-cyan/30 transition-all duration-300">
                <span className="text-white font-medium">Contact</span>
                <ArrowRight className="w-5 h-5 text-cyan group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
