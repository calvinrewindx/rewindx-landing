"use client";

import { useState } from "react";
import { X, Check, Clock, ArrowRight, RotateCcw } from "lucide-react";

export default function UserStory() {
  const [hasRewindX, setHasRewindX] = useState(false);

  return (
    <section className="py-16 sm:py-24 relative">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2
            className="text-2xl sm:text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            What Happens When You Make a Mistake?
          </h2>
          <p className="text-white/50 text-sm">Toggle to see the difference</p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-10">
          <button
            onClick={() => setHasRewindX(!hasRewindX)}
            className="group relative flex items-center gap-4 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
          >
            <span className={`text-sm font-medium transition-colors duration-300 ${!hasRewindX ? 'text-red-400' : 'text-white/40'}`}>
              Without
            </span>

            {/* Toggle Track */}
            <div className={`relative w-16 h-8 rounded-full transition-all duration-500 ${hasRewindX ? 'bg-cyan/20 border-cyan/40' : 'bg-red-500/20 border-red-500/40'} border`}>
              {/* Toggle Knob */}
              <div className={`absolute top-1 w-6 h-6 rounded-full transition-all duration-500 flex items-center justify-center ${hasRewindX ? 'left-[calc(100%-28px)] bg-cyan shadow-[0_0_15px_rgba(0,212,255,0.5)]' : 'left-1 bg-red-400 shadow-[0_0_15px_rgba(239,68,68,0.5)]'}`}>
                {hasRewindX ? (
                  <RotateCcw className="w-3.5 h-3.5 text-white" />
                ) : (
                  <X className="w-3.5 h-3.5 text-white" />
                )}
              </div>
            </div>

            <span className={`text-sm font-medium transition-colors duration-300 ${hasRewindX ? 'text-cyan' : 'text-white/40'}`}>
              With Rewind X
            </span>
          </button>
        </div>

        {/* Transforming Card */}
        <div className={`relative overflow-hidden rounded-2xl border transition-all duration-700 ${hasRewindX ? 'border-cyan/30 bg-cyan/[0.03]' : 'border-red-500/30 bg-red-500/[0.03]'}`}>
          {/* Animated Background Glow */}
          <div className={`absolute inset-0 transition-opacity duration-700 ${hasRewindX ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/10 blur-[100px]" />
          </div>
          <div className={`absolute inset-0 transition-opacity duration-700 ${!hasRewindX ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 blur-[100px]" />
          </div>

          <div className="relative p-8">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${hasRewindX ? 'bg-cyan/20 border-cyan/30' : 'bg-red-500/20 border-red-500/30'} border`}>
                {hasRewindX ? (
                  <Check className="w-7 h-7 text-cyan" />
                ) : (
                  <X className="w-7 h-7 text-red-400" />
                )}
              </div>
              <div>
                <h3
                  className={`text-xl font-bold transition-colors duration-500 ${hasRewindX ? 'text-cyan' : 'text-red-400'}`}
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {hasRewindX ? 'With Rewind X' : 'Without Rewind X'}
                </h3>
                <p className="text-white/40 text-sm">
                  {hasRewindX ? 'Protected transfer' : 'Standard transfer'}
                </p>
              </div>
            </div>

            {/* Timeline Steps */}
            <div className="space-y-4 mb-8">
              {/* Step 1 - Same for both */}
              <div className="flex items-start gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${hasRewindX ? 'bg-cyan/20 text-cyan' : 'bg-red-500/20 text-red-400'}`}>
                  1
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-white/80">You copy a poisoned address from transaction history</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${hasRewindX ? 'bg-cyan/20 text-cyan' : 'bg-red-500/20 text-red-400'}`}>
                  2
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-white/80">
                    {hasRewindX
                      ? 'Transfer enters 24-hour protection window'
                      : 'Transaction confirms instantly on-chain'}
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${hasRewindX ? 'bg-cyan/20 text-cyan' : 'bg-red-500/20 text-red-400'}`}>
                  3
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-white/80">
                    {hasRewindX
                      ? 'You notice the mistake and execute rewind'
                      : 'You realize the mistake. Too late.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Result */}
            <div className={`p-5 rounded-xl border transition-all duration-500 ${hasRewindX ? 'bg-cyan/10 border-cyan/20' : 'bg-red-500/10 border-red-500/20'}`}>
              <div className="flex items-center justify-between">
                <span className="text-white/60 text-sm">Result</span>
                <span className={`text-lg font-bold transition-colors duration-500 ${hasRewindX ? 'text-cyan' : 'text-red-400'}`}>
                  {hasRewindX ? '✓ Funds Recovered' : '✗ Funds Lost Forever'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats - Only show when Rewind X is on */}
        <div className={`mt-8 flex flex-wrap items-center justify-center gap-8 text-center transition-all duration-500 ${hasRewindX ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-cyan" />
            <span className="text-white/70">
              <span className="text-white font-semibold">&lt; 2 min</span> recovery
            </span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-white/10" />
          <div className="flex items-center gap-2">
            <ArrowRight className="w-5 h-5 text-violet" />
            <span className="text-white/70">
              <span className="text-white font-semibold">2 to 4%</span> fee, not total loss
            </span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-white/10" />
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-cyan" />
            <span className="text-white font-semibold">Peace of mind</span>
          </div>
        </div>
      </div>
    </section>
  );
}
