"use client";

import { AlertTriangle, Users, Building2 } from "lucide-react";

const stats = [
  {
    icon: AlertTriangle,
    value: "Billions",
    label: "Annual Losses",
    sublabel: "Irreversible transfers",
    color: "red",
  },
  {
    icon: Users,
    value: "Majority",
    label: "Fear Mistakes",
    sublabel: "Permanent errors",
    color: "amber",
  },
  {
    icon: Building2,
    value: "Zero",
    label: "Recourse Options",
    sublabel: "For institutions",
    color: "red",
  },
];

export default function ProblemStats() {
  return (
    <section className="py-16 sm:py-20 relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-2xl sm:text-3xl font-bold text-white/90 mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            The Problem is Real
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Address poisoning, phishing attacks, and fat finger errors cost users billions every year.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`glass-card p-6 text-center group transition-all duration-300 ${
                stat.color === "red"
                  ? "hover:border-red-500/30"
                  : "hover:border-amber-500/30"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors ${
                stat.color === "red"
                  ? "bg-red-500/10 border border-red-500/20 group-hover:bg-red-500/20"
                  : "bg-amber-500/10 border border-amber-500/20 group-hover:bg-amber-500/20"
              }`}>
                <stat.icon className={`w-6 h-6 ${
                  stat.color === "red" ? "text-red-400" : "text-amber-400"
                }`} />
              </div>
              <p
                className={`text-3xl sm:text-4xl font-bold mb-2 ${
                  stat.color === "red" ? "text-red-400" : "text-amber-400"
                }`}
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {stat.value}
              </p>
              <p className="text-white/70 font-medium">{stat.label}</p>
              <p className="text-white/40 text-sm">{stat.sublabel}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="text-center">
          <p className="text-lg sm:text-xl text-white/60 italic">
            &ldquo;Finality ≠ Safety. Irreversibility blocks mass adoption.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
