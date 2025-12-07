"use client";

import { Send, Clock, RotateCcw, CheckCircle, Award } from "lucide-react";

export default function ProtocolFlowchart() {
  return (
    <div className="my-8 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10">
      <h4 className="text-white/60 text-sm mb-6 text-center">Protocol Flow</h4>

      {/* Flow Steps */}
      <div className="flex flex-col items-center gap-4">
        {/* Step 1: Create */}
        <div className="flex items-center gap-4 w-full max-w-md">
          <div className="w-12 h-12 rounded-xl bg-cyan/20 border border-cyan/30 flex items-center justify-center flex-shrink-0">
            <Send className="w-5 h-5 text-cyan" />
          </div>
          <div className="flex-1 p-4 rounded-xl bg-white/[0.03] border border-white/10">
            <p className="text-white text-sm font-medium">Create Protected Transfer</p>
            <p className="text-white/40 text-xs">Sender initiates transfer</p>
          </div>
        </div>

        {/* Arrow */}
        <div className="w-0.5 h-6 bg-gradient-to-b from-cyan/50 to-violet/50" />

        {/* Step 2: Window Active */}
        <div className="flex items-center gap-4 w-full max-w-md">
          <div className="w-12 h-12 rounded-xl bg-violet/20 border border-violet/30 flex items-center justify-center flex-shrink-0">
            <Clock className="w-5 h-5 text-violet" />
          </div>
          <div className="flex-1 p-4 rounded-xl bg-white/[0.03] border border-white/10">
            <p className="text-white text-sm font-medium">Rewind Window Active</p>
            <p className="text-white/40 text-xs">24-48h deterministic window</p>
          </div>
        </div>

        {/* Arrow */}
        <div className="w-0.5 h-6 bg-gradient-to-b from-violet/50 to-cyan/50" />

        {/* Decision Box */}
        <div className="w-full max-w-lg p-4 rounded-xl bg-white/[0.02] border border-dashed border-white/20">
          <p className="text-white/50 text-xs text-center mb-4">Three possible outcomes:</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Option 1: Rewind */}
            <div className="p-3 rounded-lg bg-cyan/10 border border-cyan/20 text-center">
              <RotateCcw className="w-4 h-4 text-cyan mx-auto mb-2" />
              <p className="text-cyan text-xs font-medium">Sender Rewinds</p>
              <p className="text-white/30 text-[10px]">During window</p>
            </div>

            {/* Option 2: Claim */}
            <div className="p-3 rounded-lg bg-violet/10 border border-violet/20 text-center">
              <CheckCircle className="w-4 h-4 text-violet mx-auto mb-2" />
              <p className="text-violet text-xs font-medium">Receiver Claims</p>
              <p className="text-white/30 text-[10px]">After window only</p>
            </div>

            {/* Option 3: Expire */}
            <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-center">
              <Clock className="w-4 h-4 text-white/50 mx-auto mb-2" />
              <p className="text-white/50 text-xs font-medium">Window Expires</p>
              <p className="text-white/30 text-[10px]">Auto-finalize</p>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="w-0.5 h-6 bg-gradient-to-b from-white/20 to-cyan/50" />

        {/* Step 4: Fragment NFT (only for rewinds) */}
        <div className="flex items-center gap-4 w-full max-w-md">
          <div className="w-12 h-12 rounded-xl bg-cyan/20 border border-cyan/30 flex items-center justify-center flex-shrink-0">
            <Award className="w-5 h-5 text-cyan" />
          </div>
          <div className="flex-1 p-4 rounded-xl bg-white/[0.03] border border-white/10">
            <p className="text-white text-sm font-medium">Fragment NFT Minted</p>
            <p className="text-white/40 text-xs">On-chain proof (rewinds only)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
