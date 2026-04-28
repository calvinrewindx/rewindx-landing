import { FileText, Sparkles, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan/10 to-violet/10 blur-[150px]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 mb-8">
          <Sparkles className="w-4 h-4 text-cyan" />
          <span className="text-cyan text-sm font-medium">Launching Soon</span>
        </div>

        {/* Headline */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Ready to protect your{" "}
          <span className="gradient-text">transfers</span>?
        </h2>

        {/* Subtext */}
        <p className="text-white/60 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          Rewind X is preparing for mainnet launch on BNB Chain.
        </p>

        {/* Single Primary CTA */}
        <div className="flex justify-center mb-12">
          <a
            href="/lightpaper"
            className="btn-primary inline-flex items-center gap-2 text-base py-4 px-8"
          >
            <FileText className="w-4 h-4" />
            Read Lightpaper
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Trust Line */}
        <p
          className="text-white/40 text-sm font-mono"
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        >
          Non-custodial · 34 tokens · 3 min – 24h windows
        </p>
      </div>
    </section>
  );
}
