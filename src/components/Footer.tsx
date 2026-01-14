"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY, getCopyrightText } from "@/constants/company";

export default function Footer() {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const legalLinks = [
    { href: "/privacy", labelKey: "footer.privacy" },
    { href: "/terms", labelKey: "footer.terms" },
    { href: "/imprint", labelKey: "footer.imprint" },
    { href: "/cookies", labelKey: "footer.cookies" },
  ];

  const productLinks = [
    { href: "/features", labelKey: "footer.features" },
    { href: "/about", labelKey: "footer.about" },
    { href: "#contact", labelKey: "footer.support" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt={`${COMPANY.tradingAs} Logo`}
                width={56}
                height={56}
                className="w-14 h-14"
              />
              <span className="text-2xl font-bold">{COMPANY.tradingAs}</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              {t("footer.description")}
            </p>

            {/* App Store Buttons - Coming Soon 2026 */}
            <div className="mb-8">
              <p className="text-sm text-primary font-medium mb-3">
                {language === "de" ? "Bald verfügbar 2026" : "Coming Soon 2026"}
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg opacity-60 cursor-not-allowed">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <p className="text-[9px] opacity-70">{t("footer.downloadOn")}</p>
                    <p className="text-sm font-semibold -mt-0.5">App Store</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg opacity-60 cursor-not-allowed">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.18 2.94L13.5 12 3.18 21.06c-.2-.37-.18-.78-.18-1.2V4.14c0-.42-.02-.83.18-1.2zm1.3-1.35l11.23 6.4-2.38 2.13L4.48 1.59zm0 20.82l8.85-8.53 2.38 2.13-11.23 6.4zm14.08-9.08l-2.58-1.47-2.6 2.33 2.6 2.33 2.58-1.47c.7-.4.7-1.32 0-1.72z"/>
                  </svg>
                  <div className="text-left">
                    <p className="text-[9px] opacity-70">{t("footer.getItOn")}</p>
                    <p className="text-sm font-semibold -mt-0.5">Google Play</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact & Links */}
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${COMPANY.contact.email}`}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M22 6L12 13L2 6"/>
                </svg>
                <span className="text-sm">{COMPANY.contact.email}</span>
              </a>
              <a
                href={`https://${COMPANY.contact.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                <span className="text-sm">{COMPANY.contact.website}</span>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-sm text-gray-400">

            {/* Registered Company */}
            <div>
              <p className="font-medium text-gray-300 mb-2">{t("footer.registeredCompany")}</p>
              <p>{COMPANY.name}</p>
              <p>Company No. {COMPANY.companyNumber}</p>
              <p>{t("footer.registeredIn")}</p>
            </div>

            {/* Address */}
            <div>
              <p className="font-medium text-gray-300 mb-2">{t("footer.registeredOffice")}</p>
              <p>{COMPANY.address.street}</p>
              <p>{COMPANY.address.city}, {COMPANY.address.postcode}</p>
              <p>{COMPANY.address.country}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
              {getCopyrightText(currentYear, t("footer.allRights"))}
            </p>
            <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <svg className="w-3 h-3 md:w-4 md:h-4 text-green-500" viewBox="0 0 24 24" fill="currentColor">
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
