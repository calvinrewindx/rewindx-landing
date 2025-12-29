'use client';

import { Play, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface SetupSceneProps {
  onPlay?: () => void;
  onNext?: () => void;
}

export default function SetupScene({ onPlay, onNext }: SetupSceneProps) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 100),
      setTimeout(() => setPhase(2), 400),
      setTimeout(() => setPhase(3), 800),
      setTimeout(() => setPhase(4), 1400),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="demo-premium-intro">
      {/* Main Headline */}
      <h1
        className="demo-premium-headline"
        style={{
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? 'translateY(0)' : 'translateY(30px)',
        }}
      >
        The Undo Button
        <br />
        <span className="demo-premium-headline-accent">for Crypto</span>
      </h1>

      {/* Tagline */}
      <p
        className="demo-premium-tagline"
        style={{
          opacity: phase >= 2 ? 1 : 0,
          transform: phase >= 2 ? 'translateY(0)' : 'translateY(20px)',
        }}
      >
        Reversible transfers — enforced on-chain.
      </p>

      {/* Investor Context */}
      <div
        className="demo-premium-context"
        style={{
          opacity: phase >= 3 ? 1 : 0,
          transform: phase >= 3 ? 'translateY(0)' : 'translateY(15px)',
        }}
      >
        <p>
          An AI agent detects an <span style={{ color: '#ff6b6b' }}>address poisoning attack</span>
          <br />
          → <span style={{ color: '#22cc66' }}>~965 USDC</span> recovered
        </p>
      </div>

      {/* CTA Buttons */}
      <div
        className="demo-premium-cta-wrap"
        style={{
          opacity: phase >= 4 ? 1 : 0,
          transform: phase >= 4 ? 'translateY(0)' : 'translateY(20px)',
        }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {onPlay && (
            <button onClick={onPlay} className="demo-premium-cta">
              <Play size={18} />
              <span>Autoplay Demo</span>
            </button>
          )}
          {onNext && (
            <button onClick={onNext} className="demo-premium-cta-secondary">
              <span>Step-by-Step</span>
              <ChevronRight size={18} />
            </button>
          )}
        </div>
        <p className="demo-premium-meta">
          Interactive replay — no wallet, no real transactions &bull; ~30 seconds
        </p>
      </div>
    </div>
  );
}
