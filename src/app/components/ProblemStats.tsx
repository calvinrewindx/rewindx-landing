export default function ProblemStats() {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="max-w-3xl mx-auto px-6 space-y-16">

        {/* Symptom Block */}
        <div className="relative pl-6">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-red-500/40 via-red-500/20 to-transparent" />
          <p
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/90 mb-6 leading-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            When crypto transfers go wrong, they usually become final immediately.
          </p>
          <p className="text-white/50 text-base sm:text-lg font-mono">
            Wrong address. Phishing signature. Fat-finger amount.
          </p>
        </div>

        {/* Thesis Block */}
        <div className="relative pl-6">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/60 via-cyan/30 to-transparent" />
          <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-4">
            Blockchain finality is powerful.
          </p>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-6">
            But &ldquo;final the moment you click send&rdquo; is not the right default for every transaction.
          </p>
          <p
            className="text-xl sm:text-2xl font-semibold text-white leading-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Rewind X adds a <span className="text-cyan">short, sender-controlled rewind window</span> before finality takes hold.
          </p>
        </div>

      </div>
    </section>
  );
}
