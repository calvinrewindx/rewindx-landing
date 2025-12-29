'use client';

import { Undo2, Check, Clock } from 'lucide-react';
import { SCENARIO } from '@/data/scenario';
import { useEffect, useState } from 'react';

const steps = [
  { label: 'Request rewind', status: 'done' },
  { label: 'Security hold (30s)', status: 'skipped' },
  { label: 'Execute rewind', status: 'done' },
];

export default function RewindScene() {
  const [visibleSteps, setVisibleSteps] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleSteps((prev) => {
        if (prev >= steps.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      {/* Header */}
      <div className="inline-flex items-center gap-3 mb-8">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center"
          style={{ background: 'rgba(68, 136, 255, 0.15)', border: '1px solid rgba(68, 136, 255, 0.3)' }}
        >
          <Undo2 size={24} style={{ color: '#4488ff' }} />
        </div>
        <h2
          className="text-xl md:text-2xl font-semibold"
          style={{ fontFamily: 'var(--font-space-grotesk)', letterSpacing: '-0.02em' }}
        >
          Autonomous Rewind
        </h2>
      </div>

      {/* Card */}
      <div className="demo-inner-card max-w-md mx-auto">
        <p className="mb-6" style={{ color: 'rgba(255,255,255,0.7)' }}>
          AI Agent executing policy-gated rewind
        </p>

        {/* Progress Steps */}
        <div className="p-4 rounded-xl mb-6 text-left space-y-4" style={{ background: 'rgba(0,0,0,0.3)' }}>
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex items-center justify-between transition-all duration-300"
              style={{ opacity: i < visibleSteps ? 1 : 0.3 }}
            >
              <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem' }}>
                Step {i + 1}: {step.label}
              </span>
              {step.status === 'done' && i < visibleSteps && (
                <span className="flex items-center gap-1 text-xs" style={{ color: '#22cc66' }}>
                  <Check size={14} />
                  DONE
                </span>
              )}
              {step.status === 'skipped' && i < visibleSteps && (
                <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-muted)' }}>
                  <Clock size={14} />
                  SKIPPED
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Request Details */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>Request ID</span>
            <span style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>#{SCENARIO.rewind.requestId}</span>
          </div>
          <div className="flex items-center justify-between">
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>Transfer ID</span>
            <span style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>#{SCENARIO.transfer.id}</span>
          </div>
          <div className="flex items-center justify-between">
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>TX Hash</span>
            <code style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', fontFamily: 'var(--font-jetbrains-mono)' }}>
              {SCENARIO.rewind.txHash}
            </code>
          </div>
        </div>

        {/* Note */}
        <p className="mt-4 pt-4 text-sm" style={{ color: 'rgba(255,255,255,0.6)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          The agent acted autonomously — but within rules.
        </p>
      </div>
    </div>
  );
}
