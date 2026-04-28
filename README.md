<div align="center">

```
██████╗ ███████╗██╗    ██╗██╗███╗   ██╗██████╗     ██╗  ██╗
██╔══██╗██╔════╝██║    ██║██║████╗  ██║██╔══██╗    ╚██╗██╔╝
██████╔╝█████╗  ██║ █╗ ██║██║██╔██╗ ██║██║  ██║     ╚███╔╝
██╔══██╗██╔══╝  ██║███╗██║██║██║╚██╗██║██║  ██║     ██╔██╗
██║  ██║███████╗╚███╔███╔╝██║██║ ╚████║██████╔╝    ██╔╝ ██╗
╚═╝  ╚═╝╚══════╝ ╚══╝╚══╝ ╚═╝╚═╝  ╚═══╝╚═════╝     ╚═╝  ╚═╝
```

<img src="public/logov2.png" alt="Rewind X" width="360" />

### Protected ERC-20 Transfers with Time-Bounded Reversibility

![Version](https://img.shields.io/badge/Version-1.0_Origin-cyan?style=for-the-badge)
[![Status](https://img.shields.io/badge/Status-Pre--Launch-blueviolet?style=for-the-badge)](https://rewindx.io)
[![Chain](https://img.shields.io/badge/Chain-BNB_Chain-F0B90B?style=for-the-badge&logo=binance&logoColor=white)](https://www.bnbchain.org)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

**A simple mistake should not mean permanent loss.**

[Website](https://rewindx.io) · [LinkedIn](https://www.linkedin.com/in/calvin-x-568767399) · [Contact](#-contact)

---

</div>

## The Problem

> Billions lost annually to irreversible transfer errors, address poisoning, and human mistakes on-chain.
>
> Once sent, it's gone. Until now.

<br>

## What is Rewind X?

Rewind X introduces a **non-custodial, time-bounded rewind window** for ERC-20 transfers.

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   SEND ──────► [ 3min-24h REWIND WINDOW ] ──────► SETTLE       │
│                        │                                        │
│                        ▼                                        │
│                    REWIND?                                      │
│                   ↺ Undo                                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

<br>

<div align="center">

| Feature | Description |
|:-------:|:------------|
| 🕐 | **3 min – 24h Window** — Time-bounded, on-chain rewind period |
| 🔐 | **Non-Custodial** — No admin keys can move funds |
| 🎖️ | **Rewind Proof NFT** — On-chain proof of successful rewinds |
| ⚙️ | **Modular Contracts** — Core ledger non-upgradeable |
| 💰 | **Flat Fees** — 1-3% protection + 1.5% rewind (if used) |
| 🪙 | **34 Tokens** — Chainlink-priced assets on BNB Chain |

</div>

<br>

## Trust Model

```
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║   ✓  No custody of user funds — ever                          ║
║   ✓  No admin keys can move or redirect balances              ║
║   ✓  All actions follow fixed on-chain rules                  ║
║   ✓  Emergency pause only — balances always remain in place   ║
║   ✓  Sender or recipient can complete settlement              ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

<br>

## Repository Contents

This repository contains the **landing page** for the Rewind X protocol (V1 Origin Edition).

```
rewindx-landing/
├── src/
│   └── app/
│       ├── components/        # React components
│       ├── lightpaper/        # Lightpaper page
│       ├── security/          # Security overview page
│       ├── contact/           # Contact page
│       ├── terms/             # Terms of Use
│       ├── privacy/           # Privacy Policy
│       └── ...
├── content/
│   └── Rewind_X_Lightpaper_PUBLIC_v1.4.md
├── public/
│   ├── logov2.png             # Primary logo
│   ├── og-image.png           # OpenGraph image
│   ├── tokens/                # Token icons
│   └── ...
└── next.config.ts             # Next.js configuration (static export)
```

> Smart contracts are **not** included in this repository.

<br>

## Contact

<div align="center">

| Channel | Address |
|:-------:|:--------|
| 💼 **Strategic & Partnerships** | [investors.rewindx@proton.me](mailto:investors.rewindx@proton.me) |
| 🔧 **Technical** | [contact.rewindx@proton.me](mailto:contact.rewindx@proton.me) |
| 🔗 **LinkedIn** | [Calvin](https://www.linkedin.com/in/calvin-x-568767399) |

</div>

<br>

---

<div align="center">

<sub>Rewind X — Non-custodial · Rule-based · On-chain</sub>

</div>
