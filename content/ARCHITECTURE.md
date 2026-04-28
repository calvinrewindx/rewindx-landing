# Rewind X — Architecture Overview

Deterministic, non-custodial infrastructure for time-bounded reversibility on ERC-20 transfers.

*Deterministic means: all state transitions follow fixed on-chain rules — no human discretion and no off-chain decisioning.*

This document describes the V1 Origin Edition architecture. Some features described in the Lightpaper as planned (e.g., expanded execution modes) are not part of V1.

---

## System Flow

```
+------------------+
|   User Wallet    |
+--------+---------+
         |
         v
+------------------+
|       SCTM       |  <- SecureConditionalTransferManager
|  (entry layer)   |     creation, rewind requests/execution,
+--------+---------+     early release, settlement claims
         |
         v
+------------------+
|       CTM        |  <- CentralTransferManager
| (held balances)  |     locks funds during the active rewind
+--------+---------+     window under deterministic rules
         |
    +----+----+
    v         v
+--------+ +--------+
| Rewind | | Settle |
+----+---+ +--------+
     |
     v
+------------------+
| Rewind Proof NFT |  <- Auto-mint on first rewind ≥ $10
| (proof index)    |     cumulative stats, transferable
+------------------+
```

User-initiated state changes pass through the SCTM entry layer. Internal modules are not invoked directly by users.

---

## Smart Contract Architecture

V1 deploys a coordinated set of contracts on BNB Chain. Three are core; the remainder are supporting modules and infrastructure.

### Core Contracts (verified on BSCScan at deployment)

| Contract | Function |
|----------|----------|
| **SCTM** (`SecureConditionalTransferManager`) | Entry point for Protected Transfers. Handles transfer creation, rewind requests and execution, early release, and settlement claims under deterministic on-chain rules. |
| **CTM** (`CentralTransferManager`) | Holds protected balances during the active rewind window. Funds are locked under deterministic contract logic — no privileged key can move them outside encoded rules. |
| **RevenueManager** | Routes protocol fees (Protected Transfer Fee, Rewind Execution Fee). Fee revenue is segregated from user funds; emergency recovery is scoped to fee revenue only and subject to a timelock. |

### Supporting Modules

| Layer | Function |
|-------|----------|
| **Oracle / Price Feeds** | Chainlink-backed price feeds for token-aware fee computation and rewind value normalization. |
| **Circuit Breaker** | On-chain mechanism that can pause specific protocol functions if anomalous conditions are detected. Operates by predefined parameters, not manual intervention. |
| **Rewind Proof NFT (ERC-721)** | Auto-mints on the sender's first valid rewind (≥ $10 USD). Tracks cumulative stats and the latest rewind metadata. Transferable proof object, not an identity badge. |
| **Tier System** | Auto-mints Genesis (3 valid rewinds) and Gatekeeper (10 valid rewinds) NFTs as fee-discount tiers. Threshold uses USD value at rewind time (Chainlink-priced). |
| **Fee Accounting** | Bounded fee computation per token category (1% preferred / up to 3% extended). Tier discounts apply to the protection fee component only. |

---

## Lifecycle of a Protected Transfer

Every Protected Transfer follows a four-stage deterministic lifecycle.

```
[1] Creation         [2] Rewind Window         [3] Resolution         [4] Proof
    SCTM validates       3 min – 24h               Sender Rewind          Mint or update
    inputs, deducts      Sender-only actions       OR Early Release       Rewind Proof NFT
    fee, registers       Window fixed at           OR Window Expiry       (rewinds only)
    transfer             creation                  → Settlement
```

- **Stage 1 — Creation:** SCTM validates the transfer, charges the Protection Fee (deducted or added on top, sender's choice), and registers the transfer in CTM.
- **Stage 2 — Rewind Window:** Sender retains exclusive reversal rights. Window duration is fixed at creation; no party can extend, shorten, or modify it.
- **Stage 3 — Resolution:** Sender rewinds (two-step: `requestRewind()` + `executeRewind()` after a 30-second initial hold), releases early, or the window expires and either party can settle.
- **Stage 4 — Rewind Proof NFT:** On the first successful rewind ≥ $10 USD, a Rewind Proof NFT auto-mints. Subsequent rewinds update cumulative stats.

---

## System Invariants

- A transfer resolves to **finalized OR rewound** — never both, never neither
- Only the **original sender** can trigger a rewind
- After window expiry, finalization is **irreversible**
- No privileged actor can redirect or seize user balances
- Safety mechanisms **restrict actions** — they do not move funds
- Rewind Proof NFTs are minted **only after successful rewind execution** with USD value above the minimum threshold

---

## Control Surface

Trust-minimized administrative controls:

| Control | Scope | Capability |
|---------|-------|------------|
| Emergency pause | State transitions | Halts new operations; cannot move balances |
| Fee parameters | Accounting | Bounded ranges; cannot exceed protocol caps |
| Module upgrades | Non-core paths | Timelock-governed; core contracts non-upgradeable |
| Treasury recovery | RevenueManager fees only | 2-day timelock, scoped to protocol fee revenue; cannot touch user funds |

No admin path exists to transfer, redirect, or freeze user funds. Paused state preserves all balances in-place; resolution resumes from the same state once unpaused.

---

## Verification Status

- **V1 Origin Edition** deployed on BNB Chain
- Tested against production-equivalent EVM state via fork-based simulation
- **Internal security review completed** (manual review, automated analysis, mainnet fork tests)
- **External audit planned for future versions** with broader scope and expanded use cases
- Core contracts (SCTM, CTM, RevenueManager) will be verified on BSCScan at mainnet deployment

A deeper walkthrough (design + threat model) is available on request for qualified reviewers via [contact.rewindx@proton.me](mailto:contact.rewindx@proton.me).

---

*This document describes V1 architecture intent and invariants. For the user-facing security overview, see the [/security](https://rewindx.io/security) page. For the protocol-level technical document, see the [Lightpaper](./Rewind_X_Lightpaper_PUBLIC_v1.4.md).*
