"use client";

import { useEffect, useState, useRef } from "react";
import { Bot, Send, AlertTriangle, RotateCcw, Shield } from "lucide-react";

interface AgentRewindAnimationProps {
  className?: string;
}

export default function AgentRewindAnimation({ className = "" }: AgentRewindAnimationProps) {
  const [phase, setPhase] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
    if (!isVisible) return;

    const animate = () => {
      setPhase(0);
      setTimeout(() => setPhase(1), 500);   // Send
      setTimeout(() => setPhase(2), 1500);  // Alert
      setTimeout(() => setPhase(3), 2500);  // Rewind
      setTimeout(() => setPhase(4), 3500);  // Safe
    };

    animate();
    const interval = setInterval(animate, 5000);
    return () => clearInterval(interval);
  }, [isVisible]);

  const getBoxClass = (active: boolean, color: "cyan" | "violet" | "red" | "green") => {
    const colors = {
      cyan: active ? "bg-cyan/20 border-cyan shadow-lg shadow-cyan/30" : "bg-white/5 border-white/10",
      violet: active ? "bg-violet/20 border-violet shadow-lg shadow-violet/30" : "bg-white/5 border-white/10",
      red: active ? "bg-red-500/20 border-red-500 shadow-lg shadow-red-500/30" : "bg-white/5 border-white/10",
      green: active ? "bg-green-500/20 border-green-500 shadow-lg shadow-green-500/30" : "bg-white/5 border-white/10",
    };
    return `w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 flex items-center justify-center transition-all duration-300 ${colors[color]}`;
  };

  const getIconClass = (active: boolean, color: "cyan" | "violet" | "red" | "green") => {
    const colors = {
      cyan: active ? "text-cyan" : "text-white/30",
      violet: active ? "text-violet" : "text-white/30",
      red: active ? "text-red-500" : "text-white/30",
      green: active ? "text-green-500" : "text-white/30",
    };
    return `w-7 h-7 sm:w-8 sm:h-8 transition-all duration-300 ${colors[color]} ${active ? "scale-110" : "scale-100"}`;
  };

  const getConnectorClass = (active: boolean, reverse: boolean = false) => {
    return `hidden sm:flex items-center gap-1 transition-all duration-500 ${active ? "opacity-100" : "opacity-30"}`;
  };

  return (
    <div ref={ref} className={`flex items-center justify-center gap-2 sm:gap-4 ${className}`}>
      {/* Agent */}
      <div className="flex flex-col items-center gap-2">
        <div className={getBoxClass(phase >= 0, "violet")}>
          <Bot className={getIconClass(phase >= 0, "violet")} />
        </div>
        <span className="text-xs text-white/40 font-medium">Agent</span>
      </div>

      {/* Connector 1 */}
      <div className={getConnectorClass(phase >= 1)}>
        <div className="w-4 h-0.5 bg-current text-cyan/50" />
        <Send className={`w-4 h-4 ${phase === 1 ? "text-cyan animate-pulse" : "text-white/20"}`} />
        <div className="w-4 h-0.5 bg-current text-cyan/50" />
      </div>

      {/* Scan/Alert */}
      <div className="flex flex-col items-center gap-2">
        <div className={getBoxClass(phase === 2, "red")}>
          <AlertTriangle className={getIconClass(phase === 2, "red")} />
        </div>
        <span className="text-xs text-white/40 font-medium">Threat</span>
      </div>

      {/* Connector 2 */}
      <div className={getConnectorClass(phase >= 3, true)}>
        <div className="w-4 h-0.5 bg-current text-violet/50" />
        <RotateCcw className={`w-4 h-4 ${phase === 3 ? "text-violet animate-spin" : "text-white/20"}`} />
        <div className="w-4 h-0.5 bg-current text-violet/50" />
      </div>

      {/* Safe */}
      <div className="flex flex-col items-center gap-2">
        <div className={getBoxClass(phase === 4, "green")}>
          <Shield className={getIconClass(phase === 4, "green")} />
        </div>
        <span className="text-xs text-white/40 font-medium">Safe</span>
      </div>
    </div>
  );
}
