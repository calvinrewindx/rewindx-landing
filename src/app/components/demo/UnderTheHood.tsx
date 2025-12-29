'use client';

import { ChevronDown, Check, Shield, BarChart3, FileText } from 'lucide-react';
import { SCENARIO, AUDIT_TRAIL } from '@/data/scenario';

interface UnderTheHoodProps {
  expanded: boolean;
  onToggle: () => void;
  currentStep: number;
}

export default function UnderTheHood({ expanded, onToggle, currentStep }: UnderTheHoodProps) {
  const visibleEvents = Math.min(currentStep, AUDIT_TRAIL.length);

  return (
    <div className="mt-8">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 rounded-xl transition-all"
        style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div className="flex items-center gap-3">
          <ChevronDown
            size={18}
            className="transition-transform duration-300"
            style={{
              color: 'rgba(255,255,255,0.5)',
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          />
          <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Technical Details
          </span>
        </div>
        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
          {expanded ? 'Hide' : 'Show'}
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: expanded ? '1200px' : '0',
          opacity: expanded ? 1 : 0,
          marginTop: expanded ? '1rem' : '0',
        }}
      >
        <p className="text-xs mb-4 text-center" style={{ color: 'var(--text-muted)' }}>
          How AI agents operate: defined rules, explicit permissions, full audit trail.
        </p>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Permissions Card */}
          <div
            className="rounded-xl p-4"
            style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Shield size={16} style={{ color: '#4488ff' }} />
              <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Permissions
              </span>
            </div>

            <div className="space-y-2 mb-4">
              {['createTransfer', 'requestRewind', 'executeRewind'].map((perm) => (
                <div key={perm} className="flex items-center gap-2 text-xs">
                  <Check size={12} style={{ color: '#22cc66' }} />
                  <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-jetbrains-mono)' }}>
                    {perm}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-3 space-y-2" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="flex items-center justify-between text-xs">
                <span style={{ color: 'var(--text-muted)' }}>Mode</span>
                <span style={{ color: '#8844ff', fontWeight: 500 }}>AUTONOMOUS</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span style={{ color: 'var(--text-muted)' }}>Daily</span>
                <span style={{ color: 'var(--text-muted)' }}>
                  {SCENARIO.limits.after.used}/{SCENARIO.limits.after.limit}
                </span>
              </div>
            </div>
          </div>

          {/* Policy Engine Card */}
          <div
            className="rounded-xl p-4"
            style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 size={16} style={{ color: '#ff4444' }} />
              <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Policy Engine
              </span>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span style={{ color: 'var(--text-muted)' }}>Score</span>
                  <span style={{ color: '#ff4444', fontWeight: 500 }}>{SCENARIO.threat.riskScore}</span>
                </div>
                <div className="demo-risk-bar" style={{ height: '6px' }}>
                  <div
                    className="demo-risk-bar-fill"
                    style={{ width: `${SCENARIO.threat.riskScore}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span style={{ color: 'var(--text-muted)' }}>Signal</span>
                <span
                  style={{
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-jetbrains-mono)',
                    fontSize: '10px',
                  }}
                >
                  ADDRESS_POISONING
                </span>
              </div>

              <div className="pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  Rule: <span style={{ color: '#ff9944' }}>≥90 → AUTO</span>
                </span>
              </div>
            </div>
          </div>

          {/* Audit Trail Card */}
          <div
            className="rounded-xl p-4 md:p-4 min-w-0"
            style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <FileText size={16} style={{ color: '#22cc66' }} />
              <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Audit Trail
              </span>
            </div>

            <div
              className="space-y-2 overflow-x-auto"
              style={{ fontFamily: 'var(--font-jetbrains-mono)', fontSize: '10px' }}
            >
              {AUDIT_TRAIL.map((event, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 transition-opacity duration-300 whitespace-nowrap"
                  style={{ opacity: i < visibleEvents ? 1 : 0.3 }}
                >
                  <span style={{ color: 'rgba(255,255,255,0.3)', flexShrink: 0 }}>{event.time}</span>
                  <span style={{ color: 'var(--text-muted)' }}>{event.event}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
