"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, FileText, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "How it Works", href: "/#how-it-works" },
  { label: "Security", href: "/security" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/95 border-white/5"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo + Navigation */}
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-1.5 flex-shrink-0">
              <Image
                src="/logov2.png"
                alt="Rewind X"
                width={200}
                height={100}
                className="h-16 w-auto"
                unoptimized
              />
              <span
                className="text-white font-semibold text-lg hidden xl:block"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  textShadow: "0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(0, 212, 255, 0.3)"
                }}
              >
                Rewind X
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-5 lg:gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/60 hover:text-white transition-colors duration-200 text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="/lightpaper"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg overflow-hidden transition-all duration-300"
            >
              {/* Animated gradient border */}
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan via-cyan/80 to-violet opacity-90 group-hover:opacity-100 transition-opacity" />
              {/* Inner background */}
              <span className="absolute inset-[1px] rounded-[7px] bg-background group-hover:bg-background/95 transition-colors" />
              {/* Hover shimmer */}
              <span className="absolute inset-[1px] rounded-[7px] bg-gradient-to-r from-transparent via-cyan/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Content */}
              <FileText className="relative z-10 w-3.5 h-3.5 text-cyan" />
              <span
                className="relative z-10 text-white text-sm font-medium tracking-wide"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Lightpaper
              </span>
              <ArrowRight className="relative z-10 w-3.5 h-3.5 text-cyan group-hover:translate-x-0.5 transition-transform" />
              {/* Glow on hover */}
              <span className="absolute -inset-1 rounded-lg bg-cyan/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-white/10 shadow-2xl">
            <nav className="flex flex-col gap-2 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors duration-200 text-base font-medium py-3 border-b border-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/lightpaper"
                className="group relative inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg overflow-hidden mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan via-cyan/80 to-violet" />
                <span className="absolute inset-[1px] rounded-[7px] bg-background" />
                <FileText className="relative z-10 w-3.5 h-3.5 text-cyan" />
                <span
                  className="relative z-10 text-white text-sm font-medium tracking-wide"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Lightpaper
                </span>
                <ArrowRight className="relative z-10 w-3.5 h-3.5 text-cyan" />
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
