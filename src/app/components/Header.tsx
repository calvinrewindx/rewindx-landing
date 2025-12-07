"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "How it Works", href: "/#how-it-works" },
  { label: "Features", href: "/#features" },
  { label: "Security", href: "/#security" },
  { label: "Lightpaper", href: "/lightpaper" },
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
            <a href="/" className="flex items-center gap-3 flex-shrink-0">
              <Image
                src="/rewind-logo.png"
                alt="Rewind X"
                width={56}
                height={56}
                className="w-14 h-14"
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
            <a href="/lightpaper" className="btn-primary text-sm py-3 px-6 inline-block">
              Read Lightpaper
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
                className="btn-primary btn-shine text-sm py-3 px-6 mt-4 inline-block text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Read Lightpaper
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
