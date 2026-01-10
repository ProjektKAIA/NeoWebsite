"use client";

import { useLanguage } from "@/context/LanguageContext";

// Nium Logo
function NiumLogo({ className = "h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 8h6v24h-6V8zm8 8h6v16h-6V16zm8-4h6v20h-6V12zm8 8h6v12h-6V20z" fill="currentColor"/>
      <text x="48" y="28" fontFamily="system-ui, sans-serif" fontSize="20" fontWeight="700" fill="currentColor">nium</text>
    </svg>
  );
}

// Kraken Logo
function KrakenLogo({ className = "h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="16" fill="currentColor" opacity="0.1"/>
      <path d="M20 8c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S26.627 8 20 8zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10z" fill="currentColor"/>
      <path d="M16 16l4 4-4 4m8-8l-4 4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="44" y="27" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="600" fill="currentColor">kraken</text>
    </svg>
  );
}

// Twelve Data Logo
function TwelveDataLogo({ className = "h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="12" width="6" height="20" rx="1" fill="currentColor" opacity="0.3"/>
      <rect x="12" y="8" width="6" height="24" rx="1" fill="currentColor" opacity="0.5"/>
      <rect x="20" y="14" width="6" height="18" rx="1" fill="currentColor" opacity="0.7"/>
      <rect x="28" y="6" width="6" height="26" rx="1" fill="currentColor"/>
      <text x="42" y="27" fontFamily="system-ui, sans-serif" fontSize="16" fontWeight="600" fill="currentColor">Twelve Data</text>
    </svg>
  );
}

// VISA Logo
function VisaLogo({ className = "h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30.75 1.5L24.5 24.5H19L25.25 1.5H30.75ZM52.5 16.25L55 8.5L56.5 16.25H52.5ZM58.25 24.5H63L59 1.5H54.25C53.25 1.5 52.25 2.25 52 3.25L44 24.5H49.5L50.5 21.5H57.25L58.25 24.5ZM46.5 17C46.5 10.75 37.75 10.5 37.75 7.5C37.75 6.5 38.75 5.5 40.5 5.25C41.5 5.25 44 5 47 6.5L48 2C46.5 1.5 44.5 1 42 1C36.75 1 33 4 33 8.25C33 11.5 36 13.25 38.25 14.5C40.5 15.75 41.25 16.5 41.25 17.5C41.25 19 39.5 19.75 38 19.75C35.5 19.75 33.25 19 31.5 18L30.5 22.25C32.5 23 35.25 23.75 38 23.75C43.5 24 47 21 46.5 17ZM20.5 1.5L12 24.5H6.25L2.25 5.25C2 4.25 1.75 3.75 1 3.25C-0.25 2.5 1.5 2 3.5 1.5L3.75 1.5L10.75 1.5L12 10.25L14 1.5H20.5Z" fill="currentColor"/>
    </svg>
  );
}

// Mastercard Logo
function MastercardLogo({ className = "h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="15" r="13" fill="#EB001B"/>
      <circle cx="33" cy="15" r="13" fill="#F79E1B"/>
      <path d="M24 5.5C26.5 7.5 28 10.5 28 15C28 19.5 26.5 22.5 24 24.5C21.5 22.5 20 19.5 20 15C20 10.5 21.5 7.5 24 5.5Z" fill="#FF5F00"/>
    </svg>
  );
}

// SEPA Logo
function SepaLogo({ className = "h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="58" height="22" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
      <text x="8" y="17" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="700" fill="currentColor">SEPA</text>
    </svg>
  );
}

interface PartnerCardProps {
  logo: React.ReactNode;
  name: string;
  description: string;
  features: string[];
}

