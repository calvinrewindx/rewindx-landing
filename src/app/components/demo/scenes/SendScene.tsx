'use client';

import { CheckCircle, Shield, Clock } from 'lucide-react';

export default function SendScene() {
  return (
    <div className="demo-scene">
      {/* Card */}
      <div className="demo-card">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center">
            <Shield className="w-5 h-5 text-cyan" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Protected Transfer
            </h3>
            <p className="text-xs text-white/40">Transaction created</p>
          </div>
        </div>

        {/* Transfer Details */}
        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-center py-3 border-b border-white/5">
            <span className="text-white/50 text-sm">Amount</span>
            <span className="text-white font-mono font-medium">1,000 USDC</span>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-white/5">
            <span className="text-white/50 text-sm">To</span>
            <span className="text-white font-mono text-sm">0x3C44...93bD</span>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-white/5">
            <span className="text-white/50 text-sm">Rewind Window</span>
            <span className="text-cyan font-mono">24 hours</span>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-white/5">
            <span className="text-white/50 text-sm">Protection Fee</span>
            <span className="text-white/70 font-mono text-sm">1% (10 USDC)</span>
          </div>
        </div>

        {/* Status Badges */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-emerald-400">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm">Transfer created</span>
          </div>
          <div className="flex items-center gap-2 text-cyan">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Protected for 24 hours</span>
          </div>
        </div>
      </div>
    </div>
  );
}
