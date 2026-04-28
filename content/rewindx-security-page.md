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

### V1 Status

V1 is the initial public release. Internal review completed.

V1 has not been externally audited.

Future versions with broader scope are planned to undergo external audit before release.

Rewind X is not insurance. It provides a time-limited rewind window, not a guarantee of fund recovery.

---

## Architecture

Rewind X uses a modular contract architecture.

- **SCTM (SecureConditionalTransferManager)**
  Entry point. Holds user funds during the rewind window and handles execution: transfer creation, rewind, settlement.

- **CTM (CentralTransferManager)**
  Immutable state authority.

- **RevenueManager**
  Handles protocol fee collection from SCTM, distribution to treasury, and on-chain revenue tracking. Distribution parameters are admin-configurable within hard-coded bounds. Emergency recovery is timelock-protected (2-day delay) and scoped to protocol revenue only — user funds are held in SCTM and cannot be accessed by this contract.

These three core contracts (SCTM, CTM, RevenueManager) will be verified on BSCScan at mainnet deployment for public inspection of the core execution logic.

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

### Admin Function Limits

Administrative functions exist for protocol maintenance but are strictly bounded:

- **Treasury wallet updates:** change destination of protocol fee revenue only — cannot access user funds.
- **Rewind fee tier:** hard-capped at 15% maximum, enforced at contract level.
- **Emergency pause:** blocks new transfers, preserves all existing balances in place.
- **Token fee policy (DENY):** can block new protected transfers for specific tokens, cannot affect transfers already in active windows.
- **No window extension:** protected transfer windows are fixed at creation. No administrative function can prolong or shorten an active transfer's rewind period.
- **Emergency recovery:** 2-day timelock, scoped to protocol fee revenue only — cannot touch user funds. Treasury wallet destination is admin-configurable; funds visible on-chain during 2-day delay window.

User-held funds in protected transfers can only be moved through three paths:

1. `claimTransfer` — by sender or recipient after the rewind window
2. `returnFunds` — by sender during the active rewind window
3. `batchClaimTransfers` — identical authorization to claim

No administrative function can redirect user funds to arbitrary addresses. Funds always return to the original sender or move to the originally specified recipient. No backdoor exists at the contract level. This property is enforced in the contract code, which will be verified on BSCScan at deployment for public inspection.

---

## Why Common DeFi Exploit Patterns Do Not Apply

Rewind X has a fundamentally different risk profile than typical DeFi protocols.

The protocol operates with exactly two terminal fund outcomes:

1. Funds return to the sender (rewind)
2. Funds go to the recipient (settlement)

There is no third outcome. No shared liquidity to drain. No leverage to manipulate. No cross-protocol composability.

### Common DeFi attack vectors not applicable

- **Flash loan + oracle manipulation:** minimum oracle deviation thresholds make attacks economically infeasible. Required price movement (>1.5%) costs more than potential fee extraction.
- **Reentrancy via external call:** all state-changing functions use checks-effects-interactions pattern with NonReentrant guards.
- **Lending math exploits:** protocol contains no lending logic, no collateralization, no liquidation paths.
- **Cross-chain bridge exploits:** single-chain deployment on BNB Chain only. No bridge contracts, no cross-chain messaging.
- **Admin key drain attacks:** no withdraw-all function exists. Admin cannot access user funds at the contract level.
- **Slippage manipulation:** protocol contains no DEX pools, no swap logic.
- **Sandwich attacks:** protocol contains no DEX swap logic. Transfer atomicity prevents MEV extraction during settlement.
- **Yield farming reward gaming:** no yield distribution mechanism exists.

This architectural simplicity is intentional. It reduces exposure to several common DeFi exploit patterns, while not eliminating the need for careful review of all logic paths and edge cases.

---

## Known Limitations

- This is an internal review, not an independent external audit. External audit is planned for future versions with broader scope.

- The protocol is released as an initial public validation release (V1). Some edge cases may only emerge under real-world usage.

- **Oracle dependency:** Rewind execution requires fresh Chainlink price feeds within token-specific staleness windows configured to match each feed's heartbeat profile. If feeds become unreliable, rewinds are temporarily paused. Standard transfer settlement is not affected.

- **Native tokens (BNB)** are not supported. Use the wrapped version (WBNB) for protected transfers.

- **Sender-only reversal:** Only the original sender can trigger a rewind. If sender keys are compromised, the recipient cannot reverse on their behalf.

- **Token-specific edge cases:** Tokens with transfer hooks, rebasing mechanics, or blacklist functions may behave unexpectedly. The supported token list has been selected to minimize these risks.

- **Gas overhead:** Protected transfers consume significantly more gas than standard ERC-20 transfers due to oracle reads, fee calculation, and additional storage operations.

---

## Security Contact

If you discover a potential security issue, please report it privately:

**contact.rewindx@proton.me**

Please report issues privately before any public disclosure to allow time for review.

Reports help improve the protocol and are appreciated.

---

## Security Philosophy

> Not every loss is a hack. Many are execution mistakes.

Rewind X introduces bounded reversibility without breaking the core guarantees of on-chain settlement.

Security is treated as an ongoing process — not a one-time event.