function PartnerCard({ logo, name, description, features }: PartnerCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
      <div className="h-10 md:h-12 flex items-center text-gray-800 mb-4 md:mb-6">
        {logo}
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">{name}</h3>
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-500">
            <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TechPartners() {
  const { language, t } = useLanguage();

  const partners = [
    {
      logo: <NiumLogo className="h-10" />,
      name: "Nium",
      description: t("partners.nium.desc"),
      features: [
        t("partners.nium.feature1"),
        t("partners.nium.feature2"),
        t("partners.nium.feature3"),
        t("partners.nium.feature4"),
      ],
    },
    {
      logo: <KrakenLogo className="h-10" />,
      name: "Kraken",
      description: t("partners.kraken.desc"),
      features: [
        t("partners.kraken.feature1"),
        t("partners.kraken.feature2"),
        t("partners.kraken.feature3"),
        t("partners.kraken.feature4"),
      ],
    },
    {
      logo: <TwelveDataLogo className="h-10" />,
      name: "Twelve Data",
      description: t("partners.twelvedata.desc"),
      features: [
        t("partners.twelvedata.feature1"),
        t("partners.twelvedata.feature2"),
        t("partners.twelvedata.feature3"),
        t("partners.twelvedata.feature4"),
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
            {t("partners.label")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            {t("partners.title")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {t("partners.subtitle")}
          </p>
        </div>

        {/* Partner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {partners.map((partner, index) => (
            <PartnerCard key={index} {...partner} />
          ))}
        </div>

        {/* Architecture Diagram */}
        <div className="bg-white rounded-2xl p-6 md:p-12 shadow-sm border border-gray-100">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-6 md:mb-10">
            {t("partners.architecture")}
          </h3>

          <div className="max-w-4xl mx-auto">
            {/* NeoNeo Bank App Layer */}
            <div className="bg-gradient-to-r from-primary to-primary/80 rounded-xl md:rounded-2xl p-4 md:p-6 text-white text-center mb-4 md:mb-6">
              <div className="text-base md:text-lg font-semibold mb-2">NeoNeo Bank App</div>
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm opacity-90">
                <span className="bg-white/20 px-2 md:px-3 py-1 rounded-full">{t("partners.arch.banking")}</span>
                <span className="bg-white/20 px-2 md:px-3 py-1 rounded-full">{t("partners.arch.crypto")}</span>
                <span className="bg-white/20 px-2 md:px-3 py-1 rounded-full">{t("partners.arch.investments")}</span>
                <span className="bg-white/20 px-2 md:px-3 py-1 rounded-full">{t("partners.arch.payments")}</span>
              </div>
            </div>

            {/* Connection Lines */}
            <div className="flex justify-center mb-4 md:mb-6">
              <div className="w-px h-6 md:h-8 bg-gray-300"></div>
            </div>

            {/* API Layer */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
              <div className="bg-gray-100 rounded-xl p-4 md:p-5 text-center border-2 border-transparent hover:border-primary/30 transition-colors">
                <div className="text-gray-800 font-semibold mb-1 md:mb-2 text-sm md:text-base">Nium API</div>
                <div className="text-xs text-gray-500">{t("partners.arch.niumApi")}</div>
              </div>
              <div className="bg-gray-100 rounded-xl p-4 md:p-5 text-center border-2 border-transparent hover:border-primary/30 transition-colors">
                <div className="text-gray-800 font-semibold mb-1 md:mb-2 text-sm md:text-base">Kraken API</div>
                <div className="text-xs text-gray-500">{t("partners.arch.krakenApi")}</div>
              </div>
              <div className="bg-gray-100 rounded-xl p-4 md:p-5 text-center border-2 border-transparent hover:border-primary/30 transition-colors">
                <div className="text-gray-800 font-semibold mb-1 md:mb-2 text-sm md:text-base">Twelve Data API</div>
                <div className="text-xs text-gray-500">{t("partners.arch.twelvedataApi")}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Networks */}
        <div className="mt-10 md:mt-16 text-center">
          <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6">{t("partners.networks")}</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 opacity-60">
            <VisaLogo className="h-6 md:h-8" />
            <MastercardLogo className="h-8 md:h-10" />
            <SepaLogo className="h-6 md:h-8" />
            <div className="text-gray-400 font-semibold text-base md:text-lg">SWIFT</div>
          </div>
        </div>
      </div>
    </section>
  );
}
