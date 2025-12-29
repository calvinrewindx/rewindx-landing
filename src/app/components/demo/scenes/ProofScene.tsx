'use client';

import { Award, FileText, BookOpen, Mail } from 'lucide-react';
import { SCENARIO } from '@/data/scenario';
import Link from 'next/link';

interface ProofSceneProps {
  onShowReceipt: () => void;
}

export default function ProofScene({ onShowReceipt }: ProofSceneProps) {
  return (
    <div className="text-center">
      {/* Header */}
      <div className="inline-flex items-center gap-3 mb-8">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center"
          style={{ background: 'rgba(34, 204, 102, 0.15)', border: '1px solid rgba(34, 204, 102, 0.3)' }}
        >
          <Award size={24} style={{ color: '#22cc66' }} />
        </div>
        <h2
          className="text-xl md:text-2xl font-semibold"
          style={{ fontFamily: 'var(--font-space-grotesk)', letterSpacing: '-0.02em', color: '#22cc66' }}
        >
          On-Chain Proof
        </h2>
      </div>

      {/* Card */}
      <div className="demo-inner-card max-w-lg mx-auto" style={{ borderColor: 'rgba(34, 204, 102, 0.2)' }}>
        {/* NFT Card with Holographic Effect */}
        <div className="demo-nft-card mb-6">
          <div className="relative z-10">
            <div className="text-xs uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Fragment NFT
            </div>
            <div
              className="text-4xl font-bold mb-6"
              style={{ color: '#fff' }}
            >
              #{SCENARIO.nft.tokenId}
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span style={{ color: 'rgba(255,255,255,0.5)' }}>Tier</span>
                <span style={{ color: 'rgba(255,255,255,0.8)' }}>{SCENARIO.nft.tier}</span>
              </div>
              <div className="flex items-center justify-between">
                <span style={{ color: 'rgba(255,255,255,0.5)' }}>Rewind Count</span>
                <span style={{ color: 'rgba(255,255,255,0.8)' }}>{SCENARIO.nft.rewindCount}</span>
              </div>
              <div className="flex items-center justify-between">
                <span style={{ color: 'rgba(255,255,255,0.5)' }}>Total Protected</span>
                <span style={{ color: '#22cc66', fontWeight: 600 }}>
                  {SCENARIO.nft.totalProtected.toLocaleString()} USDC
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
          On-chain proof of autonomous protection. Immutable record of AI safety action.
        </p>

        <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
          (TX hash shown is from the recorded demo run.)
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onShowReceipt}
            className="demo-btn-control justify-center"
            style={{ background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.15)', color: '#fff' }}
          >
            <FileText size={16} />
            <span>View Receipt</span>
          </button>

          <Link
            href="/lightpaper"
            className="demo-btn-control justify-center"
            style={{ background: 'rgba(34, 204, 102, 0.1)', borderColor: 'rgba(34, 204, 102, 0.3)', color: '#22cc66' }}
          >
            <BookOpen size={16} />
            <span>Read Docs</span>
          </Link>

          <Link
            href="/contact"
            className="demo-btn-control justify-center"
          >
            <Mail size={16} />
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
