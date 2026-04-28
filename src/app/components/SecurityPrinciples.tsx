import { Cpu, KeyRound, Wallet, Shield, ArrowRight } from "lucide-react";

const principles = [
  {
    icon: Wallet,
    title: "Non-Custodial",
    description: "Funds are governed by smart contract rules.",
  },
  {
    icon: Cpu,
    title: "Deterministic",
    description: "Execution follows fixed on-chain conditions.",
  },
  {
    icon: KeyRound,
    title: "Bounded Admin",
    description: "Emergency controls cannot access user funds.",
  },
];

export default function SecurityPrinciples() {
  return (
    <section className="section relative">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cyan/5 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Security <span className="text-cyan">Principles</span>
          </h2>
        </div>

        {/* Trust Signals — 3 Compact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="group glass-card glass-card-hover p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan/[0.08] border border-cyan/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan/[0.15] group-hover:border-cyan/40 transition-all duration-300">
                <principle.icon className="w-6 h-6 text-cyan/70 group-hover:text-cyan transition-colors duration-300" />
              </div>
              <h3
                className="text-base font-semibold text-white mb-2 group-hover:text-cyan transition-colors duration-300"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {principle.title}
              </h3>
              <p className="text-white/50 leading-relaxed text-sm">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* Links to Details */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-16">
          <a
            href="/security"
            className="inline-flex items-center gap-2 text-cyan hover:text-cyan/80 transition-colors text-sm font-medium"
          >
            Security details
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <span className="hidden sm:inline text-white/20">·</span>
          <a
            href="/lightpaper"
            className="inline-flex items-center gap-2 text-white/60 hover:text-cyan transition-colors text-sm font-medium"
          >
            Technical paper
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* USP Block — Preventive Safety */}
        <div className="max-w-2xl mx-auto">
          <div className="p-8 rounded-2xl border border-cyan/20 bg-cyan/[0.03]">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="w-5 h-5 text-cyan" />
              <h3
                className="text-xl sm:text-2xl font-bold text-white"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Preventive Safety — <span className="text-cyan">Not Recovery</span>
              </h3>
            </div>

            <p className="text-white/60 text-center mb-6">
              Rewind X offers a time-bounded window to reverse mistakes before final settlement. It is not insurance, and it does not recover lost funds.
            </p>

            <div className="space-y-3">
              {[
                "Mitigates sender-side errors within a defined time window",
                "Assumes normal wallet security practices",
                "After the window ends, finality is absolute",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan/60 flex-shrink-0" />
                  <span className="text-white/50 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-white/30 text-xs text-center mt-6 pt-4 border-t border-white/5">
              Rewind X adds a rewind window without changing the core guarantees of blockchain finality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
