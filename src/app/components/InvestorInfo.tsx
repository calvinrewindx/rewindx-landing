import { ArrowRight } from "lucide-react";

export default function InvestorInfo() {
  return (
    <section className="py-16 sm:py-20 relative">
      <div className="max-w-3xl mx-auto px-6">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] hover:border-cyan/20 transition-colors duration-300 p-8 sm:p-10">
          {/* Eyebrow */}
          <p className="text-cyan/70 text-xs uppercase tracking-[0.2em] font-mono mb-5">
            Early Supporters
          </p>

          {/* Statement */}
          <p
            className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            <span className="text-cyan">Non-custodial.</span>{" "}
            <span className="text-violet/80">Rule-based.</span>{" "}
            <span className="text-white">On-chain.</span>
          </p>

          {/* Description */}
          <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-6">
            A protocol layer for protected ERC-20 transfers, designed for ecosystem integration.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan/10 border border-cyan/30 hover:bg-cyan/20 hover:border-cyan/50 transition-colors text-cyan text-sm font-medium"
            >
              Contact
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="/lightpaper" className="text-white/40 hover:text-cyan transition-colors text-sm">
              Lightpaper →
            </a>
            <a href="/security" className="text-white/40 hover:text-cyan transition-colors text-sm">
              Security →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
