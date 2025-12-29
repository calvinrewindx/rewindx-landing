'use client';

import { SendHorizontal, Lock, Clock } from 'lucide-react';
import { SCENARIO } from '@/data/scenario';

export default function TransferScene() {
  return (
    <div className="text-center">
      {/* Header */}
      <div className="inline-flex items-center gap-3 mb-8">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center"
          style={{ background: 'rgba(68, 136, 255, 0.15)', border: '1px solid rgba(68, 136, 255, 0.3)' }}
        >
          <SendHorizontal size={24} style={{ color: '#4488ff' }} />
        </div>
        <h2
          className="text-xl md:text-2xl font-semibold"
          style={{ fontFamily: 'var(--font-space-grotesk)', letterSpacing: '-0.02em' }}
        >
          Transfer Initiated
        </h2>
      </div>

      {/* Card */}
      <div className="demo-inner-card max-w-lg mx-auto">
        {/* Transfer Flow - stacked on mobile */}
        <div className="flex flex-col items-center gap-4 mb-6">
          <div className="text-center">
            <div className="demo-big-number" style={{ color: '#fff', fontSize: '2.5rem' }}>
              {SCENARIO.transfer.amount.toLocaleString()}
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{SCENARIO.transfer.token}</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-0.5" style={{ background: 'rgba(255,255,255,0.2)' }} />
            <SendHorizontal size={20} style={{ color: '#4488ff' }} />
            <div className="w-6 h-0.5" style={{ background: 'rgba(255,255,255,0.2)' }} />
          </div>
          <code
            className="text-sm px-4 py-2 rounded-lg"
            style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)', fontFamily: 'var(--font-jetbrains-mono)' }}
          >
            {SCENARIO.transfer.recipient}
          </code>
        </div>

        {/* Status Badge */}
        <div className="flex justify-center mb-6">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{ background: 'rgba(34, 204, 102, 0.1)', border: '1px solid rgba(34, 204, 102, 0.3)' }}
          >
            <Lock size={14} style={{ color: '#22cc66' }} />
            <span style={{ color: '#22cc66', fontSize: '0.875rem', fontWeight: 600 }}>PROTECTED</span>
          </div>
        </div>

        {/* Details */}
        <div className="p-4 rounded-xl space-y-3" style={{ background: 'rgba(0,0,0,0.3)' }}>
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
              <Clock size={14} />
              Window
            </span>
            <span style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>{SCENARIO.transfer.windowHours} hours</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>Transfer #</span>
            <span style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>{SCENARIO.transfer.id}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>TX Hash</span>
            <code style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', fontFamily: 'var(--font-jetbrains-mono)' }}>
              {SCENARIO.transfer.txHash}
            </code>
          </div>
        </div>

        {/* Fee Note */}
        <p className="mt-4 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
          {SCENARIO.transfer.amount.toFixed(2)} USDC → {SCENARIO.transfer.protectedAmount.toFixed(2)} protected ({SCENARIO.transfer.transferFeePercent}% fee)
        </p>
      </div>
    </div>
  );
}
