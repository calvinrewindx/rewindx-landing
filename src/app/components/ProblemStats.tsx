"use client";

import { AlertTriangle, Ban, ShieldAlert } from "lucide-react";

const stats = [
  {
    icon: AlertTriangle,
    value: "Billions",
    label: "Lost annually",
    sublabel: "due to irreversible transfers",
    color: "red",
  },
  {
    icon: Ban,
    value: "No recourse",
    label: "Once confirmed",
    sublabel: "funds are gone",
    color: "red",
  },
  {
    icon: ShieldAlert,
    value: "Persistent risk",
    label: "Even experienced users",
    sublabel: "make critical mistakes",
    color: "amber",
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
            Address poisoning, phishing attacks, and simple transfer errors result in billions of dollars lost every year.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`glass-card p-6 text-center group transition-all duration-300 cursor-default hover:-translate-y-1 ${
                stat.color === "red"
                  ? "hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/10 hover:bg-red-500/[0.03]"
                  : "hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/10 hover:bg-amber-500/[0.03]"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${
                stat.color === "red"
                  ? "bg-red-500/10 border border-red-500/20 group-hover:bg-red-500/20 group-hover:scale-110"
                  : "bg-amber-500/10 border border-amber-500/20 group-hover:bg-amber-500/20 group-hover:scale-110"
              }`}>
                <stat.icon className={`w-6 h-6 transition-colors duration-300 ${
                  stat.color === "red" ? "text-red-400/70 group-hover:text-red-400" : "text-amber-400/70 group-hover:text-amber-400"
                }`} />
              </div>
              <p
                className={`text-2xl sm:text-3xl font-bold mb-2 transition-colors duration-300 ${
                  stat.color === "red" ? "text-red-400/80 group-hover:text-red-400" : "text-amber-400/80 group-hover:text-amber-400"
                }`}
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {stat.value}
              </p>
              <p className="text-white/60 font-medium group-hover:text-white/80 transition-colors duration-300">{stat.label}</p>
              <p className="text-white/30 text-sm group-hover:text-white/50 transition-colors duration-300">{stat.sublabel}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="text-center">
          <p className="text-lg sm:text-xl text-white/60 italic">
            &ldquo;Finality ≠ Safety. Irreversibility limits adoption.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
