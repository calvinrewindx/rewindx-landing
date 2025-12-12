# Rewind X — Architecture Overview

Deterministic, non-custodial infrastructure for reversible ERC-20 transfers.

*Deterministic means: all state transitions follow fixed on-chain rules — no human discretion and no off-chain decisioning.*

---

## System Flow

```
┌─────────────────┐
│   User Wallet   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Transfer Layer │  ← Protected transfer creation, claims, rewind intents
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   State Ledger  │  ← Single source of truth for transfer lifecycle
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Risk & Safety  │  ← Deterministic gates: limits, cooldowns, integrity checks
└────────┬────────┘
         │
    ┌────┴────┐
    ▼         ▼
┌───────┐ ┌───────┐
│Rewind │ │Final- │
│       │ │ize    │
└───┬───┘ └───────┘
    │
    ▼
┌─────────────────┐
│  Proof Layer    │  ← On-chain rewind attestation
└─────────────────┘
```

All user-initiated state changes pass through a single canonical entry layer. Internal modules are strictly composable and cannot be invoked directly by users.

---

## Module Groups

| Layer | Function |
|-------|----------|
| **Transfer Interface** | Protected transfer creation, claiming, rewind execution. Supports any ERC-20. |
| **State Ledger** | Canonical transfer states and lifecycle transitions. |
| **Risk & Enforcement** | Deterministic limits, cooldowns, rule-based integrity checks and rate limits. No discretionary overrides. |
| **Fees & Accounting** | Bounded fee computation and revenue distribution. |
| **Proof & Utility** | On-chain rewind attestation. Tier-based parameter constraints. |
| **Final Rail** | Optional DEX-compatible wrapper. Transfers on this rail are **irreversible by design** to preserve DeFi composability and market finality. |

---

## Execution Rails Overview

Rewind X introduces a protected execution window for operational transfers, while preserving strict finality for market and DeFi-critical flows.

```
                    ERC-20 Transfer Flow

            ┌──────────────────────────┐
            │        User Wallet       │
            └────────────┬─────────────┘
                         │
        ┌────────────────┴────────────────┐
        │                                 │
        ▼                                 ▼

┌───────────────────────┐      ┌────────────────────────┐
│    Protected Rail     │      │       Final Rail       │
│   (Rewind X Layer)    │      │    (DEX / Trading)     │
├───────────────────────┤      ├────────────────────────┤
│ • Time-bounded window │      │ • Immediate finality   │
│ • Sender can rewind   │      │ • No rewind possible   │
│ • Mistake mitigation  │      │ • Full composability   │
│ • Proof on rewind     │      │ • Liquidity & trading  │
└───────────────────────┘      └────────────────────────┘
```

Users choose the appropriate rail based on use case. Safety-critical transfers use the Protected Rail. Trading and DeFi interactions use the Final Rail.

---

## System Invariants

- A transfer resolves to **finalized OR rewound** — never both, never neither
- Only the **original sender** can trigger a rewind
- After window expiry, finalization is **irreversible**
- No privileged actor can redirect or seize user balances
- Safety mechanisms **restrict actions** — they do not move funds
- Proof tokens are minted **only after successful rewind execution**

---

## Control Surface

Trust-minimized administrative controls:

| Control | Scope | Capability |
|---------|-------|------------|
| Emergency pause | State transitions | Halts new operations; cannot move balances |
| Fee parameters | Accounting | Bounded ranges; cannot exceed protocol caps |
| Module upgrades | Non-core paths | Timelock-governed; core ledger is designed to remain immutable |

No admin path exists to transfer, redirect, or freeze user funds.

Paused state preserves all balances in-place; resolution resumes from the same state once unpaused.

---

## Verification Status

- ~20 coordinated contracts
- Fork-tested against mainnet-equivalent state
- Public deployment intentionally limited pending third-party audit

A deeper walkthrough (design + threat model) is available on request for qualified reviewers.

Audit process and deployment roadmap available upon request.

---

*This document describes architecture intent and invariants. It does not represent a production deployment.*
