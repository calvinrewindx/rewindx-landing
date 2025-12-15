"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-8 px-6 overflow-hidden bg-[#0a0a0f]">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #00d4ff 1px, transparent 1px),
              linear-gradient(to bottom, #00d4ff 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Corner Coordinates */}
      <div className="absolute top-4 left-4 font-mono text-[10px] text-cyan/30 tracking-wider">
        [0,0]
      </div>
      <div className="absolute top-4 right-4 font-mono text-[10px] text-cyan/30 tracking-wider">
        [∞,0]
      </div>
      <div className="absolute bottom-4 left-4 font-mono text-[10px] text-cyan/30 tracking-wider">
        [0,∞]
      </div>
      <div className="absolute bottom-4 right-4 font-mono text-[10px] text-cyan/30 tracking-wider">
        [{new Date().getFullYear()}]
      </div>

      {/* Horizontal Blueprint Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />
      <div className="absolute top-8 left-[10%] right-[10%] h-px bg-cyan/5" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Main Blueprint Container */}
        <div className="relative border border-cyan/10 rounded-sm p-8 sm:p-12">
          {/* Corner Markers */}
          <div className="absolute -top-1 -left-1 w-3 h-3 border-l border-t border-cyan/40" />
          <div className="absolute -top-1 -right-1 w-3 h-3 border-r border-t border-cyan/40" />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l border-b border-cyan/40" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r border-b border-cyan/40" />

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
            {/* Left: Technical Spec */}
            <div className="text-center md:text-left">
              <div className="font-mono text-[10px] text-cyan/40 mb-2 tracking-[0.2em]">
                PROTOCOL.SPEC
              </div>
              <div className="space-y-1">
                <div className="font-mono text-xs text-white/30">
                  <span className="text-cyan/50">type:</span> reversibility_layer
                </div>
                <div className="font-mono text-xs text-white/30">
                  <span className="text-cyan/50">custody:</span> non_custodial
                </div>
                <div className="font-mono text-xs text-white/30">
                  <span className="text-cyan/50">execution:</span> deterministic
                </div>
              </div>
            </div>

            {/* Center: Logo & Brand */}
            <div className="flex flex-col items-center">
              {/* Logo with Glow + Pulsing Brackets */}
              <div className="relative mb-3">
                {/* Pulsing glow behind logo */}
                <div className="absolute -inset-4 bg-cyan/10 blur-xl rounded-full animate-pulse" />
                {/* Pulsing corner brackets */}
                <div className="absolute -left-1.5 -top-1.5 w-3 h-3 border-l-2 border-t-2 border-cyan/50 animate-pulse" />
                <div className="absolute -left-1.5 -bottom-1.5 w-3 h-3 border-l-2 border-b-2 border-cyan/50 animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute -right-1.5 -top-1.5 w-3 h-3 border-r-2 border-t-2 border-cyan/50 animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute -right-1.5 -bottom-1.5 w-3 h-3 border-r-2 border-b-2 border-cyan/50 animate-pulse" style={{ animationDelay: '1.5s' }} />
                {/* Logo */}
                <Image
                  src="/logov2.png"
                  alt="Rewind X"
                  width={240}
                  height={120}
                  className="h-20 w-auto relative z-10"
                  unoptimized
                />
              </div>

              <h3
                className="font-mono text-lg text-white/80 tracking-[0.3em] mb-1"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                REWIND X
              </h3>
              <p className="font-mono text-[10px] text-cyan/50 tracking-[0.15em]">
                MAKING FINALITY SAFER
              </p>
            </div>

            {/* Right: Links */}
            <div className="text-center md:text-right">
              <div className="font-mono text-[10px] text-cyan/40 mb-2 tracking-[0.2em]">
                ENDPOINTS
              </div>
              <div className="space-y-2">
                <a
                  href="https://x.com/calvinrewindx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block font-mono text-xs text-white/30 hover:text-cyan/70 transition-colors"
                >
                  <span className="text-cyan/30 group-hover:text-cyan/50">→</span> x.com/calvinrewindx
                </a>
                <a
                  href="/contact"
                  className="group block font-mono text-xs text-white/30 hover:text-cyan/70 transition-colors"
                >
                  <span className="text-cyan/30 group-hover:text-cyan/50">→</span> /contact
                </a>
                <a
                  href="/lightpaper"
                  className="group block font-mono text-xs text-white/30 hover:text-cyan/70 transition-colors"
                >
                  <span className="text-cyan/30 group-hover:text-cyan/50">→</span> /lightpaper
                </a>
                <a
                  href="/architecture"
                  className="group block font-mono text-xs text-white/30 hover:text-cyan/70 transition-colors"
                >
                  <span className="text-cyan/30 group-hover:text-cyan/50">→</span> /architecture
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Dimension Line */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-cyan/20" />
            <div className="font-mono text-[9px] text-cyan/30 tracking-[0.2em] px-4 border-l border-r border-cyan/20">
              NON-CUSTODIAL · DETERMINISTIC · ON-CHAIN
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-cyan/20" />
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="mt-6 text-center space-y-1">
          <p className="font-mono text-[9px] text-white/30 tracking-wider">
            © 2025 Rewind X Protocol
          </p>
          <p className="font-mono text-[9px] text-white/30 tracking-wider">
            An independent software project · Not affiliated with similarly named entities
          </p>
          <p className="font-mono text-[9px] text-white/30 tracking-wider">
            Informational only · No financial services or token offerings
          </p>
        </div>
      </div>
    </footer>
  );
}
