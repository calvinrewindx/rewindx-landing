"use client";

import { useState, useEffect } from "react";

type Section = { id: string; title: string; top: number };

export default function ReadingProgress() {
  const [current, setCurrent] = useState<{ index: number; total: number; title: string } | null>(null);

  useEffect(() => {
    let sections: Section[] = [];

    const collectSections = () => {
      const headers = Array.from(document.querySelectorAll<HTMLElement>("h2[id]"));
      const numbered = headers.filter((h) => /^\d+\./.test(h.textContent?.trim() || ""));
      const target = numbered.length > 0 ? numbered : headers;
      sections = target.map((h) => ({
        id: h.id,
        title: (h.textContent?.trim() || "").replace(/^\d+\.\s*/, ""),
        top: h.getBoundingClientRect().top + window.scrollY,
      }));
    };

    const update = () => {
      if (sections.length === 0) return;
      const threshold = window.scrollY + 120;
      let activeIndex = -1;
      for (let i = 0; i < sections.length; i++) {
        if (sections[i].top <= threshold) activeIndex = i;
        else break;
      }
      if (activeIndex === -1) {
        setCurrent(null);
      } else {
        setCurrent({
          index: activeIndex + 1,
          total: sections.length,
          title: sections[activeIndex].title,
        });
      }
    };

    collectSections();
    update();

    const onScroll = () => update();
    const onResize = () => {
      collectSections();
      update();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    const recollectTimer = setTimeout(() => {
      collectSections();
      update();
    }, 500);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      clearTimeout(recollectTimer);
    };
  }, []);

  if (!current) return null;

  return (
    <div className="hidden md:flex fixed top-20 right-6 z-40 items-center gap-2.5 px-3.5 py-2 rounded-full bg-background/85 border border-white/10 backdrop-blur-md shadow-lg shadow-black/20">
      <span
        className="text-cyan/80 font-mono text-[11px] tracking-wider"
        style={{ fontFamily: "var(--font-jetbrains-mono)" }}
      >
        {current.index} / {current.total}
      </span>
      <span className="w-px h-3 bg-white/15" />
      <span className="text-white/70 text-xs max-w-[220px] truncate">{current.title}</span>
    </div>
  );
}
