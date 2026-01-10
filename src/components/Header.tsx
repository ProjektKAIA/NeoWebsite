"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
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
      <ellipse cx="50" cy="50" rx="38" ry="35" stroke="url(#ringGradient1)" strokeWidth="12" fill="none" opacity="0.9"/>
      <ellipse cx="50" cy="50" rx="38" ry="35" stroke="url(#ringGradient2)" strokeWidth="4" strokeDasharray="60 140" fill="none" opacity="0.7"/>
      <ellipse cx="50" cy="50" rx="38" ry="35" stroke="url(#ringGradient3)" strokeWidth="3" strokeDasharray="40 160" strokeDashoffset="100" fill="none" opacity="0.6"/>
      <ellipse cx="35" cy="35" rx="15" ry="8" fill="white" opacity="0.3" transform="rotate(-30 35 35)"/>
    </svg>
  );
}

// Language data with flags
const languages = [
  {
    code: "en" as const,
    name: "English",
    flag: (
      <svg className="w-5 h-5 rounded-sm" viewBox="0 0 36 36">
        <rect fill="#00247D" width="36" height="36"/>
        <path d="M0,0 L36,36 M36,0 L0,36" stroke="#fff" strokeWidth="6"/>
        <path d="M0,0 L36,36 M36,0 L0,36" stroke="#CF142B" strokeWidth="2"/>
        <path d="M18,0 V36 M0,18 H36" stroke="#fff" strokeWidth="10"/>
        <path d="M18,0 V36 M0,18 H36" stroke="#CF142B" strokeWidth="6"/>
      </svg>
    )
  },
  {
    code: "de" as const,
    name: "Deutsch",
    flag: (
      <svg className="w-5 h-5 rounded-sm" viewBox="0 0 36 36">
        <rect fill="#FFCD05" y="24" width="36" height="12"/>
        <rect fill="#ED1F24" y="12" width="36" height="12"/>
        <rect fill="#141414" width="36" height="12"/>
      </svg>
    )
  }
];

// Professional Language Selector Component
function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find(l => l.code === language) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-3 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="flex-shrink-0">{currentLanguage.flag}</span>
        <span className="text-sm font-medium text-gray-700">{currentLanguage.code.toUpperCase()}</span>
        <ChevronDown
          size={16}
          className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200"
          role="listbox"
        >
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-150 ${
                  language === lang.code
                    ? 'bg-primary/5 text-primary'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                role="option"
                aria-selected={language === lang.code}
              >
                <span className="flex-shrink-0">{lang.flag}</span>
                <span className="font-medium">{lang.name}</span>
                {language === lang.code && (
                  <svg className="w-4 h-4 ml-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Mobile Language Selector
function MobileLanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find(l => l.code === language) || languages[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Select language"
      >
        <span className="flex-shrink-0">{currentLanguage.flag}</span>
        <ChevronDown
          size={14}
          className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden z-50">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                  language === lang.code
                    ? 'bg-primary/5 text-primary'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span className="flex-shrink-0">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { href: "#about", labelKey: "nav.about" },
    { href: "#features", labelKey: "nav.features" },
    { href: "#contact", labelKey: "nav.contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
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

          {/* Language Selector & CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSelector />
            <a
              href="https://t.me/neoneobank"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              {t("nav.contactUs")}
            </a>
          </div>

          {/* Mobile: Language + Menu */}
          <div className="md:hidden flex items-center gap-1">
            <MobileLanguageSelector />
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
