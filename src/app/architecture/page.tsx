import type { Metadata } from "next";
import Link from "next/link";
import SubpageHeader from "../components/SubpageHeader";

export const metadata: Metadata = {
  title: "Rewind X — Architecture Overview",
  description: "Technical overview of the Rewind X protocol, including lifecycle, security model, and system design.",
};
import ReadingProgress from "../components/ReadingProgress";
import SystemFlowDiagram from "../components/architecture/SystemFlowDiagram";
import ExecutionRails from "../components/architecture/ExecutionRails";

const tocItems = [
  { id: "system-flow", label: "System Flow" },
  { id: "modules", label: "Modules" },
  { id: "execution-model", label: "Execution Model" },
  { id: "invariants", label: "Invariants" },
  { id: "controls", label: "Controls" },
  { id: "status", label: "Status" },
];

const moduleGroups = [
  { layer: "Transfer Interface", func: "Protected transfer creation, claiming, rewind execution. Supports ERC-20 tokens on BNB Chain." },
  { layer: "State Ledger", func: "Single source of truth for all transfer states and lifecycle transitions." },
  { layer: "Risk & Enforcement", func: "Deterministic limits, cooldowns, rule-based integrity checks. No discretionary overrides." },
  { layer: "Fees & Accounting", func: "Bounded fee computation and revenue distribution." },
  { layer: "Proof & Utility", func: "On-chain rewind attestation (Rewind Proof NFT). Tier-based parameter constraints." },
];

const invariants = [
  "A transfer resolves to either finalized or rewound — never both, never neither",
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
      <SubpageHeader title="Architecture" />

      <ReadingProgress />

      <div className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Rewind X — <span className="text-cyan">Architecture</span>
          </h1>
          <p className="text-white/60 text-lg mb-4">
            Deterministic, non-custodial infrastructure for protected ERC-20 transfers.
          </p>
          <p className="text-white/40 text-sm italic mb-10">
            Deterministic means all state transitions follow fixed on-chain rules — no human decisions.
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

          {/* Modules */}
          <section id="modules">
            <h2
              className="text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Modules
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

          {/* Execution Model */}
          <section id="execution-model">
            <h2
              className="text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Execution Model
            </h2>
            <p className="text-white/60 mb-6">
              Rewind X introduces a protected execution window (3 min – 24h) for operational transfers. All state transitions are deterministic and on-chain.
            </p>
            <p className="text-white/40 text-sm italic mb-6">
              V1 supports the Protected Rail only. A Final Rail (DEX-compatible, irreversible) is planned for a future version.
            </p>
            <ExecutionRails />
          </section>

          <hr className="border-white/10 my-10" />

          {/* Invariants */}
          <section id="invariants">
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

          {/* Controls */}
          <section id="controls">
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

          {/* Status */}
          <section id="status">
            <h2
              className="text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              System Status
            </h2>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-cyan text-lg">•</span>
                <span className="text-white/60">17 coordinated contracts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan text-lg">•</span>
                <span className="text-white/60">Tested against production-equivalent EVM state</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan text-lg">•</span>
                <span className="text-white/60">Mainnet deployment pending final validation and audit</span>
              </li>
            </ul>
            <p className="text-white/50 text-sm mb-6">
              A detailed walkthrough, threat model, and audit materials are available for qualified reviewers upon request.
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
            This document outlines the system architecture and core invariants. It does not represent a production deployment.
          </p>
        </div>
      </div>

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
