"use client";

import { useEffect, useState, useRef } from "react";
import { RotateCcw } from "lucide-react";

export default function TransactionVisualizer() {
  const [phase, setPhase] = useState<"idle" | "forward" | "protected" | "rewind" | "complete">("idle");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const cycle = () => {
      setPhase("forward");
      setTimeout(() => setPhase("protected"), 1200);
      setTimeout(() => setPhase("rewind"), 2800);
      setTimeout(() => setPhase("complete"), 4200);
      setTimeout(() => setPhase("idle"), 5000);
    };

    setTimeout(cycle, 500);
    const interval = setInterval(cycle, 5500);
    return () => clearInterval(interval);
  }, [isVisible]);

  const getTokenPosition = () => {
    switch (phase) {
      case "idle": return "left-[8px]";
      case "forward": return "left-[calc(50%-12px)]";
      case "protected": return "left-[calc(50%-12px)]";
      case "rewind": return "left-[8px]";
      case "complete": return "left-[8px]";
      default: return "left-[8px]";
    }
  };

  const getTokenTransition = () => {
    if (phase === "forward") return "1200ms";
    if (phase === "rewind") return "1400ms";
    return "0ms";
  };

  return (
    <div ref={ref} className="w-full max-w-lg mx-auto py-6">
      {/* Main Track */}
      <div className="relative h-20 flex items-center">
        {/* Track Line */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 bg-white/10 rounded-full mx-8">
          {/* Glow Trail */}
          <div
            className={`absolute inset-y-0 left-0 rounded-full transition-all ease-out ${
              phase === "forward" ? "w-1/2 bg-gradient-to-r from-cyan/50 to-cyan" :
              phase === "protected" ? "w-1/2 bg-gradient-to-r from-cyan/30 to-violet" :
              phase === "rewind" ? "w-0 bg-cyan" :
              "w-0"
            }`}
            style={{ transitionDuration: phase === "forward" ? "1200ms" : phase === "rewind" ? "1400ms" : "300ms" }}
          />
        </div>

        {/* Sender Node */}
        <div className="relative z-10 flex flex-col items-center">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
            phase === "complete" || phase === "rewind"
              ? "bg-cyan/20 border-2 border-cyan shadow-lg shadow-cyan/30"
              : "bg-white/5 border border-white/20"
          }`}>
            <span className="text-2xl">💳</span>
          </div>
        </div>

        {/* Animated Token */}
        <div
          className={`absolute z-20 transition-all ease-in-out ${getTokenPosition()}`}
          style={{
            transitionDuration: getTokenTransition(),
            top: "calc(50% - 12px)"
          }}
        >
          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs transition-all duration-300 ${
            phase === "protected"
              ? "bg-violet shadow-lg shadow-violet/50 scale-110"
              : "bg-cyan shadow-lg shadow-cyan/50"
          }`}>
            <span>$</span>
          </div>
        </div>

        {/* Protected Shield (Center) */}
        <div className="flex-1 flex justify-center relative z-10">
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${
            phase === "protected"
              ? "bg-violet/20 border-2 border-violet shadow-lg shadow-violet/30 scale-110"
              : "bg-white/5 border border-white/10"
          }`}>
            {phase === "rewind" ? (
              <RotateCcw className="w-6 h-6 text-cyan animate-spin" style={{ animationDuration: "1s" }} />
            ) : (
              <span className="text-xl">🛡️</span>
            )}
          </div>
        </div>

        {/* Receiver Node */}
        <div className="relative z-10 flex flex-col items-center">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
            phase === "forward"
              ? "bg-white/5 border border-white/20"
              : "bg-white/[0.02] border border-white/10"
          }`}>
            <span className="text-2xl opacity-40">💳</span>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="flex justify-between px-2 mt-2">
        <span className="text-xs text-white/50 font-mono w-16 text-center">You</span>
        <span className="text-xs text-white/50 font-mono">24h Window</span>
        <span className="text-xs text-white/50 font-mono w-16 text-center">Recipient</span>
      </div>

      {/* Status Badge */}
      <div className="flex justify-center mt-6">
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          phase === "forward" ? "bg-cyan/10 text-cyan border border-cyan/30" :
          phase === "protected" ? "bg-violet/10 text-violet border border-violet/30" :
          phase === "rewind" ? "bg-cyan/10 text-cyan border border-cyan/30" :
          phase === "complete" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30" :
          "bg-white/5 text-white/50 border border-white/10"
        }`}>
          {phase === "idle" && "Ready to send"}
          {phase === "forward" && "→ Sending..."}
          {phase === "protected" && "🛡️ Protected (24h window active)"}
          {phase === "rewind" && "↺ Rewinding..."}
          {phase === "complete" && "✓ Funds returned to sender"}
        </div>
      </div>
    </div>
  );
}
