"use client";

import { Header, Footer, CookieBanner } from "@/components";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY } from "@/constants/company";
import Link from "next/link";
import { ArrowLeft, Target, Users, Globe, Rocket, Shield, Heart, Headphones, MessageCircle } from "lucide-react";

export default function AboutPage() {
  const { language } = useLanguage();

  const values = language === "de" ? [
    {
      icon: Target,
      title: "Mission",
      desc: "Finanzielle Freiheit für alle – unabhängig von Herkunft, Bonität oder Standort."
    },
    {
      icon: Users,
      title: "Für alle",
      desc: "Wir glauben, dass jeder Zugang zu modernen Finanzdienstleistungen verdient."
    },
    {
      icon: Globe,
      title: "Global denken",
      desc: "Entwickelt für digitale Nomaden und Menschen, die weltweit leben und arbeiten."
    },
    {
      icon: Shield,
      title: "Sicherheit zuerst",
      desc: "Deine Daten und dein Geld sind bei uns durch modernste Technologie geschützt."
    },
    {
      icon: Rocket,
      title: "Innovation",
      desc: "Wir entwickeln die Bank der Zukunft mit modernster Technologie."
    },
    {
      icon: Heart,
      title: "Transparenz",
      desc: "Keine versteckten Gebühren. Was du siehst, ist was du bekommst."
    },
    {
      icon: Headphones,
      title: "Echter Support",
      desc: "Schluss mit endlosen Warteschleifen und Chatbots. Neo, unser KI-Assistent, löst deine Probleme sofort – rund um die Uhr, persönlich und auf den Punkt."
    }
  ] : [
    {
      icon: Target,
      title: "Mission",
      desc: "Financial freedom for everyone – regardless of origin, credit score or location."
    },
    {
      icon: Users,
      title: "For Everyone",
      desc: "We believe everyone deserves access to modern financial services."
    },
    {
      icon: Globe,
      title: "Think Global",
      desc: "Built for digital nomads and people who live and work worldwide."
    },
    {
      icon: Shield,
      title: "Security First",
      desc: "Your data and money are protected by state-of-the-art technology."
    },
    {
      icon: Rocket,
      title: "Innovation",
      desc: "We're building the bank of the future with cutting-edge technology."
    },
    {
      icon: Heart,
      title: "Transparency",
      desc: "No hidden fees. What you see is what you get."
    },
    {
      icon: Headphones,
      title: "Real Support",
      desc: "No more endless hold times and useless chatbots. Neo, our AI assistant, solves your problems instantly – 24/7, personal, and to the point."
    }
  ];

  const timeline = language === "de" ? [
    { year: "2024", title: "Gründung", desc: `${COMPANY.name} wird in London gegründet` },
    { year: "2025", title: "Entwicklung", desc: "Aufbau der Infrastruktur und Partnerschaften" },
    { year: "2026", title: "Launch", desc: `Geplanter Start der ${COMPANY.tradingAs} App` },
    { year: "Zukunft", title: "Wachstum", desc: "Expansion in weitere Märkte weltweit" }
  ] : [
    { year: "2024", title: "Foundation", desc: `${COMPANY.name} founded in London` },
    { year: "2025", title: "Development", desc: "Building infrastructure and partnerships" },
    { year: "2026", title: "Launch", desc: `Planned launch of ${COMPANY.tradingAs} app` },
    { year: "Future", title: "Growth", desc: "Expansion into more markets worldwide" }
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
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
                {language === "de" ? "ÜBER UNS" : "ABOUT US"}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {language === "de" ? "Die Bank für die nächste Generation" : "The Bank for the Next Generation"}
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                {language === "de"
                  ? "Wir bauen eine Bank, die so funktioniert, wie du lebst – digital, global und ohne Kompromisse bei der Sicherheit."
                  : "We're building a bank that works the way you live – digital, global, and without compromising on security."}
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  {language === "de" ? "Unsere Geschichte" : "Our Story"}
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    {language === "de"
                      ? "NeoNeo Bank wurde aus einer einfachen Überzeugung heraus gegründet: Jeder verdient Zugang zu modernen, fairen und transparenten Finanzdienstleistungen."
                      : "NeoNeo Bank was founded from a simple belief: everyone deserves access to modern, fair, and transparent financial services."}
                  </p>
                  <p>
                    {language === "de"
                      ? "Als digitale Nomaden und Tech-Enthusiasten haben wir selbst erlebt, wie frustrierend traditionelle Banken sein können – hohe Gebühren, komplizierte Prozesse und mangelnde Flexibilität."
                      : "As digital nomads and tech enthusiasts, we've experienced firsthand how frustrating traditional banks can be – high fees, complicated processes, and lack of flexibility."}
                  </p>
                  <p>
                    {language === "de"
                      ? "Mit NeoNeo Bank schaffen wir eine Alternative: Eine Bank, die dich versteht, egal wo du bist oder wohin du gehst."
                      : "With NeoNeo Bank, we're creating an alternative: A bank that understands you, no matter where you are or where you're going."}
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-4">
                  {language === "de" ? "Das Betriebssystem für modernes Banking" : "The Operating System for Modern Banking"}
                </h3>
                <p className="text-white/80 mb-6">
                  {language === "de"
                    ? "Banking, Krypto, Investments und Zahlungen – alles in einer App, die für das moderne Leben entwickelt wurde."
                    : "Banking, crypto, investments, and payments – all in one app built for modern life."}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">190+</div>
                    <div className="text-sm text-white/80">{language === "de" ? "Währungen" : "Currencies"}</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">596+</div>
                    <div className="text-sm text-white/80">{language === "de" ? "Kryptos" : "Cryptos"}</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm text-white/80">{language === "de" ? "Länder" : "Countries"}</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm text-white/80">{language === "de" ? "Support" : "Support"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
              {language === "de" ? "Unsere Werte" : "Our Values"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
              {language === "de" ? "Unsere Reise" : "Our Journey"}
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2"></div>

              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-12 md:pl-0`}>
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                      <span className="text-primary font-bold">{item.year}</span>
                      <h3 className="font-semibold text-gray-900 mt-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 border-4 border-white shadow"></div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
              {language === "de" ? "Rechtliche Informationen" : "Legal Information"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  {language === "de" ? "Registrierte Firma" : "Registered Company"}
                </h3>
                <p className="text-gray-600">
                  <strong>{COMPANY.name}</strong><br />
                  Company No. {COMPANY.companyNumber}<br />
                  {language === "de" ? `Registriert in ${COMPANY.registeredIn}` : `Registered in ${COMPANY.registeredIn}`}
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  {language === "de" ? "Firmensitz" : "Registered Office"}
                </h3>
                <p className="text-gray-600">
                  {COMPANY.address.street}<br />
                  {COMPANY.address.city}, {COMPANY.address.postcode}<br />
                  {COMPANY.address.country}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {language === "de" ? "Werde Teil der Zukunft" : "Be Part of the Future"}
            </h2>
            <p className="text-gray-400 mb-8">
              {language === "de"
                ? "Kontaktiere uns und erfahre als Erster, wenn wir starten."
                : "Contact us and be the first to know when we launch."}
            </p>
            <a
              href="https://t.me/neoneobank"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
            >
              {language === "de" ? "Kontaktiere uns" : "Contact Us"}
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
