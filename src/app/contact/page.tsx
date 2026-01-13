"use client";

import { useState } from "react";
import { Mail, Briefcase, Code, Copy, Check, ExternalLink } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function CopyableEmail({ email, variant }: { email: string; variant: "cyan" | "violet" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const styles = {
    cyan: {
      border: "hover:border-cyan/50",
      text: "text-cyan",
    },
    violet: {
      border: "hover:border-violet/50",
      text: "text-violet",
    },
  };

  return (
    <button
      onClick={handleCopy}
      className={`group relative w-full flex items-center justify-between gap-3 p-4 rounded-xl bg-white/5 border border-white/10 ${styles[variant].border} hover:bg-white/10 transition-all duration-300 overflow-hidden`}
    >
      <div className="flex items-center gap-3 min-w-0">
        <Mail className={`w-5 h-5 flex-shrink-0 ${styles[variant].text}`} />
        <span className="text-white font-mono text-sm truncate">{email}</span>
      </div>
      <div className={`flex items-center gap-2 flex-shrink-0 ${styles[variant].text}`}>
        {copied ? (
          <Check className="w-4 h-4" />
        ) : (
          <Copy className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
        )}
      </div>
    </button>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />

      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-24">
        {/* Animated Background */}
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-b from-cyan/10 via-violet/5 to-transparent blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-violet/10 blur-[150px]" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-cyan/10 blur-[100px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
          {/* Header */}
          <div className="text-center mb-16">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan"></span>
              </span>
              <span className="text-white/60 text-sm">Private Development</span>
            </div>

            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              <span className="text-white">Get in </span>
              <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Rewind X is selectively open for qualified inquiries from investors, builders, and security researchers.
            </p>
          </div>

          {/* Contact Cards - Equal Size */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Investment & Strategic */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan/20 to-cyan/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative glass-card p-8 h-full border border-white/10 hover:border-cyan/30 transition-colors duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan/20 to-cyan/5 border border-cyan/20 flex items-center justify-center mb-6">
                  <Briefcase className="w-7 h-7 text-cyan" />
                </div>

                <h2
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Investment & Strategic
                </h2>
                <p className="text-white/50 text-sm mb-6 leading-relaxed">
                  For angels, infrastructure funds, and ecosystem partners evaluating Rewind X in a pre-launch context.
                </p>

                <CopyableEmail email="investors.rewindx@proton.me" variant="cyan" />

                <a
                  href="https://www.linkedin.com/in/calvin-x-568767399"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 mt-3 text-white/40 hover:text-cyan/70 transition-colors text-sm"
                >
                  <span>Or connect on</span>
                  <span className="font-mono text-cyan/70">LinkedIn</span>
                </a>

                <p className="text-white/40 text-xs mt-4">
                  Written inquiries preferred · 24–48h response
                </p>
              </div>
            </div>

            {/* Technical */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet/20 to-violet/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative glass-card p-8 h-full border border-white/10 hover:border-violet/30 transition-colors duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet/20 to-violet/5 border border-violet/20 flex items-center justify-center mb-6">
                  <Code className="w-7 h-7 text-violet" />
                </div>

                <h2
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Technical, Wallet & Security
                </h2>
                <p className="text-white/50 text-sm mb-4 leading-relaxed">
                  For wallet teams, auditors, and security researchers requesting high-level technical information or coordination.
                </p>
                <p className="text-white/40 text-xs mb-6 leading-relaxed">
                  (No source code, integrations, or implementation details shared at this stage.)
                </p>

                <CopyableEmail email="contact.rewindx@proton.me" variant="violet" />

                <p className="text-white/40 text-xs mt-4">
                  Written inquiries preferred · 24–48h response
                </p>
              </div>
            </div>
          </div>

          {/* Updates Section */}
          <div className="glass-card p-6 border border-white/10 mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3
                  className="text-lg font-semibold text-white mb-1"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Updates
                </h3>
                <p className="text-white/40 text-sm">
                  Announcements, demos, and technical progress.
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/calvin-x-568767399"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-white text-sm font-medium">Connect on LinkedIn</span>
                <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Note */}
          <div className="text-center">
            <p className="text-white/30 text-sm">
              All messages are reviewed manually. No user support at this stage.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
