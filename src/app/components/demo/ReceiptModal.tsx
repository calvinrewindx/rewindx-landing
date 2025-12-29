'use client';

import { X, Copy, Check } from 'lucide-react';
import { SCENARIO } from '@/data/scenario';
import { useState } from 'react';

interface ReceiptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const receiptText = `REWIND RECEIPT
═══════════════

Transfer #${SCENARIO.transfer.id} → Request #${SCENARIO.rewind.requestId}
Status: ${SCENARIO.result.statusBefore} → ${SCENARIO.result.statusAfter}

─────────────────────────────────────────

AMOUNTS
Sent:           ${SCENARIO.transfer.amount.toFixed(2)} USDC
Protected:      ${SCENARIO.transfer.protectedAmount.toFixed(2)} USDC (after ${SCENARIO.transfer.transferFeePercent}% transfer fee)
Recovered:      ${SCENARIO.result.recovered.toFixed(2)} USDC (after ${SCENARIO.result.rewindFeePercent}% rewind fee)

FEES
Transfer fee:   ${SCENARIO.transfer.transferFee.toFixed(2)} USDC (${SCENARIO.transfer.transferFeePercent}%)
Rewind fee:     ${SCENARIO.result.rewindFee.toFixed(2)} USDC (${SCENARIO.result.rewindFeePercent}%)
Total:          ${SCENARIO.result.totalFees.toFixed(2)} USDC (${SCENARIO.result.totalFeePercent}%)

─────────────────────────────────────────

RISK ASSESSMENT
Score:          ${SCENARIO.threat.riskScore} (CRITICAL)
Signal:         ${SCENARIO.threat.type}
Decision:       AUTO_REWIND

PROOF
Fragment NFT:   #${SCENARIO.nft.tokenId}
TX Hash:        ${SCENARIO.rewind.txHash}

─────────────────────────────────────────

(TX hash shown is from the recorded demo run.)
`;

const jsonData = {
  transfer: {
    id: SCENARIO.transfer.id,
    sender: SCENARIO.transfer.sender,
    recipient: SCENARIO.transfer.recipient,
    amount: SCENARIO.transfer.amount,
    token: SCENARIO.transfer.token,
    status: SCENARIO.result.statusAfter,
    txHash: SCENARIO.transfer.txHash,
  },
  rewind: {
    requestId: SCENARIO.rewind.requestId,
    reason: SCENARIO.rewind.reason,
    txHash: SCENARIO.rewind.txHash,
  },
  fees: {
    transfer: SCENARIO.transfer.transferFee,
    rewind: SCENARIO.result.rewindFee,
    total: SCENARIO.result.totalFees,
    percentage: SCENARIO.result.totalFeePercent,
  },
  risk: {
    score: SCENARIO.threat.riskScore,
    type: SCENARIO.threat.type,
    decision: 'AUTO_REWIND',
  },
  nft: {
    tokenId: SCENARIO.nft.tokenId,
    tier: SCENARIO.nft.tier,
    rewindCount: SCENARIO.nft.rewindCount,
    totalProtected: SCENARIO.nft.totalProtected,
  },
};

export default function ReceiptModal({ isOpen, onClose }: ReceiptModalProps) {
  const [showJson, setShowJson] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = async () => {
    const content = showJson ? JSON.stringify(jsonData, null, 2) : receiptText;
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 backdrop-blur-sm"
        style={{ background: 'rgba(0,0,0,0.8)' }}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl"
        style={{
          background: 'var(--bg-primary)',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between p-4"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
        >
          <h2
            className="text-lg font-semibold"
            style={{ color: '#fff', fontFamily: 'var(--font-space-grotesk)' }}
          >
            Rewind Receipt
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="demo-btn-control"
              style={{ padding: '0.375rem 0.75rem', fontSize: '0.875rem' }}
            >
              {copied ? (
                <>
                  <Check size={14} style={{ color: '#22cc66' }} />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg transition-colors"
              style={{ background: 'transparent' }}
            >
              <X size={18} style={{ color: 'var(--text-muted)' }} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto max-h-[60vh]">
          {showJson ? (
            <pre
              className="whitespace-pre-wrap rounded-xl p-4"
              style={{
                background: 'rgba(0,0,0,0.3)',
                fontFamily: 'var(--font-jetbrains-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-secondary)',
              }}
            >
              {JSON.stringify(jsonData, null, 2)}
            </pre>
          ) : (
            <pre
              className="whitespace-pre-wrap"
              style={{
                fontFamily: 'var(--font-jetbrains-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-secondary)',
              }}
            >
              {receiptText}
            </pre>
          )}
        </div>

        {/* Footer */}
        <div className="p-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <button
            onClick={() => setShowJson(!showJson)}
            className="text-xs transition-colors hover:opacity-80"
            style={{ color: 'var(--text-muted)' }}
          >
            {showJson ? '← View Text Receipt' : 'View Raw JSON →'}
          </button>
        </div>
      </div>
    </div>
  );
}
