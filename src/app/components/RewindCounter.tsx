"use client";

import { useEffect, useState, useRef } from "react";

interface RewindCounterProps {
  targetValue: number;
  suffix?: string;
  prefix?: string;
  overshootValue?: number;
  duration?: number;
  className?: string;
}

export default function RewindCounter({
  targetValue,
  suffix = "",
  prefix = "",
  overshootValue,
  duration = 2000,
  className = "",
}: RewindCounterProps) {
  const [displayValue, setDisplayValue] = useState(targetValue);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounter();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounter = () => {
    const overshoot = overshootValue ?? targetValue + Math.floor(targetValue * 0.5);
    const totalDuration = duration;
    const overshootDuration = totalDuration * 0.4;
    const rewindDuration = totalDuration * 0.6;

    // Phase 1: Count up to overshoot
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;

      if (elapsed < overshootDuration) {
        // Phase 1: Counting up
        const progress = elapsed / overshootDuration;
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out
        const value = Math.floor(targetValue + (overshoot - targetValue) * eased);
        setDisplayValue(value);
        requestAnimationFrame(animate);
      } else if (elapsed < totalDuration) {
        // Phase 2: Rewinding back
        const rewindElapsed = elapsed - overshootDuration;
        const progress = rewindElapsed / rewindDuration;
        const eased = progress * progress; // ease-in
        const value = Math.floor(overshoot - (overshoot - targetValue) * eased);
        setDisplayValue(value);
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(targetValue);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}
