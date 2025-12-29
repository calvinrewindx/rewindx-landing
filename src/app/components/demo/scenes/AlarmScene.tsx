'use client';

import { AlertTriangle, Zap } from 'lucide-react';
import { SCENARIO } from '@/data/scenario';
import { useEffect, useState } from 'react';

export default function AlarmScene() {
  const [riskWidth, setRiskWidth] = useState(0);
  const [showFlash, setShowFlash] = useState(true);
  const [shake, setShake] = useState(true);

  useEffect(() => {
    // Flash effect
    const flashTimer = setTimeout(() => setShowFlash(false), 300);
    // Shake effect
    const shakeTimer = setTimeout(() => setShake(false), 500);
    // Risk bar animation
    const riskTimer = setTimeout(() => {
      setRiskWidth(SCENARIO.threat.riskScore);
    }, 200);
    return () => {
      clearTimeout(flashTimer);
      clearTimeout(shakeTimer);
      clearTimeout(riskTimer);
    };
  }, []);

  return (
    <div className={`text-center ${shake ? 'demo-shake' : ''}`}>
      {/* Red Flash Overlay */}
      {showFlash && (
        <div className="demo-alarm-flash" />
      )}
      {/* Header - Pulsing */}
      <div className="inline-flex items-center gap-3 mb-8">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center demo-pulse-glow"
          style={{ background: 'rgba(255, 68, 68, 0.15)', border: '1px solid rgba(255, 68, 68, 0.3)' }}
        >
          <AlertTriangle size={24} style={{ color: '#ff4444' }} />
        </div>
        <h2
          className="text-xl md:text-2xl font-semibold"
          style={{ fontFamily: 'var(--font-space-grotesk)', letterSpacing: '-0.02em', color: '#ff4444' }}
        >
          Threat Detected
        </h2>
      </div>

      {/* Card */}
      <div className="demo-inner-card max-w-lg mx-auto" style={{ borderColor: 'rgba(255, 68, 68, 0.2)' }}>
        {/* Attack Type */}
        <div
          className="text-lg font-semibold mb-6"
          style={{ color: '#fff' }}
        >
          ADDRESS POISONING ATTACK
        </div>

        {/* Risk Score with animated bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>Risk Score</span>
            <span
              className="text-2xl font-bold"
              style={{ color: '#ff4444' }}
            >
              {SCENARIO.threat.riskScore}
            </span>
          </div>
          <div className="demo-risk-bar">
            <div
              className="demo-risk-bar-fill"
              style={{ width: `${riskWidth}%` }}
            />
          </div>
        </div>

        {/* Address Comparison */}
        <div className="p-4 rounded-xl mb-6" style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,68,68,0.2)' }}>
          <div className="space-y-4 text-left">
            <div>
              <div className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>Your Contact (Alice)</div>
              <code style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', fontFamily: 'var(--font-jetbrains-mono)' }}>
                {SCENARIO.threat.knownContact.address}
              </code>
            </div>
            <div>
              <div className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>Suspicious Address</div>
              <code style={{ fontSize: '0.875rem', fontFamily: 'var(--font-jetbrains-mono)' }}>
                <span style={{ color: 'rgba(255,255,255,0.8)' }}>0x3C44...93b</span>
                <span className="demo-address-diff">D</span>
              </code>
            </div>
            <div className="text-center pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <span className="text-sm font-medium" style={{ color: '#ff6b6b' }}>
                ↑ Only last character differs: C → D
              </span>
            </div>
          </div>
        </div>

        {/* Explanation */}
        <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
          Attackers send tiny transactions from lookalike addresses, hoping you copy the wrong one.
        </p>

        {/* Auto-Rewind Badge - Blinking */}
        <div className="inline-flex items-center gap-2 demo-blink">
          <Zap size={18} style={{ color: '#ff9944' }} />
          <span style={{ color: '#ff9944', fontWeight: 600, fontSize: '0.875rem' }}>
            AUTO-REWIND INITIATED
          </span>
        </div>
      </div>
    </div>
  );
}
