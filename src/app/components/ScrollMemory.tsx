"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { ArrowUp } from "lucide-react";

interface ScrollMemoryProps {
  storageKey: string;
  showBackToTop?: boolean;
}

export default function ScrollMemory({ storageKey, showBackToTop = true }: ScrollMemoryProps) {
  const [showButton, setShowButton] = useState(false);
  const lastSaveTime = useRef(0);
  const THROTTLE_MS = 250;

  // Throttled save scroll position
  const saveScrollPosition = useCallback(() => {
    const now = Date.now();
    if (now - lastSaveTime.current < THROTTLE_MS) return;

    lastSaveTime.current = now;
    localStorage.setItem(storageKey, String(window.scrollY));
  }, [storageKey]);

  // Restore scroll position (only if no anchor in URL)
  useEffect(() => {
    // Disable browser's automatic scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const hasAnchor = window.location.hash.length > 0;
    const saved = localStorage.getItem(storageKey);

    if (!hasAnchor && saved) {
      const position = parseInt(saved, 10);
      if (position > 100) {
        requestAnimationFrame(() => {
          window.scrollTo(0, position);
        });
      }
    }
  }, [storageKey]);

  // Listen to scroll events
  useEffect(() => {
    const handleScroll = () => {
      saveScrollPosition();
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [saveScrollPosition]);

  // Save on page leave (no throttle)
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem(storageKey, String(window.scrollY));
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [storageKey]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    localStorage.removeItem(storageKey);
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
