"use client";

import { useState, useEffect } from "react";
import { Send, Shield, RotateCcw, ArrowRight } from "lucide-react";

type FlowStep = 0 | 1 | 2 | 3;

export default function HeroFlow({ phase }: { phase: "typing" | "cursor" | "done" }) {
  const [step, setStep] = useState<FlowStep>(0);
  const [countdown, setCountdown] = useState(24);

  // Start flow animation after typing is done
  useEffect(() => {
    if (phase !== "done") return;

    const timer = setTimeout(() => {
      setStep(1);
      setTimeout(() => setStep(2), 1200);
      setTimeout(() => setStep(3), 3200);
      setTimeout(() => {
        // Reset and loop
        setStep(0);
        setCountdown(24);
        setTimeout(() => {
          setStep(1);
          setTimeout(() => setStep(2), 1200);
          setTimeout(() => setStep(3), 3200);
        }, 800);
      }, 5500);
    }, 600);

    return () => clearTimeout(timer);
  }, [phase]);

  // Countdown timer when in protected state
  useEffect(() => {
    if (step !== 2) return;
    setCountdown(24);
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [step]);

  return (
    <div className={`max-w-2xl mx-auto mb-10 transition-all duration-700 ${phase === "done" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
      <div className="flex items-center justify-center gap-0">

        {/* Step 1: Send */}
        <div className={`transition-all duration-500 ${step >= 1 ? "opacity-100 scale-100" : "opacity-30 scale-95"}`}>
          <div className={`glass-card w-28 sm:w-40 py-3 px-2 text-center transition-all duration-300 ${step === 1 ? "border-white/30" : "border-white/10"}`}>
            <Send className={`w-4 h-4 mx-auto mb-1.5 transition-colors duration-300 ${step === 1 ? "text-white" : "text-white/40"}`} />
            <p className="text-white/80 text-xs sm:text-sm font-medium font-mono">$500 USDC</p>
            <p className="text-white/30 text-[10px] font-mono mt-0.5">0x7a3...f2e1</p>
          </div>
        </div>

        {/* Arrow 1 */}
        <div className={`transition-all duration-500 ${step >= 1 ? "opacity-100 w-6 sm:w-10" : "opacity-0 w-0"}`}>
          <ArrowRight className="w-4 h-4 text-white/20 mx-auto" />
        </div>

        {/* Step 2: Protected Hold */}
        <div className={`transition-all duration-500 ${step >= 2 ? "opacity-100 scale-100" : "opacity-30 scale-95"}`}>
          <div className={`w-28 sm:w-40 py-3 px-2 text-center rounded-xl border transition-all duration-300 ${
            step === 2
              ? "border-cyan/40 bg-cyan/[0.08] shadow-[0_0_20px_rgba(0,212,255,0.1)]"
              : step >= 3
                ? "border-cyan/20 bg-cyan/[0.03]"
                : "glass-card border-white/10"
          }`}>
            <Shield className={`w-4 h-4 mx-auto mb-1.5 transition-colors duration-300 ${step >= 2 ? "text-cyan" : "text-white/40"}`} />
            <p className={`text-xs sm:text-sm font-medium font-mono transition-colors duration-300 ${step >= 2 ? "text-cyan" : "text-white/40"}`}>
              Protected
            </p>
            <div className="mt-1">
              {step === 2 ? (
                <p className="text-cyan/70 text-[10px] font-mono tabular-nums animate-pulse">
                  {countdown}h remaining
                </p>
              ) : (
                <p className="text-white/30 text-[10px] font-mono">3 min – 24h</p>
              )}
            </div>
          </div>
        </div>

        {/* Arrow 2 */}
        <div className={`transition-all duration-500 ${step >= 2 ? "opacity-100 w-6 sm:w-10" : "opacity-0 w-0"}`}>
          <ArrowRight className="w-4 h-4 text-white/20 mx-auto" />
        </div>

        {/* Step 3: Rewind */}
        <div className={`transition-all duration-500 ${step >= 3 ? "opacity-100 scale-100" : "opacity-30 scale-95"}`}>
          <div className={`w-28 sm:w-40 py-3 px-2 text-center rounded-xl border transition-all duration-500 ${
            step === 3
              ? "border-emerald-500/40 bg-emerald-500/[0.08]"
              : "glass-card border-white/10"
          }`}>
            <RotateCcw className={`w-4 h-4 mx-auto mb-1.5 transition-colors duration-300 ${step === 3 ? "text-emerald-400" : "text-white/40"}`} />
            <p className={`text-xs sm:text-sm font-medium font-mono transition-colors duration-300 ${step === 3 ? "text-emerald-400" : "text-white/40"}`}>
              {step === 3 ? "Rewound" : "Rewind"}
            </p>
            {step === 3 && (
              <p className="text-emerald-400/70 text-[10px] font-mono mt-0.5 animate-fadeIn">
                ↩ $487.50 back
              </p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
