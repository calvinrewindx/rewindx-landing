'use client';

import { CheckCircle, Bot, Shield } from 'lucide-react';

export default function RewindScene() {
  return (
    <div className="demo-scene">
      {/* Card */}
      <div className="demo-card demo-card-success">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Auto-Rewind Complete
            </h3>
            <p className="text-xs text-emerald-400/70">AI Agent protected your funds</p>
          </div>
        </div>

        {/* Recovery Summary */}
        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-center py-3 border-b border-white/5">
            <span className="text-white/50 text-sm">Recovered</span>
            <span className="text-emerald-400 font-mono font-semibold text-lg">985 USDC</span>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-white/5">
            <span className="text-white/50 text-sm">Total Fees</span>
            <span className="text-white/70 font-mono text-sm">15 USDC (1.5%)</span>
          </div>
        </div>

        {/* Comparison */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20 text-center">
            <div className="text-xs text-red-400/70 mb-2">Without Rewind X</div>
            <div className="text-red-400 font-mono font-bold text-xl">-1,000</div>
            <div className="text-xs text-white/30 mt-1">USDC lost</div>
          </div>
          <div className="p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/20 text-center">
            <div className="text-xs text-emerald-400/70 mb-2">With Rewind X</div>
            <div className="text-emerald-400 font-mono font-bold text-xl">+985</div>
            <div className="text-xs text-white/30 mt-1">USDC saved</div>
          </div>
        </div>

        {/* Success Badge - Delegated Mode */}
        <div className="flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-violet/10 to-emerald-500/10 border border-violet/20">
          <Bot className="w-5 h-5 text-violet" />
          <div className="text-center">
            <div className="text-emerald-400 font-semibold">Autonomous Protection</div>
            <div className="text-xs text-white/40">Risk threshold exceeded → Auto-rewind</div>
          </div>
          <Shield className="w-5 h-5 text-emerald-400" />
        </div>
      </div>
    </div>
  );
}
