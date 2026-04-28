"use client";

import { Send, Clock, RotateCcw, CheckCircle, Award, ArrowDown } from "lucide-react";

export default function ProtocolFlowchart() {
  return (
    <div className="relative my-10 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent">
      {/* Background grid + glow */}
      <div className="absolute inset-0 grid-bg opacity-[0.07] pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-cyan/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 right-0 w-[400px] h-[400px] rounded-full bg-violet/10 blur-[120px] pointer-events-none" />

      <div className="relative p-6 sm:p-10">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-cyan/70 text-[10px] uppercase tracking-[0.25em] font-mono mb-2">
            Diagram
          </p>
          <h4
            className="text-white text-xl sm:text-2xl font-bold"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Protocol <span className="text-cyan">Flow</span>
          </h4>
          <p className="text-white/40 text-xs mt-2">Deterministic lifecycle from creation to settlement</p>
        </div>

        {/* Flow Steps */}
        <div className="flex flex-col items-center gap-3">
          {/* Step 1: Create */}
          <FlowStep
            number="01"
            icon={<Send className="w-5 h-5 text-cyan" />}
            color="cyan"
            title="Create Protected Transfer"
            subtitle="Sender initiates · Protection fee charged"
          />

          <Connector from="cyan" to="violet" />

          {/* Step 2: Window Active */}
          <FlowStep
            number="02"
            icon={<Clock className="w-5 h-5 text-violet" />}
            color="violet"
            title="Rewind Window Active"
            subtitle="3 min – 24h · Only sender can act"
            pulse
          />

          <Connector from="violet" to="white" />

          {/* Step 3: Lifecycle Branch */}
          <div className="w-full max-w-2xl">
            <div className="relative rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-5 sm:p-6">
              {/* Step number floating */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-background border border-white/10">
                <p className="text-white/50 text-[10px] uppercase tracking-[0.2em] font-mono">
                  <span className="text-cyan/70">03</span> · Resolution
                </p>
              </div>

              <p className="text-white/40 text-[11px] text-center mb-5 mt-1">
                One of three deterministic paths
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Path A: Sender Rewinds */}
                <BranchCard
                  icon={<RotateCcw className="w-4 h-4 text-cyan" />}
                  color="cyan"
                  title="Sender Rewinds"
                  subtitle="During window"
                  badge="Reverses"
                />

                {/* Path B: Early Release / Expiry */}
                <BranchCard
                  icon={<Clock className="w-4 h-4 text-white/60" />}
                  color="neutral"
                  title="Expiry or Early Release"
                  subtitle="Becomes available"
                  badge="State change"
                />

                {/* Path C: Settlement */}
                <BranchCard
                  icon={<CheckCircle className="w-4 h-4 text-violet" />}
                  color="violet"
                  title="Settlement"
                  subtitle="Sender or recipient claims"
                  badge="Final"
                />
              </div>

              <p className="text-white/30 text-[10px] text-center mt-5">
                After expiry or early release, either party can complete settlement.
              </p>
            </div>
          </div>

          <Connector from="white" to="cyan" />

          {/* Step 4: NFT Proof */}
          <FlowStep
            number="04"
            icon={<Award className="w-5 h-5 text-cyan" />}
            color="cyan"
            title="Rewind Proof NFT"
            subtitle="Mint (first rewind) · Update (cumulative)"
            optional
          />
        </div>

        {/* Footer note */}
        <p className="text-center text-white/30 text-[11px] mt-8 italic">
          Step 04 only triggers when a rewind is executed.
        </p>
      </div>
    </div>
  );
}

function FlowStep({
  number,
  icon,
  color,
  title,
  subtitle,
  pulse,
  optional,
}: {
  number: string;
  icon: React.ReactNode;
  color: "cyan" | "violet";
  title: string;
  subtitle: string;
  pulse?: boolean;
  optional?: boolean;
}) {
  const styles = {
    cyan: {
      iconBg: "bg-gradient-to-br from-cyan/25 to-cyan/5",
      iconBorder: "border-cyan/40",
      glow: "shadow-[0_0_30px_-10px_rgba(0,212,255,0.5)]",
      number: "text-cyan/70",
    },
    violet: {
      iconBg: "bg-gradient-to-br from-violet/25 to-violet/5",
      iconBorder: "border-violet/40",
      glow: "shadow-[0_0_30px_-10px_rgba(139,92,246,0.5)]",
      number: "text-violet/70",
    },
  };

  return (
    <div className="flex items-center gap-4 w-full max-w-md group">
      <div className="relative flex-shrink-0">
        {pulse && (
          <div className={`absolute inset-0 rounded-xl ${styles[color].iconBg} animate-ping opacity-30`} />
        )}
        <div
          className={`relative w-14 h-14 rounded-xl ${styles[color].iconBg} border ${styles[color].iconBorder} ${styles[color].glow} flex items-center justify-center backdrop-blur-sm`}
        >
          {icon}
        </div>
      </div>
      <div className="flex-1 p-4 rounded-xl bg-white/[0.03] border border-white/10 group-hover:border-white/20 group-hover:bg-white/[0.05] transition-colors">
        <div className="flex items-center justify-between gap-2 mb-0.5">
          <p className="text-white text-sm font-semibold" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            {title}
          </p>
          <span className={`text-[10px] font-mono ${styles[color].number}`}>{number}</span>
        </div>
        <p className="text-white/40 text-xs">{subtitle}</p>
        {optional && (
          <p className="text-white/30 text-[10px] mt-1 font-mono uppercase tracking-wider">
            On rewind only
          </p>
        )}
      </div>
    </div>
  );
}

function Connector({ from, to }: { from: "cyan" | "violet" | "white"; to: "cyan" | "violet" | "white" }) {
  const colorMap = {
    cyan: "rgba(0,212,255,0.5)",
    violet: "rgba(139,92,246,0.5)",
    white: "rgba(255,255,255,0.2)",
  };
  return (
    <div className="relative h-8 w-0.5 my-1">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, ${colorMap[from]}, ${colorMap[to]})`,
        }}
      />
      <ArrowDown
        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 opacity-60"
        style={{ color: colorMap[to] }}
      />
    </div>
  );
}

function BranchCard({
  icon,
  color,
  title,
  subtitle,
  badge,
}: {
  icon: React.ReactNode;
  color: "cyan" | "violet" | "neutral";
  title: string;
  subtitle: string;
  badge: string;
}) {
  const styles = {
    cyan: {
      bg: "bg-cyan/[0.06]",
      border: "border-cyan/25 hover:border-cyan/40",
      title: "text-cyan",
      badge: "bg-cyan/10 text-cyan/80 border-cyan/20",
    },
    violet: {
      bg: "bg-violet/[0.06]",
      border: "border-violet/25 hover:border-violet/40",
      title: "text-violet",
      badge: "bg-violet/10 text-violet/80 border-violet/20",
    },
    neutral: {
      bg: "bg-white/[0.03]",
      border: "border-white/10 hover:border-white/20",
      title: "text-white/70",
      badge: "bg-white/5 text-white/50 border-white/10",
    },
  };

  return (
    <div
      className={`relative p-4 rounded-xl ${styles[color].bg} border ${styles[color].border} text-center transition-colors flex flex-col items-center`}
    >
      <div className="flex justify-center mb-2">{icon}</div>
      <p className={`${styles[color].title} text-xs font-semibold`}>{title}</p>
      <p className="text-white/40 text-[10px] mt-0.5 mb-3">{subtitle}</p>
      <span
        className={`mt-auto px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider border ${styles[color].badge}`}
      >
        {badge}
      </span>
    </div>
  );
}
