"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { RotateCcw, Wallet, User, Shield, Clock, ArrowRight } from "lucide-react";

const tiers = {
  NONE: { label: "No Tier", discount: 0, window: 24 },
  Genesis: { label: "Genesis", discount: 0.1, window: 24 },
  Gatekeeper: { label: "Gatekeeper", discount: 0.2, window: 24 },
  Enterprise: { label: "Enterprise", discount: 0.3, window: 30 },
  Prime: { label: "Prime", discount: 0.4, window: 36 },
  Nexus: { label: "Nexus", discount: 0.5, window: 48 },
} as const;
type TierKey = keyof typeof tiers;

const PROTECTION_FEE_BASE = 0.02;
const REWIND_FEE_BASE = 0.015;

function useAnimatedNumber(value: number, duration: number = 300) {
  const [displayValue, setDisplayValue] = useState(value);
  const previousValue = useRef(value);

  useEffect(() => {
    const startValue = previousValue.current;
    const endValue = value;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + (endValue - startValue) * easeOut;
      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        previousValue.current = endValue;
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration]);

  return displayValue;
}

export default function RewindSimulator() {
  const [amount, setAmount] = useState<number>(5000);
  const [tier, setTier] = useState<TierKey>("Genesis");

  const calculations = useMemo(() => {
    const tierData = tiers[tier];
    const discount = tierData.discount;
    const windowHours = tierData.window;

    const protectionFee = amount * PROTECTION_FEE_BASE * (1 - discount);
    const protectionRate = PROTECTION_FEE_BASE * (1 - discount) * 100;
    const protectionWithoutDiscount = amount * PROTECTION_FEE_BASE;
    const tierSavings = protectionWithoutDiscount - protectionFee;

    // Fee deducted from transfer model (matches contract behavior)
    const amountAfterProtection = amount - protectionFee;
    const executionCost = amountAfterProtection * REWIND_FEE_BASE;
    const executionRate = REWIND_FEE_BASE * 100;
    const totalFees = protectionFee + executionCost;
    const totalRate = ((protectionFee + executionCost) / amount) * 100;
    const recoveredAmount = amountAfterProtection - executionCost;
    const recoveryPercent = (recoveredAmount / amount) * 100;
    const recipientGets = amountAfterProtection;
    const recipientPercent = (recipientGets / amount) * 100;

    const youPayTotal = amount;
    const youPayTotalRewind = amount;

    return {
      protectionFee,
      protectionRate,
      tierSavings,
      executionCost,
      executionRate,
      totalFees,
      totalRate,
      recoveredAmount,
      recoveryPercent,
      recipientGets,
      recipientPercent,
      windowHours,
      discount,
      youPayTotal,
      youPayTotalRewind,
    };
  }, [amount, tier]);

  // Animated values
  const animatedAmount = useAnimatedNumber(amount);
  const animatedRecovered = useAnimatedNumber(calculations.recoveredAmount);
  const animatedProtectionFee = useAnimatedNumber(calculations.protectionFee);
  const animatedExecutionCost = useAnimatedNumber(calculations.executionCost);
  const animatedTotalFees = useAnimatedNumber(calculations.totalFees);
  const animatedTierSavings = useAnimatedNumber(calculations.tierSavings);
  const animatedYouPayTotal = useAnimatedNumber(calculations.youPayTotal);
  const animatedYouPayTotalRewind = useAnimatedNumber(calculations.youPayTotalRewind);
  const animatedRecipientGets = useAnimatedNumber(calculations.recipientGets);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);

  const formatCurrencyPrecise = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);

  return (
    <section id="simulator" className="section relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-background" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-cyan text-sm font-medium mb-4 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20">
            <Shield className="w-4 h-4" />
            Cost Estimator
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Calculate Your <span className="gradient-text">Protection</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Illustrative estimate. Execution cost is risk-adjusted.
          </p>
        </div>

        {/* Main Calculator Card */}
        <div className="glass-card">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">

            {/* LEFT: Inputs (2 cols) */}
            <div className="lg:col-span-2 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/[0.08]">
              <h3 className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-6">
                Configure Transfer
              </h3>

              {/* Amount Input */}
              <div className="mb-8">
                <label className="text-white/60 text-sm font-medium block mb-3">
                  Transfer Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-xl font-medium">$</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={amount.toLocaleString("en-US")}
                    onChange={(e) => {
                      const raw = e.target.value.replace(/,/g, "");
                      const num = parseInt(raw, 10);
                      if (!isNaN(num)) {
                        setAmount(Math.max(100, Math.min(10000000, num)));
                      } else if (raw === "") {
                        setAmount(100);
                      }
                    }}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-4 text-2xl text-white font-bold
                      focus:outline-none focus:border-cyan/50 transition-colors"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  />
                </div>
                {/* Quick presets */}
                <div className="flex gap-2 mt-3">
                  {[1000, 5000, 10000, 50000].map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setAmount(preset)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        amount === preset
                          ? "bg-cyan/20 text-cyan border border-cyan/30"
                          : "bg-white/5 text-white/40 hover:text-white/60 hover:bg-white/10"
                      }`}
                    >
                      ${preset >= 1000 ? `${preset / 1000}K` : preset}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tier Selector */}
              <div>
                <label className="text-white/60 text-sm font-medium block mb-3">
                  NFT Tier
                  <span className="text-white/30 font-normal ml-2">(Activation Fee Discount)</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(tiers).map(([key, data]) => (
                    <button
                      key={key}
                      onClick={() => setTier(key as TierKey)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        tier === key
                          ? "bg-cyan/15 text-cyan border border-cyan/30"
                          : "bg-white/5 text-white/50 border border-white/10 hover:bg-white/10 hover:text-white/70"
                      }`}
                    >
                      {data.label}
                      {data.discount > 0 && (
                        <span className={`ml-1.5 ${tier === key ? "text-cyan/70" : "text-white/30"}`}>
                          -{data.discount * 100}%
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                {/* Window info */}
                <div className="flex items-center gap-2 mt-4 text-sm text-white/40">
                  <Clock className="w-4 h-4" />
                  <span>Protection window: <span className="text-white font-semibold" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>{calculations.windowHours}h</span></span>
                </div>
              </div>
            </div>

            {/* RIGHT: Two Outcome Cards (3 cols) */}
            <div className="lg:col-span-3 p-6 sm:p-8">
              <h3 className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-6">
                Your Outcomes
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Outcome A: If Rewind */}
                <div className="p-5 rounded-2xl bg-cyan/[0.08] border border-cyan/20 flex flex-col">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-cyan/20 flex items-center justify-center">
                      <RotateCcw className="w-5 h-5 text-cyan" />
                    </div>
                    <div>
                      <p className="text-cyan font-semibold text-sm">If You Rewind</p>
                      <p className="text-white/40 text-xs">Within {calculations.windowHours}h window</p>
                    </div>
                  </div>

                  {/* Fee Breakdown */}
                  <div className="space-y-2.5 mb-5">
                    <div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/50">Protection Fee</span>
                        <span className="text-white/70 font-mono" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                          {formatCurrencyPrecise(animatedProtectionFee)}
                        </span>
                      </div>
                      {calculations.tierSavings > 0 && (
                        <p className="text-cyan/60 text-xs mt-1">
                          Tier saves {formatCurrencyPrecise(animatedTierSavings)} on protection
                        </p>
                      )}
                    </div>
                    <div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/50">Execution Cost (risk-adjusted)</span>
                        <span className="text-white/70 font-mono" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                          ~{formatCurrencyPrecise(animatedExecutionCost)}
                        </span>
                      </div>
                      <p className="text-white/30 text-[10px] mt-1">
                        Varies by wallet behavior; capped by protocol rules.
                      </p>
                    </div>
                    <div className="h-px bg-white/10 my-2" />
                    <div className="flex justify-between text-sm">
                      <span className="text-white/40">Total Fees</span>
                      <span className="text-white/50 font-mono" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                        ~{formatCurrencyPrecise(animatedTotalFees)}
                        <span className="text-white/30 ml-1.5">({calculations.totalRate.toFixed(1)}%)</span>
                      </span>
                    </div>
                  </div>

                  {/* Result */}
                  <div className="p-4 rounded-xl bg-cyan/10 border border-cyan/20 mt-auto">
                    <div className="flex justify-between text-xs text-cyan/60 mb-2">
                      <span>You send</span>
                      <span className="font-mono" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>{formatCurrency(animatedYouPayTotalRewind)}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <Wallet className="w-4 h-4 text-cyan" />
                      <span className="text-cyan/80 text-xs font-medium uppercase tracking-wider">You Recover</span>
                    </div>
                    <p className="text-2xl sm:text-3xl font-bold text-cyan" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                      {formatCurrency(animatedRecovered)}
                    </p>
                    <p className="text-cyan/60 text-sm mt-1">
                      {calculations.recoveryPercent.toFixed(1)}% of original
                    </p>
                  </div>
                </div>

                {/* Outcome B: If No Rewind (Finalize) */}
                <div className="p-5 rounded-2xl bg-violet/[0.08] border border-violet/20 flex flex-col">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-violet/20 flex items-center justify-center">
                      <User className="w-5 h-5 text-violet" />
                    </div>
                    <div>
                      <p className="text-violet font-semibold text-sm">If No Rewind</p>
                      <p className="text-white/40 text-xs">After window expires</p>
                    </div>
                  </div>

                  {/* Fee Breakdown */}
                  <div className="space-y-2.5 mb-5">
                    <div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/50">Protection Fee</span>
                        <span className="text-white/70 font-mono" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                          {formatCurrencyPrecise(animatedProtectionFee)}
                        </span>
                      </div>
                      {calculations.tierSavings > 0 && (
                        <p className="text-violet/60 text-xs mt-1">
                          Tier saves {formatCurrencyPrecise(animatedTierSavings)} on protection
                        </p>
                      )}
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/50">Execution Cost</span>
                      <span className="text-white/30">—</span>
                    </div>
                    <p className="text-white/30 text-[10px] mt-1">
                      Only applies if rewind is triggered.
                    </p>
                    <div className="h-px bg-white/10 my-2" />
                    <div className="flex justify-between text-sm">
                      <span className="text-white/40">Total Fees</span>
                      <span className="text-white/50 font-mono" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                        {formatCurrencyPrecise(animatedProtectionFee)}
                        <span className="text-white/30 ml-1.5">({calculations.protectionRate.toFixed(1)}%)</span>
                      </span>
                    </div>
                  </div>

                  {/* Result */}
                  <div className="p-4 rounded-xl bg-violet/10 border border-violet/20 mt-auto">
                    <div className="flex justify-between text-xs text-violet/60 mb-2">
                      <span>You send</span>
                      <span className="font-mono" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>{formatCurrency(animatedYouPayTotal)}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <ArrowRight className="w-4 h-4 text-violet" />
                      <span className="text-violet/80 text-xs font-medium uppercase tracking-wider">Recipient Gets</span>
                    </div>
                    <p className="text-2xl sm:text-3xl font-bold text-violet" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                      {formatCurrency(animatedRecipientGets)}
                    </p>
                    <p className="text-violet/60 text-sm mt-1">
                      {calculations.recipientPercent.toFixed(1)}% of original
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom note */}
              <p className="text-white/30 text-xs text-center mt-6">
                Protection fee is deducted at creation. Execution fee applies only if a rewind is triggered. Finalization is pull-based.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Footer */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/40">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-cyan/60" />
            <span>Non-Custodial</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-violet/60" />
            <span>Deterministic Windows</span>
          </div>
          <div className="flex items-center gap-2">
            <RotateCcw className="w-4 h-4 text-cyan/60" />
            <span>Pull-Based Finalization</span>
          </div>
        </div>
      </div>
    </section>
  );
}
