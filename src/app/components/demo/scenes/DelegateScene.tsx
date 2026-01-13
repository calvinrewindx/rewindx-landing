'use client';

import { Bot, User, Shield, Clock, ToggleRight, ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

export default function DelegateScene() {
  return (
    <div className="demo-scene">
      {/* Card */}
      <div className="demo-card">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan/20 to-violet/20 border border-cyan/20 flex items-center justify-center">
            <Shield className="w-5 h-5 text-cyan" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Choose Your Protection
            </h3>
            <p className="text-xs text-white/50">Two modes available</p>
          </div>
        </div>

        {/* Two Modes Comparison */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {/* Manual Mode */}
          <div className="p-4 rounded-xl bg-cyan/5 border border-cyan/20">
            <div className="flex items-center gap-2 mb-3">
              <User className="w-4 h-4 text-cyan" />
              <span className="text-cyan font-semibold text-sm">Manual</span>
            </div>
            <ul className="space-y-2 text-xs text-white/60">
              <li className="flex items-start gap-2">
                <span className="text-cyan">-</span>
                <span>You decide when to rewind</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan">-</span>
                <span>Full control always</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan">-</span>
                <span>Review before action</span>
              </li>
            </ul>
          </div>

          {/* Delegated Mode */}
          <div className="p-4 rounded-xl bg-violet/5 border border-violet/20">
            <div className="flex items-center gap-2 mb-3">
              <Bot className="w-4 h-4 text-violet" />
              <span className="text-violet font-semibold text-sm">Delegated</span>
            </div>
            <ul className="space-y-2 text-xs text-white/60">
              <li className="flex items-start gap-2">
                <span className="text-violet">-</span>
                <span>AI auto-rewinds threats</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet">-</span>
                <span>Multi-signal risk scoring</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet">-</span>
                <span>Daily limits by NFT tier</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Safety Features */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 text-xs">
            <Clock className="w-3.5 h-3.5 text-cyan flex-shrink-0" />
            <span className="text-white/60">1-hour cooldown to activate Delegated Mode</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 text-xs">
            <ToggleRight className="w-3.5 h-3.5 text-cyan flex-shrink-0" />
            <span className="text-white/60">Instant disable via removeDelegate()</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-3">
          <Link
            href="/agents"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-violet to-cyan text-white font-medium hover:opacity-90 transition-opacity text-sm"
          >
            <Bot className="w-4 h-4" />
            Explore AI Agents
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/#demo-video"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-colors text-xs"
            >
              <Play className="w-3 h-3" />
              Watch AI Demo
            </Link>
            <Link
              href="/lightpaper"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-colors text-xs"
            >
              Read Lightpaper
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
