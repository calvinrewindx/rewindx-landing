/**
 * Demo Scenario Data
 *
 * IMPORTANT: Fees shown are example parameters for replay purposes.
 * Actual enforcement is on-chain with configurable parameters.
 * TX hashes and IDs are from a recorded demo run.
 */

// =============================================================================
// BASE DATA (from recorded Claude Desktop session)
// =============================================================================

export const SCENARIO = {
  wallet: {
    address: '0x7099...79C8',
    balanceBefore: 6266.80,
    balanceAfter: 6266.80,
  },

  user: {
    tier: 'Base',
    tierLabel: 'Base (No NFT)',
    feeDiscount: 0,
    dailyLimit: 5,
    rewindWindow: 24,
    cooldown: 60,
  },

  transfer: {
    id: 52,
    sender: '0x7099...79C8',
    recipient: '0x3C44...93bD',
    amount: 1000.00,
    token: 'USDC',
    transferFee: 20.00,
    transferFeePercent: 2.0,
    protectedAmount: 980.00,
    windowHours: 24,
    txHash: '0xa0e6...eac4',
    status: 'PENDING',
  },

  threat: {
    type: 'ADDRESS_POISONING',
    riskScore: 95,
    similarity: 98,
    knownContact: {
      address: '0x3C44...93BC',
      label: 'Alice',
    },
    suspiciousAddress: '0x3C44...93bD',
    difference: 'Last char: C → D',
  },

  rewind: {
    requestId: 29,
    transferId: 52,
    reason: 'Address poisoning detected',
    holdSkipped: true,
    txHash: '0x3c56...b75c',
  },

  result: {
    statusBefore: 'PENDING',
    statusAfter: 'REWOUND',
    protectedAmount: 980.00,
    rewindFee: 14.70,
    rewindFeePercent: 1.5,
    recovered: 965.30,
    totalFees: 34.70,
    totalFeePercent: 3.5,
  },

  nft: {
    tokenId: 6,
    tier: 'Fragment Proof',
    rewindCount: 16,
    totalProtected: 15239.00,
  },

  limits: {
    before: { used: 0, remaining: 5, limit: 5 },
    after: { used: 1, remaining: 4, limit: 5 },
  },
};

// =============================================================================
// 8 SCENES (Timeline for Demo Player)
// =============================================================================

export interface Scene {
  id: number;
  name: string;
  duration: number;
  isKeyMoment: boolean;
  headline: string;
  narration: string;
  terminalTitle: string;
}

// Total duration: 4+3+5+4+3+5+6 = 30 seconds (Step 1 is intro, skipped on autoplay)
export const SCENES: Scene[] = [
  {
    id: 1,
    name: 'SETUP',
    duration: 0,
    isKeyMoment: true,
    headline: 'Wallet Ready',
    narration: `${SCENARIO.wallet.balanceBefore.toLocaleString()} USDC available. ${SCENARIO.limits.before.remaining} daily rewinds.`,
    terminalTitle: 'WALLET',
  },
  {
    id: 2,
    name: 'TRANSFER',
    duration: 4,
    isKeyMoment: false,
    headline: 'Protected Transfer Created',
    narration: `1,000 USDC → ${SCENARIO.transfer.recipient} · 24h Rewind Window`,
    terminalTitle: 'DONE',
  },
  {
    id: 3,
    name: 'SCAN',
    duration: 3,
    isKeyMoment: false,
    headline: 'Threat Analysis',
    narration: 'Analyzing recipient address against known threat patterns...',
    terminalTitle: 'SCAN',
  },
  {
    id: 4,
    name: 'ALARM',
    duration: 5,
    isKeyMoment: true,
    headline: 'Address Poisoning Detected',
    narration: `Risk Score ${SCENARIO.threat.riskScore} · ${SCENARIO.threat.similarity}% match to "${SCENARIO.threat.knownContact.label}" · Difference: C → D`,
    terminalTitle: 'ALARM',
  },
  {
    id: 5,
    name: 'AGENT',
    duration: 4,
    isKeyMoment: true,
    headline: 'Autonomous Decision',
    narration: 'Policy threshold exceeded · Agent initiates autonomous rewind',
    terminalTitle: 'AGENT',
  },
  {
    id: 6,
    name: 'REWIND',
    duration: 3,
    isKeyMoment: false,
    headline: 'Rewind Executing',
    narration: `Request #${SCENARIO.rewind.requestId} · Security hold skipped · Executing on-chain`,
    terminalTitle: 'REWIND',
  },
  {
    id: 7,
    name: 'VERIFIED',
    duration: 5,
    isKeyMoment: true,
    headline: 'Funds Recovered',
    narration: `PENDING → REWOUND · ${SCENARIO.result.recovered.toFixed(2)} USDC recovered · ${SCENARIO.result.totalFeePercent}% fees`,
    terminalTitle: 'SAVED',
  },
  {
    id: 8,
    name: 'PROOF',
    duration: 6,
    isKeyMoment: true,
    headline: 'On-Chain Proof',
    narration: `Fragment NFT #${SCENARIO.nft.tokenId} · ${SCENARIO.nft.rewindCount} rewinds · ${SCENARIO.nft.totalProtected.toLocaleString()} USDC protected`,
    terminalTitle: 'NFT',
  },
];

// =============================================================================
// TERMINAL ASCII BLOCKS (for Terminal Toggle view)
// =============================================================================

