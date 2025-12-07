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

                <p className="text-white/40 text-xs mt-4">
                  Response time: 24–48 hours
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
                  Response time: 24–48 hours
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
                href="https://x.com/calvinrewindx"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="text-white text-sm font-medium">Follow on X</span>
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
