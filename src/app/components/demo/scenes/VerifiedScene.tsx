'use client';

import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { SCENARIO } from '@/data/scenario';
import { useEffect, useState } from 'react';

function useCountUp(target: number, duration: number = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
}

export default function VerifiedScene() {
  const recoveredAmount = useCountUp(SCENARIO.result.recovered, 1500);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Show confetti after count-up completes
    const timer = setTimeout(() => setShowConfetti(true), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-center relative">
      {/* Confetti */}
      {showConfetti && (
        <div className="demo-confetti-container">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="demo-confetti" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 0.5}s`,
              backgroundColor: ['#22cc66', '#4488ff', '#a855f7', '#ff9944'][i % 4],
            }} />
          ))}
        </div>
      )}
      {/* Header */}
      <div className="inline-flex items-center gap-3 mb-8">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center"
          style={{ background: 'rgba(34, 204, 102, 0.15)', border: '1px solid rgba(34, 204, 102, 0.3)' }}
        >
          <CheckCircle size={24} style={{ color: '#22cc66' }} />
        </div>
        <h2
          className="text-xl md:text-2xl font-semibold"
          style={{ fontFamily: 'var(--font-space-grotesk)', letterSpacing: '-0.02em', color: '#22cc66' }}
        >
          Funds Recovered
        </h2>
      </div>

      {/* Card */}
      <div className="demo-inner-card max-w-xl mx-auto" style={{ borderColor: 'rgba(34, 204, 102, 0.2)' }}>
        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Without Rewind X */}
          <div className="demo-comparison-card negative">
            <div className="text-xs uppercase tracking-wider mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Without Rewind X
            </div>
            <div className="text-2xl font-bold mb-2" style={{ color: 'rgba(255,255,255,0.8)' }}>
              1,000 USDC
            </div>
            <div className="flex items-center justify-center gap-2">
              <XCircle size={16} style={{ color: '#ff4444' }} />
              <span style={{ color: '#ff4444', fontSize: '0.875rem', fontWeight: 600 }}>LOST forever</span>
            </div>
          </div>

          {/* With Rewind X */}
          <div className="demo-comparison-card positive">
            <div className="text-xs uppercase tracking-wider mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
              With Rewind X
            </div>
            <div
              className="demo-big-number mb-2"
              style={{ color: '#22cc66', fontSize: '2rem', textShadow: '0 0 30px rgba(34, 204, 102, 0.3)' }}
            >
              {recoveredAmount.toFixed(2)}
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle size={16} style={{ color: '#22cc66' }} />
              <span style={{ color: '#22cc66', fontSize: '0.875rem' }}>RECOVERED</span>
            </div>
          </div>
        </div>

        {/* Status Change */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span
            className="px-3 py-1 rounded-full text-xs font-medium"
            style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}
          >
            {SCENARIO.result.statusBefore}
          </span>
          <ArrowRight size={16} style={{ color: 'rgba(255,255,255,0.3)' }} />
          <span
            className="px-3 py-1 rounded-full text-xs font-medium"
            style={{ background: 'rgba(34, 204, 102, 0.1)', color: '#22cc66' }}
          >
            {SCENARIO.result.statusAfter}
          </span>
        </div>

        {/* Fee Breakdown */}
        <div className="p-4 rounded-xl" style={{ background: 'rgba(0,0,0,0.3)' }}>
          <div className="text-xs uppercase tracking-wider mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Protocol Fees
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>Transfer fee ({SCENARIO.transfer.transferFeePercent}%)</span>
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>{SCENARIO.transfer.transferFee.toFixed(2)} USDC</span>
            </div>
            <div className="flex items-center justify-between">
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>Rewind fee ({SCENARIO.result.rewindFeePercent}%)</span>
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>{SCENARIO.result.rewindFee.toFixed(2)} USDC</span>
            </div>
            <div
              className="flex items-center justify-between pt-2 mt-2"
              style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
            >
              <span style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>Total ({SCENARIO.result.totalFeePercent}%)</span>
              <span style={{ color: '#fff', fontWeight: 600 }}>{SCENARIO.result.totalFees.toFixed(2)} USDC</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
