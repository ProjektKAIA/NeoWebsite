"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Ring Logo Component - based on the app mockup design
function RingLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ringGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c0d4e8" />
          <stop offset="30%" stopColor="#e8eff5" />
          <stop offset="50%" stopColor="#ffffff" />
          <stop offset="70%" stopColor="#d4e4f0" />
          <stop offset="100%" stopColor="#a8c4dc" />
        </linearGradient>
        <linearGradient id="ringGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff5d37" />
          <stop offset="50%" stopColor="#ffb347" />
          <stop offset="100%" stopColor="#ff8c42" />
        </linearGradient>
        <linearGradient id="ringGradient3" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4a7fb0" />
          <stop offset="50%" stopColor="#7eb3d8" />
          <stop offset="100%" stopColor="#b8d4ea" />
        </linearGradient>
      </defs>
      {/* Outer ring with glass effect */}
      <ellipse cx="50" cy="50" rx="38" ry="35" stroke="url(#ringGradient1)" strokeWidth="12" fill="none" opacity="0.9"/>
      {/* Inner highlights */}
      <ellipse cx="50" cy="50" rx="38" ry="35" stroke="url(#ringGradient2)" strokeWidth="4" strokeDasharray="60 140" fill="none" opacity="0.7"/>
      <ellipse cx="50" cy="50" rx="38" ry="35" stroke="url(#ringGradient3)" strokeWidth="3" strokeDasharray="40 160" strokeDashoffset="100" fill="none" opacity="0.6"/>
      {/* Glass shine effect */}
      <ellipse cx="35" cy="35" rx="15" ry="8" fill="white" opacity="0.3" transform="rotate(-30 35 35)"/>
    </svg>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { href: "#about", labelKey: "nav.about" },
    { href: "#features", labelKey: "nav.features" },
    { href: "#contact", labelKey: "nav.contact" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "de" : "en");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo with Ring */}
          <Link href="/" className="flex items-center gap-3">
            <RingLogo className="w-10 h-10" />
            <span className="text-xl font-semibold text-gray-900">
              Neoneo Bank
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium"
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </div>

          {/* Language Switcher & CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label="Switch language"
            >
              <Globe size={18} />
              <span className="text-sm font-medium uppercase">{language}</span>
            </button>

            <a
              href="https://t.me/neoneobank"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              {t("nav.contactUs")}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Switch language"
            >
              <Globe size={20} />
            </button>
            <button
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(link.labelKey)}
                </Link>
              ))}
              <a
                href="https://t.me/neoneobank"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm text-center mt-2"
              >
                {t("nav.contactUs")}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
