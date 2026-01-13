'use client';

import { ScanSearch, Check, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const scanSteps = [
  'Checking burn addresses',
  'Analyzing address patterns',
  'Comparing to known contacts',
  'Computing risk score',
];

export default function ScanScene() {
  const [completedSteps, setCompletedSteps] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCompletedSteps((prev) => {
        if (prev >= scanSteps.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 700);

    return () => clearInterval(interval);
  }, []);

  const isComplete = completedSteps >= scanSteps.length;

  return (
    <div className="text-center">
      {/* Header */}
      <div className="inline-flex items-center gap-3 mb-8">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center"
          style={{ background: 'rgba(68, 136, 255, 0.15)', border: '1px solid rgba(68, 136, 255, 0.3)' }}
        >
          <ScanSearch size={24} style={{ color: '#4488ff' }} />
        </div>
        <h2
          className="text-xl md:text-2xl font-semibold"
          style={{ fontFamily: 'var(--font-space-grotesk)', letterSpacing: '-0.02em' }}
        >
          Threat Analysis
        </h2>
      </div>

      {/* Card */}
      <div className="demo-inner-card max-w-md mx-auto">
        {/* Scan Items with Progress */}
        <div className="space-y-4 text-left mb-6">
          {scanSteps.map((item, i) => {
            const isActive = i === completedSteps;
            const isDone = i < completedSteps;

            return (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300"
                style={{
                  background: isDone ? 'rgba(34, 204, 102, 0.08)' : isActive ? 'rgba(68, 136, 255, 0.08)' : 'transparent',
                  border: isDone ? '1px solid rgba(34, 204, 102, 0.2)' : isActive ? '1px solid rgba(68, 136, 255, 0.2)' : '1px solid transparent',
                }}
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  {isDone ? (
                    <Check size={18} style={{ color: '#22cc66' }} />
                  ) : isActive ? (
                    <Loader2 size={18} className="animate-spin" style={{ color: '#4488ff' }} />
                  ) : (
                    <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.2)' }} />
                  )}
                </div>
                <span
                  className="text-sm transition-colors"
                  style={{
                    color: isDone ? '#22cc66' : isActive ? '#ffffff' : 'rgba(255,255,255,0.5)',
                    fontWeight: isActive ? 500 : 400
                  }}
                >
                  {item}
                </span>
              </div>
            );
          })}
        </div>

        {/* Result Preview */}
        {isComplete && (
          <div
            className="p-4 rounded-xl text-center animate-fade-in"
            style={{ background: 'rgba(255, 68, 68, 0.1)', border: '1px solid rgba(255, 68, 68, 0.2)' }}
          >
            <span style={{ color: '#ff6b6b', fontWeight: 600 }}>⚠ Threat Detected</span>
          </div>
        )}
      </div>
    </div>
  );
}
