import type { Metadata } from "next";
import Link from "next/link";
import SubpageHeader from "../components/SubpageHeader";
import ReadingProgress from "../components/ReadingProgress";
import { Shield, AlertTriangle, Lock, Mail, ChevronRight, Server, Database, Coins } from "lucide-react";

export const metadata: Metadata = {
  title: "Rewind X — Security",
  description: "Security overview, internal review status, architecture, and reporting for the Rewind X protocol.",
};

const tocItems = [
  { id: "overview", label: "Overview" },
  { id: "review-status", label: "Review Status" },
  { id: "architecture", label: "Architecture" },
  { id: "security-properties", label: "Security Properties" },
  { id: "exploit-patterns", label: "Attack Vectors" },
  { id: "known-limitations", label: "Known Limitations" },
  { id: "security-contact", label: "Security Contact" },
];

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHeader title="Security" />
      <ReadingProgress />

      <div className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Rewind X — <span className="text-cyan">Security</span>
          </h1>
          <p className="text-white/60 text-lg mb-4">
            Security overview, internal review status, and protocol architecture.
          </p>
          <p className="text-white/40 text-sm italic mb-10">
            This page describes the security posture of the V1 Origin Edition. It is not an audit report.
          </p>

          {/* Table of Contents */}
          <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02] mb-12">
            <h3 className="text-white font-semibold mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Contents
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {tocItems.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-2 text-white/50 hover:text-cyan transition-colors text-sm"
                >
                  <span className="text-cyan/50 font-mono text-xs">{String(index + 1).padStart(2, '0')}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <hr className="border-white/10 my-10" />

          {/* Overview */}
          <section id="overview">
            <h2
              className="text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Overview
            </h2>
            <div className="text-white/70 text-sm leading-relaxed space-y-4">
              <p>Rewind X is designed as a <span className="text-white font-medium">non-custodial</span> transaction safety layer. Funds are held by the smart contract under predefined rules. <span className="text-cyan">No individual or organization</span> can access or redirect these funds under normal protocol operation.</p>
              <p>All transfers follow <span className="text-cyan">deterministic rules</span> enforced by smart contracts. Reversibility is <span className="text-white font-medium">time-bounded</span> and strictly controlled by the original sender. The protocol enforces all rules on-chain without reliance on off-chain execution or discretionary control.</p>
            </div>
          </section>

          <hr className="border-white/10 my-10" />

          {/* Review Status */}
          <section id="review-status">
            <h2
              className="text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Review Status
            </h2>
            <div className="text-white/70 text-sm leading-relaxed space-y-4">
              <p>Rewind X V1 has undergone <span className="text-white font-medium">extensive internal security review</span> during development — from early prototypes to production-ready contracts.</p>
              <p>The review process combined:</p>
              <ul className="space-y-2 ml-1">
                {["Automated analysis", "Manual testing", "Fork-based mainnet simulation"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan/60" />
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold text-white mt-8 mb-3" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                Scope of Review
              </h3>
              <p>The review focused on <span className="text-cyan">realistic system risks</span> rather than theoretical vulnerabilities, including:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                {[
                  "Cross-contract state consistency",
                  "Accounting correctness",
                  "Time-window logic and boundaries",
                  "Economic abuse scenarios",
                  "Oracle failure handling",
                  "Access control and permissions",
                  "Replay and double execution",
                  "System invariants validation",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/[0.03] transition-colors">
                    <Shield className="w-3.5 h-3.5 text-cyan/50 flex-shrink-0" />
                    <span className="text-white/60 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl border border-cyan/15 bg-cyan/[0.03]">
                <p className="text-white/80 text-sm">
                  Issues identified during internal review were addressed throughout development and validation. The protocol is designed to <span className="text-cyan">minimize attack surface</span> through deterministic execution and constrained fund flows.
                </p>
              </div>

              {/* V1 Status */}
              <h3 className="text-lg font-semibold text-white mt-8 mb-3" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                V1 Status
              </h3>
              <div className="p-5 rounded-xl border border-cyan/15 bg-cyan/[0.02]">
                <p className="text-white/70 text-sm mb-2">
                  V1 is the initial public release. Internal review completed.
                </p>
                <p className="text-white/70 text-sm mb-2">
                  V1 has not been externally audited.
                </p>
                <p className="text-white/70 text-sm mb-3">
                  Future versions with broader scope are planned to undergo external audit before release.
                </p>
                <p className="text-white/60 text-sm font-medium pt-3 border-t border-white/5">
                  Rewind X is not insurance. It provides a time-limited rewind window, not a guarantee of fund recovery.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-white/10 my-10" />

          {/* Architecture */}
          <section id="architecture">
            <h2
              className="text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Architecture
            </h2>
            <div className="text-white/70 text-sm leading-relaxed space-y-4">
              <p>Rewind X uses a <span className="text-white font-medium">modular contract architecture</span>.</p>

              {/* Contract Cards */}
              <div className="space-y-3 my-4">
                {/* SCTM */}
                <div className="p-4 rounded-xl border border-cyan/20 bg-cyan/[0.03] group hover:border-cyan/30 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center flex-shrink-0">
                      <Server className="w-4 h-4 text-cyan" />
                    </div>
                    <div className="flex-1">
                      <p className="text-cyan font-semibold text-sm mb-1">SCTM</p>
                      <p className="text-white/40 text-[10px] font-mono mb-2">SecureConditionalTransferManager</p>
                      <p className="text-white/60 text-sm">Entry point. Holds user funds during the rewind window and handles execution: transfer creation, rewind, settlement.</p>
                    </div>
                  </div>
                </div>

                {/* CTM */}
                <div className="p-4 rounded-xl border border-violet/20 bg-violet/[0.03] group hover:border-violet/30 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-violet/10 border border-violet/20 flex items-center justify-center flex-shrink-0">
                      <Database className="w-4 h-4 text-violet" />
                    </div>
                    <div className="flex-1">
                      <p className="text-violet font-semibold text-sm mb-1">CTM</p>
                      <p className="text-white/40 text-[10px] font-mono mb-2">CentralTransferManager</p>
                      <p className="text-white/60 text-sm">Immutable state authority.</p>
                    </div>
                  </div>
                </div>

                {/* RevenueManager */}
                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] group hover:border-white/20 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <Coins className="w-4 h-4 text-white/70" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white/90 font-semibold text-sm mb-1">RevenueManager</p>
                      <p className="text-white/40 text-[10px] font-mono mb-2">Fee and revenue management</p>
                      <p className="text-white/60 text-sm">
                        Handles protocol fee collection from SCTM, distribution to treasury, and on-chain revenue tracking. Distribution parameters are admin-configurable within hard-coded bounds. Emergency recovery is timelock-protected (2-day delay) and scoped to protocol revenue only — user funds are held in SCTM and cannot be accessed by this contract.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p>These three core contracts (SCTM, CTM, RevenueManager) will be verified on BSCScan at mainnet deployment for public inspection of the core execution logic.</p>
              <p>Supporting modules are intended to be deployed without public verification. Smart contracts are released under the <span className="text-white font-medium">BUSL-1.1</span> license. Frontend and supporting code may use different licenses.</p>
              <p>All user-initiated state changes pass through a <span className="text-cyan">single canonical entry layer</span>. Internal modules are not directly accessible by users.</p>
            </div>
          </section>

          <hr className="border-white/10 my-10" />

          {/* Security Properties */}
          <section id="security-properties">
            <h2
              className="text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Security Properties
            </h2>
            <div className="text-white/70 text-sm leading-relaxed space-y-4">
              <p>The system is designed around the following guarantees:</p>
              <div className="space-y-2 mt-4">
                {[
                  "Transfers resolve to either finalized or rewound — never both",
                  "Only the original sender can initiate a rewind (V1 configuration)",
                  "After the window expires, reversibility is no longer possible",
                  "No privileged actor can redirect or seize user funds",
                  "Safety mechanisms restrict actions but never move funds",
                  "Execution paths are on-chain verifiable",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-2.5 rounded-lg border border-white/5 bg-white/[0.02] hover:border-cyan/20 hover:bg-cyan/[0.02] transition-all">
                    <Lock className="w-4 h-4 text-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Admin Function Limits */}
              <h3 className="text-lg font-semibold text-white mt-8 mb-3" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                Admin Function Limits
              </h3>
              <p>Administrative functions exist for protocol maintenance but are <span className="text-cyan">strictly bounded</span>:</p>
              <ul className="space-y-3 mt-3">
                {[
                  { title: "Treasury wallet updates", desc: "change destination of protocol fee revenue only — cannot access user funds." },
                  { title: "Rewind fee tier", desc: "hard-capped at 15% maximum, enforced at contract level." },
                  { title: "Emergency pause", desc: "blocks new transfers, preserves all existing balances in place." },
                  { title: "Token fee policy (DENY)", desc: "can block new protected transfers for specific tokens, cannot affect transfers already in active windows." },
                  { title: "No window extension", desc: "protected transfer windows are fixed at creation. No administrative function can prolong or shorten an active transfer's rewind period." },
                  { title: "Emergency recovery", desc: "2-day timelock, scoped to protocol fee revenue only — cannot touch user funds. Treasury wallet destination is admin-configurable; funds visible on-chain during 2-day delay window." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="w-1 h-1 rounded-full bg-cyan/60 mt-2 flex-shrink-0" />
                    <span className="text-white/60">
                      <span className="text-white/90 font-medium">{item.title}:</span> {item.desc}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 rounded-xl border border-cyan/20 bg-cyan/[0.03]">
                <p className="text-white/80 text-sm mb-3">User-held funds in protected transfers can only be moved through three paths:</p>
                <ol className="space-y-1 text-white/70 text-sm ml-1">
                  <li>1. <span className="font-mono text-cyan">claimTransfer</span> — by sender or recipient after the rewind window</li>
                  <li>2. <span className="font-mono text-cyan">returnFunds</span> — by sender during the active rewind window</li>
                  <li>3. <span className="font-mono text-cyan">batchClaimTransfers</span> — identical authorization to claim</li>
                </ol>
                <p className="text-white/60 text-xs mt-3 pt-3 border-t border-white/5">
                  No administrative function can redirect user funds to arbitrary addresses. Funds always return to the original sender or move to the originally specified recipient. No backdoor exists at the contract level. This property is enforced in the contract code, which will be verified on BSCScan at deployment for public inspection.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-white/10 my-10" />

          {/* Attack Vectors */}
          <section id="exploit-patterns">
            <h2
              className="text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Why Common DeFi Exploit Patterns Do Not Apply
            </h2>
            <div className="text-white/70 text-sm leading-relaxed space-y-4">
              <p>Rewind X has a <span className="text-white font-medium">fundamentally different risk profile</span> than typical DeFi protocols.</p>
              <p>The protocol operates with exactly <span className="text-cyan font-medium">two terminal fund outcomes</span>:</p>
              <div className="my-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl border border-cyan/20 bg-cyan/[0.03] text-center hover:border-cyan/40 transition-colors">
                  <p className="text-cyan font-semibold text-sm">1. Funds return to the sender</p>
                  <p className="text-white/40 text-xs mt-1">Rewind</p>
                </div>
                <div className="p-4 rounded-xl border border-violet/20 bg-violet/[0.03] text-center hover:border-violet/40 transition-colors">
                  <p className="text-violet font-semibold text-sm">2. Funds go to the recipient</p>
                  <p className="text-white/40 text-xs mt-1">Settlement</p>
                </div>
              </div>
              <p>There is <span className="text-white font-medium">no third outcome</span>. No shared liquidity to drain. No leverage to manipulate. No cross-protocol composability.</p>

              <h3 className="text-lg font-semibold text-white mt-8 mb-3" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                Common DeFi attack vectors not applicable
              </h3>
              <ul className="space-y-3 mt-3">
                {[
                  { title: "Flash loan + oracle manipulation", desc: "minimum oracle deviation thresholds make attacks economically infeasible. Required price movement (>1.5%) costs more than potential fee extraction." },
                  { title: "Reentrancy via external call", desc: "all state-changing functions use checks-effects-interactions pattern with NonReentrant guards." },
                  { title: "Lending math exploits", desc: "protocol contains no lending logic, no collateralization, no liquidation paths." },
                  { title: "Cross-chain bridge exploits", desc: "single-chain deployment on BNB Chain only. No bridge contracts, no cross-chain messaging." },
                  { title: "Admin key drain attacks", desc: "no withdraw-all function exists. Admin cannot access user funds at the contract level." },
                  { title: "Slippage manipulation", desc: "protocol contains no DEX pools, no swap logic." },
                  { title: "Sandwich attacks", desc: "protocol contains no DEX swap logic. Transfer atomicity prevents MEV extraction during settlement." },
                  { title: "Yield farming reward gaming", desc: "no yield distribution mechanism exists." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="w-1 h-1 rounded-full bg-cyan/60 mt-2 flex-shrink-0" />
                    <span className="text-white/60">
                      <span className="text-white/90 font-medium">{item.title}:</span> {item.desc}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-white/40 text-xs italic mt-6">
                This architectural simplicity is intentional. It reduces exposure to several common DeFi exploit patterns, while not eliminating the need for careful review of all logic paths and edge cases.
              </p>
            </div>
          </section>

          <hr className="border-white/10 my-10" />

          {/* Known Limitations */}
          <section id="known-limitations">
            <h2
              className="text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Known Limitations
            </h2>
            <div className="text-white/70 text-sm leading-relaxed space-y-4">
              <ul className="space-y-3">
                {[
                  "This is an internal review, not an independent external audit. External audit is planned for future versions with broader scope.",
                  "The protocol is released as an initial public validation release (V1). Some edge cases may only emerge under real-world usage.",
                  "Oracle dependency: Rewind execution requires Chainlink price feeds within configured staleness windows (1h for major tokens, 24h for low-volume tokens with longer Chainlink heartbeats). Standard transfer settlement continues with emergency price fallback if feeds become unreliable.",
                  "Native tokens (BNB) are not supported. Use the wrapped version (WBNB) for protected transfers.",
                  "Sender-only reversal: Only the original sender can trigger a rewind. If sender keys are compromised, the recipient cannot reverse on their behalf.",
                  "Token-specific edge cases: Tokens with transfer hooks, rebasing mechanics, or blacklist functions may behave unexpectedly. The supported token list has been selected to minimize these risks.",
                  "Gas overhead: Protected transfers consume significantly more gas than standard ERC-20 transfers due to oracle reads, fee calculation, and additional storage operations.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 p-3 rounded-lg border border-amber-500/10 bg-amber-500/[0.02] hover:border-amber-500/20 transition-colors">
                    <AlertTriangle className="w-4 h-4 text-amber-400/60 flex-shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <hr className="border-white/10 my-10" />

          {/* Security Contact */}
          <section id="security-contact">
            <h2
              className="text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Security Contact
            </h2>
            <div className="text-white/70 text-sm leading-relaxed space-y-4">
              <p>If you discover a potential security issue, please report it privately:</p>
              <div className="my-4 p-4 rounded-xl border border-cyan/20 bg-cyan/[0.03] hover:border-cyan/30 transition-colors">
                <a href="mailto:contact.rewindx@proton.me" className="flex items-center gap-3 text-cyan font-mono text-sm hover:text-cyan/80 transition-colors">
                  <Mail className="w-5 h-5" />
                  contact.rewindx@proton.me
                </a>
              </div>
              <p>Please report issues privately before any public disclosure to allow time for review.</p>
              <p className="text-white/60">Reports help improve the protocol and are appreciated.</p>
            </div>
          </section>

          <hr className="border-white/10 my-10" />

          {/* Security Philosophy */}
          <div className="p-6 rounded-2xl border border-cyan/20 bg-cyan/[0.03]">
            <blockquote className="text-white/80 text-lg italic mb-3" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              &ldquo;Not every loss is a hack. Many are execution mistakes.&rdquo;
            </blockquote>
            <p className="text-white/60 text-sm">
              Rewind X introduces bounded reversibility without breaking the core guarantees of on-chain settlement.
            </p>
            <p className="text-white/40 text-xs mt-2">
              Security is treated as an ongoing process — not a one-time event.
            </p>
          </div>

          {/* Continue to Lightpaper */}
          <div className="mt-10">
            <a
              href="/lightpaper"
              className="inline-flex items-center gap-2 text-white/40 hover:text-cyan transition-colors text-sm"
            >
              Read the Lightpaper
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/30 text-sm">
            Rewind X — Non-custodial · Rule-based · On-chain
          </p>
        </div>
      </footer>
    </main>
  );
}
