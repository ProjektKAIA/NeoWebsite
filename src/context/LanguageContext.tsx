"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "de";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    "nav.about": "About",
    "nav.features": "Features",
    "nav.contact": "Contact",
    "nav.contactUs": "Contact us",

    // Hero
    "hero.label": "THE NEXT-GEN MOBILE BANK",
    "hero.title1": "Smart money management",
    "hero.title2": "in your pocket",
    "hero.subtitle": "The operating system for modern money.",
    "hero.tagline": "Smart money builds empire",
    "hero.comingSoon": "Coming soon",
    "hero.downloadOn": "Download on the",
    "hero.getItOn": "GET IT ON",

    // Feature Highlights
    "highlights.multiCurrency.title": "Multi Currency Wallet",
    "highlights.multiCurrency.desc": "Keep, Buy and Sell over 110+ Global National Currencies",

    "highlights.onboarding.title": "Easy onboarding",
    "highlights.onboarding.desc": "Easy onboarding for UK & All EU Citizens",

    "highlights.dashboard.title": "All-in-one dashboard",
    "highlights.dashboard.desc": "No need to switch apps",

    "highlights.realtime.title": "Real-time updates",
    "highlights.realtime.desc": "Stay on top of your finances",

    "highlights.future.title": "Future-ready",
    "highlights.future.desc": "Build for Investment such as Worldwide Stocks, ETF's, Funds, Crypto's & Bonds",

    "highlights.design.title": "Sleek, intuitive design",
    "highlights.design.desc": "Built for modern users & Digital Nomads living around the Globe",

    "highlights.safe.title": "Your money is safe",
    "highlights.safe.desc": "Licensed and compliant in Lithuanian EU",

    // Main Features
    "features.label": "MORE THAN JUST A BANK",
    "features.title": "Always at your fingertips in Neobank",
    "features.desc": "Neobank is a type of direct bank that operates exclusively using online banking without traditional physical branch networks",

    "features.iban.title": "Instant IBAN & SEPA\nBanking Transfer",
    "features.iban.desc": "Fast and secure European transfers",

    "features.cards.title": "Digital and Physical\nVISA Debit Cards",
    "features.cards.desc": "Multi-currency accounts & card balances",

    "features.transfers.title": "Instant transfers\n& QR payments",
    "features.transfers.desc": "User to User Payments via QR-Code and Phone number",

    "features.crypto.title": "Real-time crypto rates\n& market data",
    "features.crypto.desc": "Buy, Hold and Sell over 583+ Cryptocurrencies",

    "features.investments.title": "Smart Global Diversified\nInvestments with live insights",
    "features.investments.desc": "Buy listed Stocks, Funds, ETF's, Bonds directly on USA, UK, EU, Japan, Hong Kong, Singapore Stock Exchanges",

    "features.chat.title": "Chat with friends\n& send money",
    "features.chat.desc": "Live Chat with your Local & Global friends with the option to send Money digitally inside the Chat",

    "features.support.title": "24/7 customer support\n& security tools",
    "features.support.desc": "Always here to help you",

    "features.security.title": "End-to-end encryption\n& Biometric or 2FA login",
    "features.security.desc": "Your security is our priority",

    // CTA
    "cta.label": "DESIGNED FOR MODERN LIFE",
    "cta.title": "Feel free to contact us",
    "cta.desc": "Neoneo bank gives users the tools to send, save, invest, and grow from one beautifully simple app",
    "cta.button": "Contact us",

    // Footer
    "footer.description": "The next-generation mobile bank for modern life. Banking, crypto, investments and payments — all in one beautifully simple app.",
    "footer.downloadOn": "Download on the",
    "footer.getItOn": "GET IT ON",
    "footer.product": "Product",
    "footer.features": "Features",
    "footer.about": "About Us",
    "footer.support": "Support",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.imprint": "Imprint",
    "footer.cookies": "Cookie Policy",
    "footer.registeredCompany": "Registered Company",
    "footer.registeredIn": "Registered in England & Wales",
    "footer.registeredOffice": "Registered Office",
    "footer.management": "Management",
    "footer.allRights": "All rights reserved.",
    "footer.regulated": "UK Registered Company",

    // Tech Partners
    "partners.label": "POWERED BY INDUSTRY LEADERS",
    "partners.title": "Enterprise-Grade Infrastructure",
    "partners.subtitle": "We partner with world-class technology providers to deliver secure, reliable, and scalable financial services.",
    "partners.architecture": "Our Technology Stack",

    "partners.nium.desc": "Global banking infrastructure powering payments in 190+ countries with real-time settlement capabilities.",
    "partners.nium.feature1": "Instant IBAN & Multi-Currency Accounts",
    "partners.nium.feature2": "SEPA & SWIFT Transfers",
    "partners.nium.feature3": "Virtual & Physical Card Issuance",
    "partners.nium.feature4": "Real-time FX in 100+ Markets",

    "partners.kraken.desc": "Industry-leading crypto exchange providing secure digital asset trading and custody solutions.",
    "partners.kraken.feature1": "400+ Cryptocurrencies",
    "partners.kraken.feature2": "Fiat On/Off Ramp",
    "partners.kraken.feature3": "Institutional-Grade Security",
    "partners.kraken.feature4": "24/7 Trading & Staking",

    "partners.twelvedata.desc": "Professional-grade financial market data covering global stocks, forex, crypto, and more.",
    "partners.twelvedata.feature1": "160,000+ Stock Symbols",
    "partners.twelvedata.feature2": "Real-time WebSocket Streaming",
    "partners.twelvedata.feature3": "25,000+ ETFs & Funds",
    "partners.twelvedata.feature4": "99.95% Uptime SLA",

    "partners.arch.banking": "Banking",
    "partners.arch.crypto": "Crypto",
    "partners.arch.investments": "Investments",
    "partners.arch.payments": "Payments",
    "partners.arch.niumApi": "IBAN, Cards, Payments",
    "partners.arch.krakenApi": "Crypto Trading & Custody",
    "partners.arch.twelvedataApi": "Market Data & Analytics",

    "partners.networks": "Connected to Global Payment Networks",
  },
  de: {
    // Header
    "nav.about": "Über uns",
    "nav.features": "Funktionen",
    "nav.contact": "Kontakt",
    "nav.contactUs": "Kontaktieren Sie uns",

    // Hero
    "hero.label": "DIE MOBILE BANK DER NÄCHSTEN GENERATION",
    "hero.title1": "Smartes Geldmanagement",
    "hero.title2": "in deiner Tasche",
    "hero.subtitle": "Das Betriebssystem für modernes Geld.",
    "hero.tagline": "Smartes Geld baut Imperien",
    "hero.comingSoon": "Bald verfügbar",
    "hero.downloadOn": "Laden im",
    "hero.getItOn": "JETZT BEI",

    // Feature Highlights
    "highlights.multiCurrency.title": "Multi-Währungs-Wallet",
    "highlights.multiCurrency.desc": "Halten, Kaufen und Verkaufen von über 110+ globalen Landeswährungen",

    "highlights.onboarding.title": "Einfache Registrierung",
    "highlights.onboarding.desc": "Einfache Registrierung für UK & alle EU-Bürger",

    "highlights.dashboard.title": "Alles-in-einem Dashboard",
    "highlights.dashboard.desc": "Kein App-Wechsel nötig",

    "highlights.realtime.title": "Echtzeit-Updates",
    "highlights.realtime.desc": "Behalte deine Finanzen im Blick",

    "highlights.future.title": "Zukunftssicher",
    "highlights.future.desc": "Gebaut für Investments wie weltweite Aktien, ETFs, Fonds, Kryptos & Anleihen",

    "highlights.design.title": "Elegantes, intuitives Design",
    "highlights.design.desc": "Entwickelt für moderne Nutzer & Digitale Nomaden weltweit",

    "highlights.safe.title": "Dein Geld ist sicher",
    "highlights.safe.desc": "Lizenziert und konform in der litauischen EU",

    // Main Features
    "features.label": "MEHR ALS NUR EINE BANK",
    "features.title": "Immer griffbereit in der Neobank",
    "features.desc": "Neobank ist eine Direktbank, die ausschließlich Online-Banking ohne traditionelles Filialnetz anbietet",

    "features.iban.title": "Sofortige IBAN & SEPA\nBanküberweisungen",
    "features.iban.desc": "Schnelle und sichere europäische Überweisungen",

    "features.cards.title": "Digitale und physische\nVISA Debitkarten",
    "features.cards.desc": "Multi-Währungs-Konten & Kartensalden",

    "features.transfers.title": "Sofortige Überweisungen\n& QR-Zahlungen",
    "features.transfers.desc": "Nutzer-zu-Nutzer Zahlungen via QR-Code und Telefonnummer",

    "features.crypto.title": "Echtzeit-Kryptokurse\n& Marktdaten",
    "features.crypto.desc": "Kaufen, Halten und Verkaufen von über 583+ Kryptowährungen",

    "features.investments.title": "Smarte globale diversifizierte\nInvestments mit Live-Einblicken",
    "features.investments.desc": "Kaufe gelistete Aktien, Fonds, ETFs, Anleihen direkt an USA, UK, EU, Japan, Hongkong, Singapur Börsen",

    "features.chat.title": "Mit Freunden chatten\n& Geld senden",
    "features.chat.desc": "Live-Chat mit lokalen & globalen Freunden mit der Option, Geld digital im Chat zu senden",

    "features.support.title": "24/7 Kundensupport\n& Sicherheitstools",
    "features.support.desc": "Immer für dich da",

    "features.security.title": "Ende-zu-Ende-Verschlüsselung\n& Biometrie oder 2FA Login",
    "features.security.desc": "Deine Sicherheit ist unsere Priorität",

    // CTA
    "cta.label": "DESIGNED FÜR MODERNES LEBEN",
    "cta.title": "Kontaktiere uns gerne",
    "cta.desc": "Neoneo Bank gibt Nutzern die Tools zum Senden, Sparen, Investieren und Wachsen aus einer wunderschön einfachen App",
    "cta.button": "Kontaktieren Sie uns",

    // Footer
    "footer.description": "Die mobile Bank der nächsten Generation für modernes Leben. Banking, Krypto, Investments und Zahlungen — alles in einer wunderschön einfachen App.",
    "footer.downloadOn": "Laden im",
    "footer.getItOn": "JETZT BEI",
    "footer.product": "Produkt",
    "footer.features": "Funktionen",
    "footer.about": "Über uns",
    "footer.support": "Support",
    "footer.legal": "Rechtliches",
    "footer.privacy": "Datenschutz",
    "footer.terms": "AGB",
    "footer.imprint": "Impressum",
    "footer.cookies": "Cookie-Richtlinie",
    "footer.registeredCompany": "Registrierte Firma",
    "footer.registeredIn": "Registriert in England & Wales",
    "footer.registeredOffice": "Firmensitz",
    "footer.management": "Geschäftsführung",
    "footer.allRights": "Alle Rechte vorbehalten.",
    "footer.regulated": "UK Registriertes Unternehmen",

    // Tech Partners
    "partners.label": "POWERED BY BRANCHENFÜHRERN",
    "partners.title": "Enterprise-Grade Infrastruktur",
    "partners.subtitle": "Wir arbeiten mit erstklassigen Technologieanbietern zusammen, um sichere, zuverlässige und skalierbare Finanzdienstleistungen anzubieten.",
    "partners.architecture": "Unsere Technologie-Architektur",

    "partners.nium.desc": "Globale Banking-Infrastruktur für Zahlungen in 190+ Ländern mit Echtzeit-Abwicklung.",
    "partners.nium.feature1": "Sofortige IBAN & Multi-Währungs-Konten",
    "partners.nium.feature2": "SEPA & SWIFT Überweisungen",
    "partners.nium.feature3": "Virtuelle & physische Kartenausgabe",
    "partners.nium.feature4": "Echtzeit-FX in 100+ Märkten",

    "partners.kraken.desc": "Branchenführende Krypto-Börse mit sicheren Digital-Asset-Trading und Verwahrungslösungen.",
    "partners.kraken.feature1": "400+ Kryptowährungen",
    "partners.kraken.feature2": "Fiat Ein-/Auszahlung",
    "partners.kraken.feature3": "Institutionelle Sicherheit",
    "partners.kraken.feature4": "24/7 Trading & Staking",

    "partners.twelvedata.desc": "Professionelle Finanzmarktdaten für globale Aktien, Forex, Krypto und mehr.",
    "partners.twelvedata.feature1": "160.000+ Aktien-Symbole",
    "partners.twelvedata.feature2": "Echtzeit WebSocket-Streaming",
    "partners.twelvedata.feature3": "25.000+ ETFs & Fonds",
    "partners.twelvedata.feature4": "99,95% Uptime SLA",

    "partners.arch.banking": "Banking",
    "partners.arch.crypto": "Krypto",
    "partners.arch.investments": "Investments",
    "partners.arch.payments": "Zahlungen",
    "partners.arch.niumApi": "IBAN, Karten, Zahlungen",
    "partners.arch.krakenApi": "Krypto-Trading & Verwahrung",
    "partners.arch.twelvedataApi": "Marktdaten & Analytics",

    "partners.networks": "Verbunden mit globalen Zahlungsnetzwerken",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
