"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

interface ScrollMemoryProps {
  storageKey?: string;
  showBackToTop?: boolean;
}

export default function ScrollMemory({ showBackToTop = true }: ScrollMemoryProps) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showBackToTop || !showButton) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-background/90 border border-white/10 backdrop-blur-sm hover:border-cyan/30 hover:bg-cyan/10 transition-all duration-300 group"
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5 text-white/50 group-hover:text-cyan transition-colors" />
    </button>
  );
}
