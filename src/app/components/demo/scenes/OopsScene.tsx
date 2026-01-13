'use client';

import { Bot, AlertTriangle, Shield } from 'lucide-react';

export default function OopsScene() {
  return (
    <div className="demo-scene">
      {/* Card */}
      <div className="demo-card demo-card-warning">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center animate-pulse">
            <AlertTriangle className="w-5 h-5 text-red-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Address Poisoning Detected
            </h3>
            <p className="text-xs text-red-400/70">AI Agent Alert</p>
          </div>
        </div>

        {/* Risk Score */}
        <div className="mb-6 p-4 rounded-lg bg-red-500/5 border border-red-500/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white/50 text-sm">Risk Score</span>
            <span className="text-red-400 font-mono font-bold">95 / 100</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-[95%] bg-gradient-to-r from-red-500 to-red-400 rounded-full" />
          </div>
        </div>

        {/* Address Comparison */}
        <div className="space-y-3 mb-6">
          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
            <div className="text-xs text-white/40 mb-1">Recipient address:</div>
            <div className="font-mono text-white text-sm">
              0x3C44...93b<span className="text-red-400 font-bold bg-red-500/20 px-1 rounded">D</span>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
            <div className="text-xs text-emerald-400/70 mb-1">Known contact (Alice):</div>
            <div className="font-mono text-white text-sm">
              0x3C44...93B<span className="text-emerald-400 font-bold">C</span>
            </div>
          </div>
        </div>

        {/* Threat Details */}
        <div className="space-y-2 mb-6 text-sm">
          <div className="flex items-center gap-2 text-white/60">
            <Shield className="w-4 h-4 text-amber-400" />
            <span>98% similarity to known contact</span>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <Bot className="w-4 h-4 text-violet" />
            <span>Threat type: ADDRESS_POISONING</span>
          </div>
        </div>

        {/* Agent Action */}
        <div className="flex items-center justify-center gap-2 py-3 rounded-xl bg-violet/10 border border-violet/30">
          <Bot className="w-5 h-5 text-violet" />
          <span className="text-violet font-medium">Agent initiating auto-rewind...</span>
        </div>
      </div>
    </div>
  );
}
