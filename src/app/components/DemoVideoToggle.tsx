"use client";

import { useState, useRef } from "react";
import { Cpu, Bot } from "lucide-react";

type DemoTab = "protocol" | "ai";

const DEMO_CONFIG = {
  protocol: {
    src: "/rewindx-demo.mp4",
    label: "Protocol",
    icon: Cpu,
  },
  ai: {
    src: "/ai-demo.mp4",
    label: "AI Agent",
    icon: Bot,
  },
} as const;

export default function DemoVideoToggle() {
  const [activeTab, setActiveTab] = useState<DemoTab>("ai");
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTabChange = (tab: DemoTab) => {
    if (tab === activeTab) return;

    // Reset video playback
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    setActiveTab(tab);
  };

  const config = DEMO_CONFIG[activeTab];
  const ProtocolIcon = DEMO_CONFIG.protocol.icon;
  const AiIcon = DEMO_CONFIG.ai.icon;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Toggle Switch */}
      <p className="text-center text-white/40 text-xs font-mono tracking-wider mb-3">
        Choose demo
      </p>
      <div className="flex justify-center mb-6">
        <div className="relative inline-flex rounded-full bg-black/40 p-1 border border-white/10 backdrop-blur-sm">
          {/* Sliding Background */}
          <div
            className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-gradient-to-r from-cyan/30 to-violet/30 border border-cyan/20 shadow-lg shadow-cyan/20 transition-all duration-300 ease-out ${
              activeTab === "ai" ? "left-[calc(50%+2px)]" : "left-1"
            }`}
          />

          <button
            onClick={() => handleTabChange("protocol")}
            className={`relative z-10 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === "protocol"
                ? "text-white"
                : "text-white/40 hover:text-white/60"
            }`}
          >
            <ProtocolIcon className={`w-4 h-4 transition-colors duration-300 ${activeTab === "protocol" ? "text-cyan" : ""}`} />
            <span>Protocol</span>
          </button>
          <button
            onClick={() => handleTabChange("ai")}
            className={`relative z-10 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === "ai"
                ? "text-white"
                : "text-white/40 hover:text-white/60"
            }`}
          >
            <AiIcon className={`w-4 h-4 transition-colors duration-300 ${activeTab === "ai" ? "text-violet" : ""}`} />
            <span>AI Agent</span>
          </button>
        </div>
      </div>

      {/* Video Container */}
      <div className="relative group">
        {/* Animated Glow Background */}
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan/30 via-violet/20 to-cyan/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
        <div className="absolute -inset-2 bg-gradient-to-r from-cyan/20 to-violet/20 rounded-2xl blur-xl opacity-40" />

        {/* Video Container */}
        <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl shadow-cyan/20">
          {/* Video */}
          <video
            ref={videoRef}
            key={activeTab}
            className="w-full h-auto relative z-0"
            autoPlay
            muted
            loop
            playsInline
            controls
          >
            <source src={config.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Description */}
        <div className="mt-5 flex justify-center">
          {activeTab === "protocol" ? (
            <p className="text-center text-white/50 text-xs font-mono tracking-wider">
              System flow walkthrough
            </p>
          ) : (
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs font-mono">
              <span className="px-2.5 py-1 rounded-full bg-violet/20 text-violet border border-violet/40">
                Demo mode (test funds)
              </span>
              <span className="text-white/60">
                Production: user-owned smart accounts with delegated, revocable permissions
              </span>
            </div>
          )}
        </div>

        {/* Bottom Reflection */}
        <div className="absolute -bottom-4 left-4 right-4 h-8 bg-gradient-to-b from-cyan/10 to-transparent blur-xl rounded-full" />
      </div>
    </div>
  );
}
