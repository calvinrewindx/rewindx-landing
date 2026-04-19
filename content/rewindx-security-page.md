# Security

## Overview

Rewind X is designed as a non-custodial transaction safety layer. Funds are held by the smart contract under predefined rules. No individual or organization can access or redirect these funds under normal protocol operation.

All transfers follow deterministic rules enforced by smart contracts. Reversibility is time-bounded and strictly controlled by the original sender. The protocol enforces all rules on-chain without reliance on off-chain execution or discretionary control.

---

## Review Status

Rewind X V1 has undergone extensive internal security review during development — from early prototypes to production-ready contracts.

The review process combined:
- Automated analysis
- Manual testing
- Fork-based mainnet simulation

### Scope of Review

The review focused on realistic system risks rather than theoretical vulnerabilities, including:

- Cross-contract state consistency
- Accounting correctness
- Time-window logic and boundaries
- Economic abuse scenarios
- Oracle failure handling
- Access control and permissions
- Replay and double execution
- System invariants validation

### Result

Issues identified during internal review were addressed throughout development and validation. The protocol is designed to minimize attack surface through deterministic execution and constrained fund flows.

---

## Architecture

Rewind X uses a modular contract architecture.

- **SCTM (SecureConditionalTransferManager)**
  Settlement and execution layer

- **CTM (CentralTransferManager)**
  Immutable state authority

These contracts will be verified on BSCScan at mainnet deployment for public inspection of the core execution logic.

Supporting modules are intended to be deployed without public verification. Smart contracts are released under the BUSL-1.1 license. Frontend and supporting code may use different licenses.

All user-initiated state changes pass through a single canonical entry layer. Internal modules are not directly accessible by users.

---

## Security Properties

The system is designed around the following guarantees:

- Transfers resolve to either finalized or rewound — never both
- Only the original sender can initiate a rewind (V1 configuration)
- After the window expires, reversibility is no longer possible
- No privileged actor can redirect or seize user funds
- Safety mechanisms restrict actions but never move funds
- Execution paths are on-chain verifiable

---

## Why Common DeFi Exploit Patterns Do Not Apply

Rewind X has a fundamentally different risk profile than typical DeFi protocols.

Most DeFi exploits target composable systems involving flash loans, liquidity pools, leveraged positions, oracle-dependent pricing, or cross-protocol interactions.

Rewind X does not rely on these mechanisms. The protocol operates with exactly two terminal fund outcomes:

1. Funds return to the sender (rewind)
2. Funds go to the recipient (settlement)

There is no third outcome. No shared liquidity to drain. No leverage to manipulate. No cross-protocol composability.

Fund movement is deterministic. Where price adjustments are applied, they follow predefined and bounded rules.

Administrative controls are restricted to pausing system operations and cannot move, redirect, or access user funds.

This architectural simplicity is intentional. It reduces exposure to several common DeFi exploit patterns, while not eliminating the need for careful review of all logic paths and edge cases.

---

## Known Limitations

- This is an internal review, not an independent external audit
- The protocol is released as an initial public version (V1)
- Some edge cases may only emerge under real-world usage

Known token-related edge cases include:
- Fee-on-transfer behavior
- Blacklistable tokens (USDC, USDT)
- Pausable tokens
- Non-standard decimals
- Non-standard ERC-20 return behavior

These cases can affect settlement, rewind execution, or accounting behavior.

An independent external audit is planned as the protocol matures.

---

## Responsible Disclosure

If you discover a potential vulnerability, please report it privately to:

**contact.rewindx@proton.me**

We request that issues are reported privately before any public disclosure to allow time for review and mitigation.

**Scope:** Protocol interactions via SCTM and CTM (core contracts; BSCScan verification will be added after deployment).

**Out of scope:** Frontend, UI, gas optimization.

Please include:
- Description of the issue
- Steps to reproduce
- Potential impact (if known)

Reports will be reviewed. Valid findings will be acknowledged.

---

## Security Philosophy

> Not every loss is a hack. Many are execution mistakes.

The protocol introduces bounded reversibility without breaking the core guarantees of on-chain settlement.

Security is treated as an ongoing process — not a one-time event.