export const TERMINAL_BLOCKS: Record<string, string> = {
  WALLET: `╔════════════════════════════════════════════════╗
║               >>> WALLET <<<                   ║
╠════════════════════════════════════════════════╣
║   Address:   0x7099...79C8                     ║
║   USDC:      6,266.80 available                ║
║   Status:    Ready                             ║
╚════════════════════════════════════════════════╝`,

  DONE: `╔════════════════════════════════════════════════╗
║                >>> DONE <<<                    ║
╠════════════════════════════════════════════════╣
║   PROTECTED TRANSFER CREATED                   ║
║   Transfer ID:    #52                          ║
║   Status:         PENDING (Protected)          ║
║   Rewind Window:  24 hours                     ║
║   TX Hash:        0xa0e6...eac4                ║
╚════════════════════════════════════════════════╝`,

  SCAN: `╔════════════════════════════════════════════════╗
║                >>> SCAN <<<                    ║
╠════════════════════════════════════════════════╣
║   THREAT ANALYSIS                              ║
║   [██████████████████████████████████] 100%    ║
║   > Checking burn addresses...                 ║
║   > Analyzing address patterns...              ║
║   > Comparing to known contacts...             ║
║   > Computing risk score...                    ║
╚════════════════════════════════════════════════╝`,

  ALARM: `╔════════════════════════════════════════════════╗
║               >>> ALARM <<<                    ║
╠════════════════════════════════════════════════╣
║   ADDRESS POISONING DETECTED                   ║
║   Risk Score: [████████████████████████] 95    ║
║   Similarity: 98% match to known contact       ║
║                                                ║
║   ┌──────────────────────────────────────────┐ ║
║   │ Contact (Alice):  0x3C44...93BC          │ ║
║   │ Suspicious:       0x3C44...93bD          │ ║
║   │                             ↑            │ ║
║   │         Last character differs: C → D    │ ║
║   └──────────────────────────────────────────┘ ║
║   Action: AUTO-REWIND INITIATED                ║
╚════════════════════════════════════════════════╝`,

  AGENT: `╔════════════════════════════════════════════════╗
║               >>> AGENT <<<                    ║
╠════════════════════════════════════════════════╣
║   AUTONOMOUS DECISION ENGINE                   ║
║                                                ║
║   IF risk_score >= 95                          ║
║   |-- AND threat_type == CRITICAL              ║
║   |   |-- AND status == PENDING                ║
║   |       |-- Initiate Autonomous Rewind       ║
║                                                ║
║   Agent authorized to protect funds            ║
║   from critical threats.                       ║
╚════════════════════════════════════════════════╝`,

  REWIND: `╔════════════════════════════════════════════════╗
║              >>> REWIND <<<                    ║
╠════════════════════════════════════════════════╣
║   AUTONOMOUS REWIND IN PROGRESS                ║
║                                                ║
║   Step 1: Request rewind.......... [DONE]      ║
║   Step 2: Security hold (30s)..... [SKIPPED]   ║
║   Step 3: Execute rewind.......... [DONE]      ║
║                                                ║
║   Request ID:    #29                           ║
║   Transfer ID:   #52                           ║
╚════════════════════════════════════════════════╝`,

  SAVED: `╔════════════════════════════════════════════════╗
║               >>> SAVED <<<                    ║
╠════════════════════════════════════════════════╣
║   FUNDS PROTECTED                              ║
║                                                ║
║   ┌─────────────────┐  ┌─────────────────┐     ║
║   │ WITHOUT REWIND  │  │ WITH REWIND X   │     ║
║   ├─────────────────┤  ├─────────────────┤     ║
║   │ 1,000 -> LOST   │  │ Sent: 1,000     │     ║
║   │ Permanent loss  │  │ Recovered: 965  │     ║
║   │ No recourse     │  │ Fees: 35 (3.5%) │     ║
║   └─────────────────┘  └─────────────────┘     ║
║                                                ║
║   ═══════════════════════════════════════      ║
║       NET PROTECTED: 965.30 USDC               ║
║   ═══════════════════════════════════════      ║
╚════════════════════════════════════════════════╝`,

  NFT: `╔════════════════════════════════════════════════╗
║                >>> NFT <<<                     ║
╠════════════════════════════════════════════════╣
║   FRAGMENT NFT - ON-CHAIN PROOF                ║
║                                                ║
║   Token ID:        #6                          ║
║   Tier:            Fragment Proof              ║
║   Rewind Count:    16                          ║
║   Total Protected: 15,239 USDC                 ║
║                                                ║
║   This NFT proves on-chain:                    ║
║   -> AI agent autonomously protected funds     ║
║   -> Immutable record of AI safety action      ║
╚════════════════════════════════════════════════╝`,
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

export function getScene(step: number): Scene {
  return SCENES[step - 1] || SCENES[0];
}

export function getTerminalBlock(scene: Scene): string {
  return TERMINAL_BLOCKS[scene.terminalTitle] || '';
}

// =============================================================================
// AUDIT TRAIL DATA
// =============================================================================

export const AUDIT_TRAIL = [
  { time: '12:00:01', event: 'TRANSFER_CREATED' },
  { time: '12:00:02', event: 'RISK_ASSESSMENT' },
  { time: '12:00:03', event: 'AUTO_REWIND_TRIGGERED' },
  { time: '12:00:04', event: 'REWIND_REQUESTED' },
  { time: '12:00:05', event: 'REWIND_EXECUTED' },
  { time: '12:00:06', event: 'PROOF_UPDATED' },
];
