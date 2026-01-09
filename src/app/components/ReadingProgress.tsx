"use client";

import { useState, useEffect } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, scrollPercent)));
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 right-6 z-40 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/90 border border-white/10 backdrop-blur-sm">
      <span className="text-white/40 text-xs">Reading</span>
      <span
        className="text-cyan font-mono text-sm font-medium"
        style={{ fontFamily: "var(--font-jetbrains-mono)" }}
      >
        {Math.round(progress)}%
      </span>
    </div>
  );
}
