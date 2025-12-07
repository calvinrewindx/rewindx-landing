"use client";

import { useEffect, useState, useRef } from "react";
import { RotateCcw, Shield, Check } from "lucide-react";

export default function CircularRewindAnimation() {
  const [phase, setPhase] = useState<"idle" | "filling" | "protected" | "rewind" | "complete">("idle");
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [size, setSize] = useState(280);
  const ref = useRef<HTMLDivElement>(null);

  // Responsive size based on screen width
  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 380) {
        setSize(220);
      } else if (width < 640) {
        setSize(250);
      } else {
        setSize(280);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Circle parameters
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

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

    // If user prefers reduced motion, show static state
    if (prefersReducedMotion) {
      setPhase("protected");
      setProgress(50);
      return;
    }

    const runCycle = () => {
      setPhase("idle");
      setProgress(0);

      setTimeout(() => {
        setPhase("filling");

        let currentProgress = 0;
        const fillInterval = setInterval(() => {
          currentProgress += 3; // Faster increment for better performance
          setProgress(currentProgress);
          if (currentProgress >= 75) {
            clearInterval(fillInterval);
            setPhase("protected");
          }
        }, 50); // 50ms instead of 40ms
      }, 500);

      setTimeout(() => {
        setPhase("rewind");

        let currentProgress = 75;
        const rewindInterval = setInterval(() => {
          currentProgress -= 5; // Faster decrement
          setProgress(Math.max(0, currentProgress));
          if (currentProgress <= 0) {
            clearInterval(rewindInterval);
            setPhase("complete");
          }
        }, 40); // 40ms instead of 30ms
      }, 3500);

      setTimeout(() => {
        setPhase("idle");
        setProgress(0);
      }, 5500);
    };

    runCycle();
    const interval = setInterval(runCycle, 6500);
    return () => clearInterval(interval);
  }, [isVisible, prefersReducedMotion]);

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  // Token position on circle
  const tokenAngle = (progress / 100) * 270 - 135;
  const tokenX = size / 2 + radius * 0.85 * Math.cos((tokenAngle * Math.PI) / 180);
  const tokenY = size / 2 + radius * 0.85 * Math.sin((tokenAngle * Math.PI) / 180);

  // Center content size scales with main size
  const centerSize = Math.round(size * 0.45);

  return (
    <div ref={ref} className="w-full flex flex-col items-center py-6 sm:py-8">
      {/* Main Animation Container */}
      <div
        className="relative will-change-transform"
        style={{ width: size, height: size }}
      >
        {/* Outer Glow Ring - using box-shadow instead of filter for performance */}
        <div
          className={`absolute inset-0 rounded-full transition-shadow duration-700 will-change-[box-shadow] ${
            phase === "protected" ? "shadow-[0_0_40px_rgba(139,92,246,0.3)]" :
            phase === "rewind" ? "shadow-[0_0_50px_rgba(0,212,255,0.4)]" :
            phase === "complete" ? "shadow-[0_0_40px_rgba(16,185,129,0.3)]" :
            "shadow-[0_0_20px_rgba(0,212,255,0.15)]"
          }`}
        />

        {/* Background Circle */}
        <svg className="absolute inset-0 -rotate-90" width={size} height={size}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth={strokeWidth}
            fill="none"
          />

          {/* Progress Ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={
              phase === "complete" ? "#10b981" :
              phase === "rewind" ? "url(#rewindGradient)" :
              phase === "protected" ? "url(#protectedGradient)" :
              "url(#progressGradient)"
            }
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-[stroke-dashoffset] duration-75"
          />

          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00d4ff" />
              <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>
            <linearGradient id="protectedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
            <linearGradient id="rewindGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00d4ff" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Orbiting Token */}
        {progress > 0 && phase !== "complete" && !prefersReducedMotion && (
          <div
            className="absolute w-7 h-7 sm:w-8 sm:h-8 will-change-transform"
            style={{
              transform: `translate(${tokenX - size/2}px, ${tokenY - size/2}px)`,
              left: "50%",
              top: "50%",
              marginLeft: "-14px",
              marginTop: "-14px",
            }}
          >
            <div className={`w-full h-full rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-colors duration-300 ${
              phase === "rewind"
                ? "bg-cyan shadow-lg shadow-cyan/50"
                : phase === "protected"
                ? "bg-violet shadow-lg shadow-violet/50"
                : "bg-cyan shadow-lg shadow-cyan/40"
            }`}>
              $
            </div>
          </div>
        )}

        {/* Center Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`rounded-full flex flex-col items-center justify-center transition-all duration-500 ${
              phase === "complete"
                ? "bg-emerald-500/20 border-2 border-emerald-500/50"
                : phase === "rewind"
                ? "bg-cyan/20 border-2 border-cyan/50"
                : phase === "protected"
                ? "bg-violet/20 border-2 border-violet/50"
                : "bg-white/5 border border-white/20"
            }`}
            style={{ width: centerSize, height: centerSize }}
          >
            {/* Icon */}
            <div className={`transition-transform duration-300 ${phase === "rewind" && !prefersReducedMotion ? "animate-spin" : ""}`} style={{ animationDuration: "1s" }}>
              {phase === "complete" ? (
                <Check className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400" />
              ) : phase === "rewind" ? (
                <RotateCcw className="w-8 h-8 sm:w-10 sm:h-10 text-cyan" />
              ) : (
                <Shield className={`w-8 h-8 sm:w-10 sm:h-10 ${phase === "protected" ? "text-violet" : "text-white/40"}`} />
              )}
            </div>

            {/* Time Display */}
            <div className={`mt-1 sm:mt-2 font-mono text-xs sm:text-sm font-medium transition-colors duration-300 ${
              phase === "complete" ? "text-emerald-400" :
              phase === "rewind" ? "text-cyan" :
              phase === "protected" ? "text-violet" :
              "text-white/50"
            }`}>
              {phase === "complete" ? "DONE" :
               phase === "rewind" ? "REWIND" :
               phase === "protected" ? `${Math.round(24 * (1 - progress/100))}h left` :
               phase === "filling" ? `${Math.round(24 * progress/100)}h` :
               "24h"}
            </div>
          </div>
        </div>

        {/* Particle Effects during Rewind - reduced count for mobile */}
        {phase === "rewind" && !prefersReducedMotion && (
          <>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan animate-ping"
                style={{
                  left: size / 2 + (radius * 0.7) * Math.cos((i * 60 * Math.PI) / 180) - 4,
                  top: size / 2 + (radius * 0.7) * Math.sin((i * 60 * Math.PI) / 180) - 4,
                  animationDelay: `${i * 150}ms`,
                  animationDuration: "1.2s"
                }}
              />
            ))}
          </>
        )}

        {/* Corner Accents */}
        <div className="absolute -top-2 -left-2 w-5 h-5 sm:w-6 sm:h-6 border-l-2 border-t-2 border-cyan/30 rounded-tl-lg" />
        <div className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 border-r-2 border-t-2 border-cyan/30 rounded-tr-lg" />
        <div className="absolute -bottom-2 -left-2 w-5 h-5 sm:w-6 sm:h-6 border-l-2 border-b-2 border-cyan/30 rounded-bl-lg" />
        <div className="absolute -bottom-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 border-r-2 border-b-2 border-cyan/30 rounded-br-lg" />
      </div>

      {/* Status Badge */}
      <div className={`mt-6 sm:mt-8 inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-500 ${
        phase === "filling" ? "bg-cyan/10 text-cyan border border-cyan/30" :
        phase === "protected" ? "bg-violet/10 text-violet border border-violet/30" :
        phase === "rewind" ? "bg-cyan/10 text-cyan border border-cyan/30" :
        phase === "complete" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30" :
        "bg-white/5 text-white/50 border border-white/10"
      }`}>
        {phase === "idle" && (
          <>
            <div className="w-2 h-2 rounded-full bg-white/50" />
            <span>Ready to protect transfer</span>
          </>
        )}
        {phase === "filling" && (
          <>
            <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span>Time window active...</span>
          </>
        )}
        {phase === "protected" && (
          <>
            <Shield className="w-4 h-4" />
            <span>Protected. You can rewind anytime.</span>
          </>
        )}
        {phase === "rewind" && (
          <>
            <RotateCcw className={`w-4 h-4 ${!prefersReducedMotion ? "animate-spin" : ""}`} style={{ animationDuration: "0.5s" }} />
            <span>Executing rewind...</span>
          </>
        )}
        {phase === "complete" && (
          <>
            <Check className="w-4 h-4" />
            <span>Funds returned to sender</span>
          </>
        )}
      </div>

      {/* Labels - hidden on very small screens */}
      <div className="mt-3 sm:mt-4 hidden xs:flex items-center gap-4 sm:gap-6 text-[10px] sm:text-xs text-white/40 font-mono">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="w-2.5 sm:w-3 h-0.5 sm:h-1 rounded-full bg-cyan" />
          <span>Time elapsed</span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="w-2.5 sm:w-3 h-0.5 sm:h-1 rounded-full bg-violet" />
          <span>Protected</span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="w-2.5 sm:w-3 h-0.5 sm:h-1 rounded-full bg-emerald-500" />
          <span>Complete</span>
        </div>
      </div>
    </div>
  );
}
