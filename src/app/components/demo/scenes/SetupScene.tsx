'use client';

import { Play, ChevronRight, Shield, AlertTriangle, CheckCircle } from 'lucide-react';
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
      setTimeout(() => setPhase(3), 700),
      setTimeout(() => setPhase(4), 1000),
      setTimeout(() => setPhase(5), 1400),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="demo-intro-redesign">
      {/* Floating Coins Background */}
      <div className="demo-floating-coins">
        <div className="demo-coin demo-coin-1">$</div>
        <div className="demo-coin demo-coin-2">$</div>
        <div className="demo-coin demo-coin-3">$</div>
        <div className="demo-coin demo-coin-4">$</div>
        <div className="demo-coin demo-coin-5">$</div>
      </div>

      {/* Badge */}
      <div
        className="demo-intro-badge"
        style={{
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.9)',
        }}
      >
        <span className="demo-intro-badge-dot" />
        Interactive Demo
      </div>

      {/* Headline */}
      <h1
        className="demo-intro-headline"
        style={{
          opacity: phase >= 2 ? 1 : 0,
          transform: phase >= 2 ? 'translateY(0)' : 'translateY(20px)',
        }}
      >
        The Undo Button
        <span className="demo-intro-headline-gradient"> for Crypto</span>
      </h1>

      {/* Mini Timeline Preview */}
      <div
        className="demo-intro-timeline"
        style={{
          opacity: phase >= 3 ? 1 : 0,
          transform: phase >= 3 ? 'translateY(0)' : 'translateY(15px)',
        }}
      >
        <div className="demo-timeline-step">
          <div className="demo-timeline-icon demo-timeline-icon-send">
            <Shield size={16} />
          </div>
          <span>Send</span>
        </div>
        <div className="demo-timeline-line" />
        <div className="demo-timeline-step">
          <div className="demo-timeline-icon demo-timeline-icon-alert">
            <AlertTriangle size={16} />
          </div>
          <span>Threat</span>
        </div>
        <div className="demo-timeline-line" />
        <div className="demo-timeline-step">
          <div className="demo-timeline-icon demo-timeline-icon-success">
            <CheckCircle size={16} />
          </div>
          <span>Saved</span>
        </div>
      </div>

      {/* Story Context */}
      <p
        className="demo-intro-story"
        style={{
          opacity: phase >= 4 ? 1 : 0,
          transform: phase >= 4 ? 'translateY(0)' : 'translateY(15px)',
        }}
      >
        An <span style={{ color: '#00d4ff' }}>AI agent</span> detects an <span style={{ color: '#ff6b6b' }}>address poisoning attack</span>
        <br />
        and recovers <span style={{ color: '#22cc66', fontWeight: 600 }}>~965 USDC</span> autonomously
      </p>

      {/* CTA */}
      <div
        className="demo-intro-cta"
        style={{
          opacity: phase >= 5 ? 1 : 0,
          transform: phase >= 5 ? 'translateY(0)' : 'translateY(20px)',
        }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {onPlay && (
            <button onClick={onPlay} className="demo-btn-primary">
              <Play size={18} />
              <span>Watch Demo</span>
            </button>
          )}
          {onNext && (
            <button onClick={onNext} className="demo-btn-secondary">
              <span>Step-by-Step</span>
              <ChevronRight size={18} />
            </button>
          )}
        </div>
        <p className="demo-intro-meta">
          <span style={{ color: '#00d4ff' }}>Recorded replay</span> · No wallet · No real funds · <span style={{ color: 'rgba(255,255,255,0.6)' }}>~30s</span>
        </p>
      </div>
    </div>
  );
}
