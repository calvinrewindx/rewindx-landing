import type { Metadata } from "next";
import Link from "next/link";
import SubpageHeader from "../components/SubpageHeader";
import ReadingProgress from "../components/ReadingProgress";
import { Shield, AlertTriangle, Lock, Mail, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Rewind X — Security",
  description: "Security overview, review status, and responsible disclosure for the Rewind X protocol.",
};

const tocItems = [
  { id: "overview", label: "Overview" },
  { id: "review-status", label: "Review Status" },
  { id: "architecture", label: "Architecture" },
  { id: "security-properties", label: "Security Properties" },
  { id: "exploit-patterns", label: "DeFi Exploit Patterns" },
  { id: "known-limitations", label: "Known Limitations" },
  { id: "responsible-disclosure", label: "Responsible Disclosure" },
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
            Security overview, internal review status, and responsible disclosure.
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
              <p>Rewind X is designed as a <span className="text-white font-medium">non-custodial</span> transaction safety layer. Funds are held by the smart contract under predefined rules. <span className="text-cyan">No individual or organization</span> can access or redirect these funds.</p>
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
              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border border-cyan/20 bg-cyan/[0.03] group hover:border-cyan/30 transition-colors">
                  <p className="text-cyan font-semibold text-sm mb-1">SCTM</p>
                  <p className="text-white/40 text-[10px] font-mono mb-2">SecureConditionalTransferManager</p>
                  <p className="text-white/60 text-sm">Settlement and execution layer</p>
                </div>
                <div className="p-4 rounded-xl border border-violet/20 bg-violet/[0.03] group hover:border-violet/30 transition-colors">
                  <p className="text-violet font-semibold text-sm mb-1">CTM</p>
                  <p className="text-white/40 text-[10px] font-mono mb-2">CentralTransferManager</p>
                  <p className="text-white/60 text-sm">Immutable state authority</p>
                </div>
              </div>
              <p>These contracts will be verified on BSCScan at mainnet deployment for public inspection of the core execution logic.</p>
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
            </div>
          </section>

          <hr className="border-white/10 my-10" />

          {/* DeFi Exploit Patterns */}
          <section id="exploit-patterns">
            <h2
              className="text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Why Common DeFi Exploit Patterns Do Not Apply
            </h2>
            <div className="text-white/70 text-sm leading-relaxed space-y-4">
              <p>Rewind X has a <span className="text-white font-medium">fundamentally different risk profile</span> than typical DeFi protocols.</p>
              <p>Most DeFi exploits target composable systems involving flash loans, liquidity pools, leveraged positions, oracle-dependent pricing, or cross-protocol interactions.</p>
              <p>Rewind X does not rely on these mechanisms. The protocol operates with exactly <span className="text-cyan font-medium">two terminal fund outcomes</span>:</p>
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
              <p>Fund movement is deterministic. Where price adjustments are applied, they follow predefined and bounded rules.</p>
              <p>Administrative controls are restricted to <span className="text-cyan">pausing system operations</span> and cannot move, redirect, or access user funds.</p>
              <p className="text-white/40 text-xs italic mt-4">
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
              <div className="space-y-2">
                {[
                  "This is an internal review, not an independent external audit",
                  "The protocol is released as an early public version (V1)",
                  "Some edge cases may only emerge under real-world usage",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-2.5 rounded-lg border border-amber-500/10 bg-amber-500/[0.02]">
                    <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 mb-2 text-white/80 font-medium">Known token-related edge cases include:</p>
              <div className="space-y-2">
                {[
                  "Fee-on-transfer behavior",
                  "Blacklistable tokens (USDC, USDT)",
                  "Pausable tokens",
                  "Non-standard decimals",
                  "Non-standard ERC-20 return behavior",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-2.5 rounded-lg border border-amber-500/10 bg-amber-500/[0.02] hover:border-amber-500/20 transition-colors">
                    <AlertTriangle className="w-4 h-4 text-amber-400/60 flex-shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/50 text-sm mt-3">These cases can affect settlement, rewind execution, or accounting behavior.</p>
              <p className="mt-4">An independent external audit is planned as the protocol matures.</p>
            </div>
          </section>

          <hr className="border-white/10 my-10" />

          {/* Responsible Disclosure */}
          <section id="responsible-disclosure">
            <h2
              className="text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Responsible Disclosure
            </h2>
            <div className="text-white/70 text-sm leading-relaxed space-y-4">
              <p>If you discover a potential vulnerability, please report it privately to:</p>
              <div className="my-4 p-4 rounded-xl border border-cyan/20 bg-cyan/[0.03] hover:border-cyan/30 transition-colors">
                <a href="mailto:contact.rewindx@proton.me" className="flex items-center gap-3 text-cyan font-mono text-sm hover:text-cyan/80 transition-colors">
                  <Mail className="w-5 h-5" />
                  contact.rewindx@proton.me
                </a>
              </div>
              <p>We request that issues are reported privately before any public disclosure to allow time for review and mitigation.</p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-cyan/15 bg-cyan/[0.02] hover:border-cyan/25 transition-colors">
                  <p className="text-cyan text-sm font-semibold mb-2">Scope</p>
                  <p className="text-white/60 text-sm">Protocol interactions via SCTM and CTM (core contracts; BSCScan verification will be added after deployment).</p>
                </div>
                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors">
                  <p className="text-white/80 text-sm font-semibold mb-2">Out of scope</p>
                  <p className="text-white/50 text-sm">Frontend, UI, gas optimization.</p>
                </div>
              </div>

              <p className="mt-4">Please include:</p>
              <ul className="space-y-2 ml-1">
                {["Description of the issue", "Steps to reproduce", "Potential impact (if known)"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan/60" />
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
              <p>Reports will be reviewed. Valid findings will be acknowledged.</p>
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

          {/* Back to Lightpaper */}
          <div className="mt-10">
            <Link
              href="/lightpaper"
              className="inline-flex items-center gap-2 text-white/40 hover:text-cyan transition-colors text-sm"
            >
              <ChevronRight className="w-4 h-4 rotate-180" />
              Back to Lightpaper
            </Link>
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
