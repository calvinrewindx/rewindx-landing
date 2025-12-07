"use client";

import { useEffect, useState, useRef } from "react";

interface CtrlZAnimationProps {
  size?: "sm" | "md" | "lg";
  autoPlay?: boolean;
  className?: string;
}

export default function CtrlZAnimation({
  size = "md",
  autoPlay = true,
  className = "",
}: CtrlZAnimationProps) {
  const [activeKey, setActiveKey] = useState<"none" | "ctrl" | "z" | "both">("none");
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const sizeClasses = {
    sm: { key: "w-10 h-8 text-[10px]", gap: "gap-1" },
    md: { key: "w-14 h-10 text-xs", gap: "gap-2" },
    lg: { key: "w-20 h-14 text-sm", gap: "gap-3" },
  };

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !autoPlay || prefersReducedMotion) return;

    const animate = () => {
      setActiveKey("ctrl");
      setTimeout(() => setActiveKey("both"), 300);
      setTimeout(() => setActiveKey("z"), 600);
      setTimeout(() => setActiveKey("none"), 1200);
    };

    animate();
    const interval = setInterval(animate, 3000);
    return () => clearInterval(interval);
  }, [isVisible, autoPlay, prefersReducedMotion]);

  const getKeyClass = (key: "ctrl" | "z") => {
    const isActive = activeKey === key || activeKey === "both";
    return `${sizeClasses[size].key} rounded-lg border font-mono font-medium flex items-center justify-center transition-all duration-150 ${
      isActive
        ? "bg-cyan/25 border-cyan text-cyan shadow-xl shadow-cyan/40 -translate-y-0.5"
        : "bg-white/8 border-white/25 text-white/60"
    }`;
  };

  return (
    <div ref={ref} className={`inline-flex items-center ${sizeClasses[size].gap} ${className}`}>
      <div className={getKeyClass("ctrl")}>Ctrl</div>
      <span className="text-white/30 text-xs">+</span>
      <div className={getKeyClass("z")}>Z</div>
    </div>
  );
}
