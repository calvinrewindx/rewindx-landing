import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ReadingProgress from "../components/ReadingProgress";
import SystemFlowDiagram from "../components/architecture/SystemFlowDiagram";
import DelegationComparison from "../components/architecture/DelegationComparison";
import ExecutionRails from "../components/architecture/ExecutionRails";

const tocItems = [
  { id: "system-flow", label: "System Flow" },
  { id: "module-groups", label: "Module Groups" },
  { id: "delegation-layer", label: "Delegation Layer" },
  { id: "execution-rails", label: "Execution Rails" },
  { id: "system-invariants", label: "System Invariants" },
  { id: "control-surface", label: "Control Surface" },
  { id: "verification-status", label: "Verification Status" },
];

const moduleGroups = [
  { layer: "Transfer Interface", func: "Protected transfer creation, claiming, rewind execution. Supports any ERC-20." },
  { layer: "State Ledger", func: "Canonical transfer states and lifecycle transitions." },
  { layer: "Risk & Enforcement", func: "Deterministic limits, cooldowns, rule-based integrity checks. No discretionary overrides." },
  { layer: "Fees & Accounting", func: "Bounded fee computation and revenue distribution." },
  { layer: "Proof & Utility", func: "On-chain rewind attestation. Tier-based parameter constraints." },
  { layer: "Final Rail", func: "DEX-compatible wrapper. Transfers are irreversible to preserve DeFi composability." },
  { layer: "Delegation Layer", func: "Enables AI agents to execute rewinds on behalf of users (explicit activation required)." },
];

const invariants = [
  "A transfer resolves to finalized OR rewound — never both, never neither",
  "Only the original sender can trigger a rewind",
  "After window expiry, finalization is irreversible",
  "No privileged actor can redirect or seize user balances",
  "Safety mechanisms restrict actions — they do not move funds",
  "Proof tokens are minted only after successful rewind execution",
];

const controls = [
  { control: "Emergency pause", scope: "State transitions", capability: "Halts new operations; cannot move balances" },
  { control: "Fee parameters", scope: "Accounting", capability: "Bounded ranges; cannot exceed protocol caps" },
  { control: "Module upgrades", scope: "Non-core paths", capability: "Timelock-governed; core ledger is non-upgradeable" },
];

export default function ArchitecturePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 border-b border-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center h-16">
            <Link
              href="/"
              className="flex items-center gap-2 text-white/60 hover:text-cyan transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Reading Progress */}
      <ReadingProgress />

      {/* Content */}
      <div className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1
            className="text-4xl font-bold gradient-text mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Rewind X — Architecture Overview
          </h1>
          <p className="text-white/60 text-lg mb-4">
            Deterministic, non-custodial infrastructure for reversible ERC-20 transfers.
          </p>
          <p className="text-white/40 text-sm italic mb-10">
            Deterministic means: all state transitions follow fixed on-chain rules — no human discretion and no off-chain decisioning.
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

          {/* System Flow */}
          <section id="system-flow">
            <h2
              className="text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              System Flow
            </h2>
            <SystemFlowDiagram />
          </section>

          <hr className="border-white/10 my-10" />

          {/* Module Groups */}
          <section id="module-groups">
            <h2
              className="text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Module Groups
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-white/10 rounded-xl overflow-hidden">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-4 py-3 text-left text-white font-semibold border-b border-white/20">Layer</th>
                    <th className="px-4 py-3 text-left text-white font-semibold border-b border-white/20">Function</th>
                  </tr>
                </thead>
                <tbody>
                  {moduleGroups.map((row) => (
                    <tr key={row.layer} className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 text-white font-medium border-b border-white/5">{row.layer}</td>
                      <td className="px-4 py-3 text-white/60 border-b border-white/5">{row.func}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <hr className="border-white/10 my-10" />

          {/* Delegation Layer */}
          <section id="delegation-layer">
            <h2
              className="text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Delegation Layer
            </h2>
            <p className="text-white/60 mb-6">
              The protocol supports two permission models for rewind execution:
            </p>
            <DelegationComparison />
          </section>

          <hr className="border-white/10 my-10" />

          {/* Execution Rails */}
          <section id="execution-rails">
            <h2
              className="text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Execution Rails Overview
            </h2>
            <p className="text-white/60 mb-6">
              Rewind X introduces a protected execution window for operational transfers, while preserving strict finality for market and DeFi-critical flows.
            </p>
            <ExecutionRails />
          </section>

          <hr className="border-white/10 my-10" />

          {/* System Invariants */}
          <section id="system-invariants">
            <h2
              className="text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              System Invariants
            </h2>
            <ul className="space-y-3">
              {invariants.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-cyan text-lg">•</span>
                  <span className="text-white/60">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-white/10 my-10" />

          {/* Control Surface */}
          <section id="control-surface">
            <h2
              className="text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Control Surface
            </h2>
            <p className="text-white/60 mb-6">Trust-minimized administrative controls:</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-white/10 rounded-xl overflow-hidden">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-4 py-3 text-left text-white font-semibold border-b border-white/20">Control</th>
                    <th className="px-4 py-3 text-left text-white font-semibold border-b border-white/20">Scope</th>
                    <th className="px-4 py-3 text-left text-white font-semibold border-b border-white/20">Capability</th>
                  </tr>
                </thead>
                <tbody>
                  {controls.map((row) => (
                    <tr key={row.control} className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 text-white font-medium border-b border-white/5">{row.control}</td>
                      <td className="px-4 py-3 text-white/60 border-b border-white/5">{row.scope}</td>
                      <td className="px-4 py-3 text-white/60 border-b border-white/5">{row.capability}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
              <p className="text-emerald-400 text-sm font-medium mb-2">Security Guarantee</p>
              <p className="text-white/60 text-sm">
                No admin path exists to transfer, redirect, or freeze user funds. Paused state preserves all balances in-place; resolution resumes from the same state once unpaused.
              </p>
            </div>
          </section>

          <hr className="border-white/10 my-10" />

          {/* Verification Status */}
          <section id="verification-status">
            <h2
              className="text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Verification Status
            </h2>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-cyan text-lg">•</span>
                <span className="text-white/60">~20 coordinated contracts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan text-lg">•</span>
                <span className="text-white/60">Tested against production-equivalent EVM state</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan text-lg">•</span>
                <span className="text-white/60">Public deployment intentionally limited pending third-party audit</span>
              </li>
            </ul>
            <p className="text-white/50 text-sm mb-4">
              A deeper walkthrough (design + threat model) is available on request for qualified reviewers.
            </p>
            <p className="text-white/50 text-sm mb-6">
              Audit process and deployment roadmap available upon request.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-cyan/30 bg-cyan/10 text-cyan hover:bg-cyan/20 transition-colors text-sm font-medium"
            >
              Request Access
            </Link>
          </section>

          <hr className="border-white/10 my-10" />

          {/* Disclaimer */}
          <p className="text-white/30 text-sm italic text-center">
            This document describes architecture intent and invariants. It does not represent a production deployment.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/30 text-sm">
            Rewind X — Non-custodial · Deterministic · Fully On-Chain
          </p>
        </div>
      </footer>
    </main>
  );
}
