"use client";

import { Header, Footer, CookieBanner } from "@/components";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY } from "@/constants/company";
import Link from "next/link";
import { ArrowLeft, Banknote, CreditCard, ArrowLeftRight, Bitcoin, TrendingUp, MessageCircle, Shield, Coins, Globe, Smartphone, Zap, Lock } from "lucide-react";

export default function FeaturesPage() {
  const { language } = useLanguage();

  const featureCategories = language === "de" ? [
    {
      title: "Banking",
      icon: Banknote,
      color: "bg-blue-500",
      features: [
        {
          title: "Sofortige IBAN",
          desc: "Erhalte deine persönliche IBAN innerhalb von Minuten nach der Kontoeröffnung.",
          icon: Banknote
        },
        {
          title: "SEPA Überweisungen",
          desc: "Schnelle und sichere Überweisungen in ganz Europa, Schweiz, Türkei und mehr.",
          icon: ArrowLeftRight
        },
        {
          title: "Multi-Währungs-Wallet",
          desc: "Halte, kaufe und verkaufe über 190+ globale Währungen in einer App.",
          icon: Globe
        },
        {
          title: "Echtzeit-Benachrichtigungen",
          desc: "Sofortige Push-Benachrichtigungen für alle Kontobewegungen.",
          icon: Zap
        }
      ]
    },
    {
      title: "Karten",
      icon: CreditCard,
      color: "bg-purple-500",
      features: [
        {
          title: "Virtuelle Debitkarte",
          desc: "Sofort einsetzbar für Online-Einkäufe und kontaktloses Bezahlen.",
          icon: Smartphone
        },
        {
          title: "Physische VISA Karte",
          desc: "Premium Debitkarte für weltweite Akzeptanz an Millionen Standorten.",
          icon: CreditCard
        },
        {
          title: "Karten-Kontrolle",
          desc: "Sperren, entsperren und Limits anpassen direkt in der App.",
          icon: Lock
        },
        {
          title: "Cashback & Rewards",
          desc: "Verdiene bei jedem Einkauf mit unseren Premium-Plänen.",
          icon: Coins
        }
      ]
    },
    {
      title: "Krypto",
      icon: Bitcoin,
      color: "bg-orange-500",
      features: [
        {
          title: "596+ Kryptowährungen",
          desc: "Kaufe, halte und verkaufe die beliebtesten Kryptowährungen.",
          icon: Bitcoin
        },
        {
          title: "Echtzeit-Kurse",
          desc: "Live Marktdaten und Kurse für alle unterstützten Coins.",
          icon: TrendingUp
        },
        {
          title: "Staking Rewards",
          desc: "Verdiene passives Einkommen durch Staking ausgewählter Coins.",
          icon: Coins
        },
        {
          title: "Sichere Verwahrung",
          desc: "Institutionelle Sicherheit durch unseren Partner Kraken.",
          icon: Shield
        }
      ]
    },
    {
      title: "Investments",
      icon: TrendingUp,
      color: "bg-green-500",
      features: [
        {
          title: "Globale Aktien",
          desc: "Investiere in Aktien an den größten Börsen weltweit (USA, UK, EU, Asien).",
          icon: TrendingUp
        },
        {
          title: "ETFs & Fonds",
          desc: "Zugang zu über 25.000 ETFs und Investmentfonds.",
          icon: Coins
        },
        {
          title: "Anleihen",
          desc: "Diversifiziere dein Portfolio mit Staats- und Unternehmensanleihen.",
          icon: Banknote
        },
        {
          title: "Live-Einblicke",
          desc: "Professionelle Marktdaten von Twelve Data für fundierte Entscheidungen.",
          icon: Zap
        }
      ]
    },
    {
      title: "Social & Chat",
      icon: MessageCircle,
      color: "bg-pink-500",
      features: [
        {
          title: "In-App Chat",
          desc: "Chatte mit Freunden direkt in der NEONEO App.",
          icon: MessageCircle
        },
        {
          title: "Geld senden im Chat",
          desc: "Sende Geld an Freunde während du chattest – schnell und einfach.",
          icon: ArrowLeftRight
        },
        {
          title: "QR-Code Zahlungen",
          desc: "Bezahle oder erhalte Geld durch einfaches Scannen eines QR-Codes.",
          icon: Smartphone
        },
        {
          title: "Geteilte Ausgaben",
          desc: "Teile Rechnungen und Ausgaben mit Gruppen (Coming Soon).",
          icon: Coins
        }
      ]
    },
    {
      title: "Sicherheit",
      icon: Shield,
      color: "bg-red-500",
      features: [
        {
          title: "Biometrische Anmeldung",
          desc: "Face ID, Touch ID oder Fingerabdruck für sicheren Zugang.",
          icon: Lock
        },
        {
          title: "2-Faktor-Authentifizierung",
          desc: "Zusätzliche Sicherheitsebene für alle wichtigen Aktionen.",
          icon: Shield
        },
        {
          title: "Ende-zu-Ende-Verschlüsselung",
          desc: "Alle deine Daten sind verschlüsselt und geschützt.",
          icon: Lock
        },
        {
          title: "24/7 Betrugsüberwachung",
          desc: "Automatische Erkennung verdächtiger Aktivitäten.",
          icon: Shield
        }
      ]
    }
  ] : [
    {
      title: "Banking",
      icon: Banknote,
      color: "bg-blue-500",
      features: [
        {
          title: "Instant IBAN",
          desc: "Get your personal IBAN within minutes of opening your account.",
          icon: Banknote
        },
        {
          title: "SEPA Transfers",
          desc: "Fast and secure transfers across Europe, Switzerland, Turkey and more.",
          icon: ArrowLeftRight
        },
        {
          title: "Multi-Currency Wallet",
          desc: "Hold, buy and sell over 190+ global currencies in one app.",
          icon: Globe
        },
        {
          title: "Real-time Notifications",
          desc: "Instant push notifications for all account movements.",
          icon: Zap
        }
      ]
    },
    {
      title: "Cards",
      icon: CreditCard,
      color: "bg-purple-500",
      features: [
        {
          title: "Virtual Debit Card",
          desc: "Instantly usable for online shopping and contactless payments.",
          icon: Smartphone
        },
        {
          title: "Physical VISA Card",
          desc: "Premium debit card accepted at millions of locations worldwide.",
          icon: CreditCard
        },
        {
          title: "Card Controls",
          desc: "Lock, unlock and adjust limits directly in the app.",
          icon: Lock
        },
        {
          title: "Cashback & Rewards",
          desc: "Earn on every purchase with our premium plans.",
          icon: Coins
        }
      ]
    },
    {
      title: "Crypto",
      icon: Bitcoin,
      color: "bg-orange-500",
      features: [
        {
          title: "596+ Cryptocurrencies",
          desc: "Buy, hold and sell the most popular cryptocurrencies.",
          icon: Bitcoin
        },
        {
          title: "Real-time Rates",
          desc: "Live market data and rates for all supported coins.",
          icon: TrendingUp
        },
        {
          title: "Staking Rewards",
          desc: "Earn passive income by staking selected coins.",
          icon: Coins
        },
        {
          title: "Secure Custody",
          desc: "Institutional-grade security through our partner Kraken.",
          icon: Shield
        }
      ]
    },
    {
      title: "Investments",
      icon: TrendingUp,
      color: "bg-green-500",
      features: [
        {
          title: "Global Stocks",
          desc: "Invest in stocks on the world's largest exchanges (USA, UK, EU, Asia).",
          icon: TrendingUp
        },
        {
          title: "ETFs & Funds",
          desc: "Access to over 25,000 ETFs and investment funds.",
          icon: Coins
        },
        {
          title: "Bonds",
          desc: "Diversify your portfolio with government and corporate bonds.",
          icon: Banknote
        },
        {
          title: "Live Insights",
          desc: "Professional market data from Twelve Data for informed decisions.",
          icon: Zap
        }
      ]
    },
    {
      title: "Social & Chat",
      icon: MessageCircle,
      color: "bg-pink-500",
      features: [
        {
          title: "In-App Chat",
          desc: "Chat with friends directly in the NEONEO app.",
          icon: MessageCircle
        },
        {
          title: "Send Money in Chat",
          desc: "Send money to friends while chatting – quick and easy.",
          icon: ArrowLeftRight
        },
        {
          title: "QR Code Payments",
          desc: "Pay or receive money by simply scanning a QR code.",
          icon: Smartphone
        },
        {
          title: "Split Expenses",
          desc: "Split bills and expenses with groups (Coming Soon).",
          icon: Coins
        }
      ]
    },
    {
      title: "Security",
      icon: Shield,
      color: "bg-red-500",
      features: [
        {
          title: "Biometric Login",
          desc: "Face ID, Touch ID or fingerprint for secure access.",
          icon: Lock
        },
        {
          title: "2-Factor Authentication",
          desc: "Additional security layer for all important actions.",
          icon: Shield
        },
        {
          title: "End-to-End Encryption",
          desc: "All your data is encrypted and protected.",
          icon: Lock
        },
        {
          title: "24/7 Fraud Monitoring",
          desc: "Automatic detection of suspicious activity.",
          icon: Shield
        }
      ]
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
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
              {language === "de" ? "ALLE FUNKTIONEN" : "ALL FEATURES"}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {language === "de" ? "Alles was du brauchst" : "Everything You Need"}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {language === "de"
                ? `Entdecke alle Features, die ${COMPANY.tradingAs} zur ultimativen Banking-App machen.`
                : `Discover all the features that make ${COMPANY.tradingAs} the ultimate banking app.`}
            </p>
          </div>
        </section>

        {/* Feature Categories */}
        {featureCategories.map((category, catIndex) => {
          const CategoryIcon = category.icon;
          return (
            <section key={catIndex} className={`py-16 md:py-20 ${catIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-10">
                  <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center`}>
                    <CategoryIcon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{category.title}</h2>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.features.map((feature, fIndex) => {
                    const FeatureIcon = feature.icon;
                    return (
                      <div key={fIndex} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:border-primary/20 transition-all">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                          <FeatureIcon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        })}

        {/* CTA */}
        <section className="py-16 md:py-20 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {language === "de" ? "Bereit loszulegen?" : "Ready to Get Started?"}
            </h2>
            <p className="text-white/80 mb-8">
              {language === "de"
                ? `Werde einer der Ersten, die ${COMPANY.tradingAs} erleben.`
                : `Be one of the first to experience ${COMPANY.tradingAs}.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                {language === "de" ? "Preise ansehen" : "View Pricing"}
              </Link>
              <a href={`mailto:${COMPANY.contact.email}`} className="bg-white/20 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors">
                {language === "de" ? "Kontaktiere uns" : "Contact Us"}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
