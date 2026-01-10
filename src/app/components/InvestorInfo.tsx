"use client";

import { ArrowRight } from "lucide-react";

export default function InvestorInfo() {
  return (
    <section className="section relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Glass Card Container */}
        <div className="relative group/card">
          {/* Glow effect - dual color */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan/30 via-violet/20 to-cyan/30 rounded-3xl blur-xl opacity-50 group-hover/card:opacity-80 transition-opacity duration-700" />

          {/* Card */}
          <div className="relative glass-card rounded-3xl border border-white/10 group-hover/card:border-cyan/30 transition-all duration-500 p-10 sm:p-14 lg:p-16 overflow-hidden">
            {/* Inner glow - dual color */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-cyan/15 to-violet/10 blur-[120px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Headline + CTA */}
              <div>
                <span
                  className="inline-block text-cyan text-lg sm:text-xl font-semibold mb-6 tracking-wide"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Early Supporters
                </span>
                <h2
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Building the
                  <br />
                  <span className="gradient-text">safety layer</span>
                  <br />
                  for crypto.
                </h2>
                <p className="text-white/50 text-lg mb-8 max-w-md leading-relaxed">
                  Exploring aligned early support and strategic partnerships.
                </p>

                <a
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-cyan/10 border border-cyan/30 hover:bg-cyan/20 hover:border-cyan/50 transition-all duration-300"
                >
                  <span
                    className="text-white font-semibold"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    Contact
                  </span>
                  <ArrowRight className="w-5 h-5 text-cyan group-hover:translate-x-1 transition-transform duration-300" />
                </a>

                {/* Self-Service Links */}
                <div className="mt-6 flex flex-wrap gap-4 text-sm">
                  <a href="/architecture" className="text-white/40 hover:text-cyan transition-colors">
                    Architecture →
                  </a>
                  <a href="/lightpaper" className="text-white/40 hover:text-cyan transition-colors">
                    Lightpaper →
                  </a>
                </div>
              </div>

              {/* Right: Statement */}
              <div className="lg:pl-8 flex items-center">
                <div className="relative group/statement">
                  {/* Prominent animated line - gradient */}
                  <div className="absolute -left-6 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-cyan via-violet to-violet/30 group-hover/statement:from-cyan group-hover/statement:via-violet group-hover/statement:to-violet/50 transition-all duration-500">
                    <div className="absolute top-0 left-0 w-full h-8 bg-cyan blur-md opacity-60 group-hover/statement:opacity-100 transition-opacity duration-500" />
                  </div>
                  <blockquote className="pl-10">
                    <p
                      className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      <span className="text-cyan">Non-custodial.</span>
                      <br />
                      <span className="text-violet/70">Deterministic.</span>
                      <br />
                      <span className="text-white">On-chain.</span>
                    </p>
                    <p className="text-white/50 text-base leading-relaxed max-w-md">
                      A reversibility primitive designed for ecosystem
                      integration and long-term infrastructure alignment.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
