"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

// Ring Logo Component
function RingLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="footerRingGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c0d4e8" />
          <stop offset="30%" stopColor="#e8eff5" />
          <stop offset="50%" stopColor="#ffffff" />
          <stop offset="70%" stopColor="#d4e4f0" />
          <stop offset="100%" stopColor="#a8c4dc" />
        </linearGradient>
        <linearGradient id="footerRingGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff5d37" />
          <stop offset="50%" stopColor="#ffb347" />
          <stop offset="100%" stopColor="#ff8c42" />
        </linearGradient>
      </defs>
      <ellipse cx="50" cy="50" rx="38" ry="35" stroke="url(#footerRingGradient1)" strokeWidth="12" fill="none" opacity="0.9"/>
      <ellipse cx="50" cy="50" rx="38" ry="35" stroke="url(#footerRingGradient2)" strokeWidth="4" strokeDasharray="60 140" fill="none" opacity="0.7"/>
    </svg>
  );
}

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const legalLinks = [
    { href: "/privacy", labelKey: "footer.privacy" },
    { href: "/terms", labelKey: "footer.terms" },
    { href: "/imprint", labelKey: "footer.imprint" },
    { href: "/cookies", labelKey: "footer.cookies" },
  ];

  const productLinks = [
    { href: "#features", labelKey: "footer.features" },
    { href: "#about", labelKey: "footer.about" },
    { href: "#contact", labelKey: "footer.support" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <RingLogo className="w-10 h-10" />
              <span className="text-2xl font-bold">Neoneo Bank</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              {t("footer.description")}
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="#"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-lg"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[9px] opacity-70">{t("footer.downloadOn")}</p>
                  <p className="text-sm font-semibold -mt-0.5">App Store</p>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-lg"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92z"/>
                  <path fill="#FBBC04" d="M17.556 8.235L14.85 9.806 13.792 12l1.058 2.194 2.706 1.571L21.17 13.5c.732-.423.732-1.577 0-2l-3.614-2.265z"/>
                  <path fill="#4285F4" d="M3.609 1.814L13.792 12l1.058-2.194-5.464-9.09a1 1 0 0 0-.864-.498c-.186 0-.372.052-.534.154l-4.379 1.442z"/>
                  <path fill="#34A853" d="M13.792 12l-1.058 2.194 5.464 9.09a.999.999 0 0 0 1.398.344l4.379-1.442-6.627-7.992L13.792 12z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[9px] opacity-70">{t("footer.getItOn")}</p>
                  <p className="text-sm font-semibold -mt-0.5">Google Play</p>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://t.me/neoneobank"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <a
                href="mailto:contact@neoneobank.de"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
                aria-label="Email"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M22 6L12 13L2 6"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t("footer.product")}</h4>
            <ul className="space-y-4">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t("footer.legal")}</h4>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Company Details Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-gray-400">

            {/* Registered Company */}
            <div>
              <p className="font-medium text-gray-300 mb-2">{t("footer.registeredCompany")}</p>
              <p>LUNA LTD</p>
              <p>Company No. 16121231</p>
              <p>{t("footer.registeredIn")}</p>
            </div>

            {/* Address */}
            <div>
              <p className="font-medium text-gray-300 mb-2">{t("footer.registeredOffice")}</p>
              <p>20 Wenlock Road</p>
              <p>London, N1 7GU</p>
              <p>United Kingdom</p>
            </div>

            {/* CEO */}
            <div>
              <p className="font-medium text-gray-300 mb-2">{t("footer.management")}</p>
              <p>CEO: Paul Kappel</p>
              <p>contact@neoneobank.de</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} LUNA LTD trading as Neoneo Bank. {t("footer.allRights")}
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z"/>
                </svg>
                {t("footer.regulated")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
