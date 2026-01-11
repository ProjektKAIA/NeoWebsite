"use client";

import { Header, Footer, CookieBanner } from "@/components";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { ArrowLeft, Shield, Zap, Globe, Lock, Server, Check } from "lucide-react";

export default function TechnologyPage() {
  const { language } = useLanguage();

  const partners = language === "de" ? [
    {
      name: "Nium",
      category: "Banking Infrastructure",
      description: "Globale Banking-Infrastruktur, die Zahlungen in 190+ Ländern mit Echtzeit-Abwicklung ermöglicht.",
      features: [
        "Sofortige IBAN & Multi-Währungs-Konten",
        "SEPA & SWIFT Überweisungen",
        "Virtuelle & physische Kartenausgabe",
        "Echtzeit-FX in 100+ Märkten",
        "Regulierte Infrastruktur weltweit"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Kraken",
      category: "Crypto Exchange",
      description: "Branchenführende Krypto-Börse mit sicheren Digital-Asset-Trading und Verwahrungslösungen.",
      features: [
        "596+ Kryptowährungen",
        "Fiat Ein-/Auszahlung",
        "Institutionelle Sicherheit",
        "24/7 Trading & Staking",
        "Cold Storage Verwahrung"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Twelve Data",
      category: "Market Data",
      description: "Professionelle Finanzmarktdaten für globale Aktien, Forex, Krypto und mehr.",
      features: [
        "160.000+ Aktien-Symbole",
        "Echtzeit WebSocket-Streaming",
        "25.000+ ETFs & Fonds",
        "99,95% Uptime SLA",
        "Historische Daten & Analytics"
      ],
      color: "from-green-500 to-green-600"
    }
  ] : [
    {
      name: "Nium",
      category: "Banking Infrastructure",
      description: "Global banking infrastructure powering payments in 190+ countries with real-time settlement capabilities.",
      features: [
        "Instant IBAN & Multi-Currency Accounts",
        "SEPA & SWIFT Transfers",
        "Virtual & Physical Card Issuance",
        "Real-time FX in 100+ Markets",
        "Regulated infrastructure worldwide"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Kraken",
      category: "Crypto Exchange",
      description: "Industry-leading crypto exchange providing secure digital asset trading and custody solutions.",
      features: [
        "596+ Cryptocurrencies",
        "Fiat On/Off Ramp",
        "Institutional-Grade Security",
        "24/7 Trading & Staking",
        "Cold Storage Custody"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Twelve Data",
      category: "Market Data",
      description: "Professional-grade financial market data covering global stocks, forex, crypto, and more.",
      features: [
        "160,000+ Stock Symbols",
        "Real-time WebSocket Streaming",
        "25,000+ ETFs & Funds",
        "99.95% Uptime SLA",
        "Historical Data & Analytics"
      ],
      color: "from-green-500 to-green-600"
    }
  ];

  const securityFeatures = language === "de" ? [
    {
      icon: Lock,
      title: "Ende-zu-Ende-Verschlüsselung",
      desc: "Alle Daten werden mit AES-256 verschlüsselt übertragen und gespeichert."
    },
    {
      icon: Shield,
      title: "Biometrische Authentifizierung",
      desc: "Face ID, Touch ID und Fingerabdruck für sicheren Zugang zur App."
    },
    {
      icon: Server,
      title: "Sichere Infrastruktur",
      desc: "Gehostet in ISO 27001 zertifizierten Rechenzentren in der EU."
    },
    {
      icon: Zap,
      title: "Echtzeit-Monitoring",
      desc: "24/7 Überwachung auf verdächtige Aktivitäten und Betrugsversuche."
    }
  ] : [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      desc: "All data is encrypted in transit and at rest using AES-256 encryption."
    },
    {
      icon: Shield,
      title: "Biometric Authentication",
      desc: "Face ID, Touch ID, and fingerprint for secure app access."
    },
    {
      icon: Server,
      title: "Secure Infrastructure",
      desc: "Hosted in ISO 27001 certified data centers in the EU."
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      desc: "24/7 monitoring for suspicious activity and fraud attempts."
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            <span>{language === "de" ? "Zurück zur Startseite" : "Back to Home"}</span>
          </Link>
        </div>

        {/* Hero */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
                {language === "de" ? "TECHNOLOGIE" : "TECHNOLOGY"}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {language === "de" ? "Enterprise-Grade Infrastruktur" : "Enterprise-Grade Infrastructure"}
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                {language === "de"
                  ? "Wir arbeiten mit weltweit führenden Technologiepartnern zusammen, um sichere, zuverlässige und skalierbare Finanzdienstleistungen anzubieten."
                  : "We partner with world-class technology providers to deliver secure, reliable, and scalable financial services."}
              </p>
            </div>
          </div>
        </section>

        {/* Architecture Overview */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
              {language === "de" ? "Unsere Architektur" : "Our Architecture"}
            </h2>

            {/* Visual Architecture */}
            <div className="max-w-4xl mx-auto mb-16">
              {/* App Layer */}
              <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-6 text-white text-center mb-6">
                <div className="text-xl font-semibold mb-3">NeoNeo Bank App</div>
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Banking</span>
                  <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Crypto</span>
                  <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Investments</span>
                  <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Payments</span>
                  <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Chat</span>
                </div>
              </div>

              {/* Connection */}
              <div className="flex justify-center mb-6">
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-8 bg-gray-300"></div>
                  <div className="bg-white border-2 border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-600">
                    Secure API Layer
                  </div>
                  <div className="w-0.5 h-8 bg-gray-300"></div>
                </div>
              </div>

              {/* Partner APIs */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-5 border-2 border-blue-200 text-center hover:border-blue-400 transition-colors">
                  <div className="font-semibold text-gray-900 mb-1">Nium API</div>
                  <div className="text-xs text-gray-500">{language === "de" ? "IBAN, Karten, Zahlungen" : "IBAN, Cards, Payments"}</div>
                </div>
                <div className="bg-white rounded-xl p-5 border-2 border-purple-200 text-center hover:border-purple-400 transition-colors">
                  <div className="font-semibold text-gray-900 mb-1">Kraken API</div>
                  <div className="text-xs text-gray-500">{language === "de" ? "Krypto-Trading & Verwahrung" : "Crypto Trading & Custody"}</div>
                </div>
                <div className="bg-white rounded-xl p-5 border-2 border-green-200 text-center hover:border-green-400 transition-colors">
                  <div className="font-semibold text-gray-900 mb-1">Twelve Data API</div>
                  <div className="text-xs text-gray-500">{language === "de" ? "Marktdaten & Analytics" : "Market Data & Analytics"}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Detail */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              {language === "de" ? "Unsere Technologiepartner" : "Our Technology Partners"}
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              {language === "de"
                ? "Wir setzen auf bewährte, sichere Infrastruktur von führenden Anbietern."
                : "We rely on proven, secure infrastructure from leading providers."}
            </p>

            <div className="space-y-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    {/* Partner Header */}
                    <div className={`bg-gradient-to-br ${partner.color} p-8 text-white`}>
                      <span className="text-sm font-medium text-white/80">{partner.category}</span>
                      <h3 className="text-3xl font-bold mt-2 mb-4">{partner.name}</h3>
                      <p className="text-white/90">{partner.description}</p>
                    </div>

                    {/* Partner Features */}
                    <div className="lg:col-span-2 p-8">
                      <h4 className="font-semibold text-gray-900 mb-4">
                        {language === "de" ? "Features & Capabilities" : "Features & Capabilities"}
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {partner.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="py-16 md:py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {language === "de" ? "Sicherheit auf höchstem Niveau" : "Security at the Highest Level"}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {language === "de"
                  ? "Deine Sicherheit ist unsere höchste Priorität. Wir verwenden die neuesten Technologien, um deine Daten und dein Geld zu schützen."
                  : "Your security is our top priority. We use the latest technologies to protect your data and money."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Payment Networks */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {language === "de" ? "Verbunden mit globalen Netzwerken" : "Connected to Global Networks"}
            </h2>
            <p className="text-gray-600 mb-10">
              {language === "de"
                ? "Wir sind mit den wichtigsten Zahlungsnetzwerken weltweit verbunden."
                : "We're connected to the most important payment networks worldwide."}
            </p>

            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {/* VISA */}
              <div className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="h-8 md:h-10" viewBox="0 0 80 26" fill="currentColor">
                  <path d="M30.75 1.5L24.5 24.5H19L25.25 1.5H30.75ZM52.5 16.25L55 8.5L56.5 16.25H52.5ZM58.25 24.5H63L59 1.5H54.25C53.25 1.5 52.25 2.25 52 3.25L44 24.5H49.5L50.5 21.5H57.25L58.25 24.5ZM46.5 17C46.5 10.75 37.75 10.5 37.75 7.5C37.75 6.5 38.75 5.5 40.5 5.25C41.5 5.25 44 5 47 6.5L48 2C46.5 1.5 44.5 1 42 1C36.75 1 33 4 33 8.25C33 11.5 36 13.25 38.25 14.5C40.5 15.75 41.25 16.5 41.25 17.5C41.25 19 39.5 19.75 38 19.75C35.5 19.75 33.25 19 31.5 18L30.5 22.25C32.5 23 35.25 23.75 38 23.75C43.5 24 47 21 46.5 17ZM20.5 1.5L12 24.5H6.25L2.25 5.25C2 4.25 1.75 3.75 1 3.25C-0.25 2.5 1.5 2 3.5 1.5L3.75 1.5L10.75 1.5L12 10.25L14 1.5H20.5Z"/>
                </svg>
              </div>

              {/* Mastercard */}
              <div className="flex items-center gap-1">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-500 opacity-60"></div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-yellow-500 opacity-60 -ml-4"></div>
              </div>

              {/* SEPA */}
              <div className="border-2 border-gray-300 rounded-lg px-4 py-2 text-gray-400 font-bold">
                SEPA
              </div>

              {/* SWIFT */}
              <div className="text-gray-400 font-bold text-xl">
                SWIFT
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {language === "de" ? "Erlebe die Zukunft des Bankings" : "Experience the Future of Banking"}
            </h2>
            <p className="text-white/80 mb-8">
              {language === "de"
                ? "Bereit für modernste Technologie und erstklassige Sicherheit?"
                : "Ready for cutting-edge technology and top-tier security?"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                {language === "de" ? "Preise ansehen" : "View Pricing"}
              </Link>
              <Link href="/features" className="bg-white/20 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors">
                {language === "de" ? "Alle Features" : "All Features"}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
