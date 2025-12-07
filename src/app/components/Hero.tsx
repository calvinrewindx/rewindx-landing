"use client";

import { useState, useRef } from "react";
import { ArrowRight, Shield, Cpu, Coins, Play } from "lucide-react";
import CtrlZAnimation from "./CtrlZAnimation";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-violet/5 blur-[100px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Spectacular Brand Name */}
        <div className="mb-6">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest uppercase text-white"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              textShadow: "0 0 30px rgba(0, 212, 255, 0.6), 0 0 60px rgba(0, 212, 255, 0.4), 0 0 90px rgba(0, 212, 255, 0.2)"
            }}
          >
            Rewind X
          </h2>
          <div className="mt-2 flex justify-center">
            <div className="h-px w-40 sm:w-52 md:w-72 lg:w-80 bg-gradient-to-r from-transparent via-cyan to-transparent" />
          </div>
        </div>

        {/* Mini Badge Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <span className="badge">
            <Shield className="w-3.5 h-3.5 text-cyan" />
            Non-custodial
          </span>
          <span className="badge">
            <Cpu className="w-3.5 h-3.5 text-violet" />
            Deterministic
          </span>
          <span className="badge">
            <Coins className="w-3.5 h-3.5 text-cyan" />
            Any ERC-20
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-4"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          <span className="gradient-text">Ctrl+Z</span>{" "}
          <span className="text-foreground">for Crypto.</span>
        </h1>

        {/* Ctrl+Z Animation */}
        <div className="mb-6">
          <CtrlZAnimation size="md" />
        </div>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-4 leading-relaxed">
          The <span className="gradient-text font-semibold">first</span> <span className="text-cyan/80">reversible</span> transfer layer for <span className="text-cyan/80">ERC-20</span> tokens.
        </p>
        <p className="font-mono text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-10 tracking-wide">
          <span className="text-cyan">24h</span> undo window · Non-custodial · Deterministic
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#features" className="btn-primary flex items-center gap-2">
            Learn More
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#how-it-works" className="btn-secondary flex items-center gap-2">
            Explore the Mechanism
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Demo Video */}
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            {/* Animated Glow Background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan/30 via-violet/20 to-cyan/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan/20 to-violet/20 rounded-2xl blur-xl opacity-40" />

            {/* Video Container */}
            <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl shadow-cyan/20">
              {/* Video */}
              <video
                ref={videoRef}
                className="w-full h-auto relative z-0"
                controls={isPlaying}
                preload="metadata"
                onEnded={handleVideoEnd}
                onPause={handleVideoPause}
                onPlay={() => setIsPlaying(true)}
              >
                <source src="/rewindxviedeodemo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Custom Play Button Overlay */}
              {!isPlaying && (
                <button
                  onClick={handlePlayClick}
                  className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 transition-all duration-300 hover:bg-black/20 cursor-pointer group/play"
                >
                  <div className="relative">
                    {/* Glow Ring */}
                    <div className="absolute -inset-4 bg-cyan/30 rounded-full blur-xl animate-pulse" />
                    {/* Play Button */}
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-cyan to-cyan/70 flex items-center justify-center shadow-lg shadow-cyan/50 group-hover/play:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  </div>
                  {/* Text */}
                  <span className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium opacity-0 group-hover/play:opacity-100 transition-opacity duration-300">
                    Watch Demo
                  </span>
                </button>
              )}
            </div>

            {/* Bottom Reflection */}
            <div className="absolute -bottom-4 left-4 right-4 h-8 bg-gradient-to-b from-cyan/10 to-transparent blur-xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
