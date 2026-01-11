"use client";

import { useState } from "react";
import { Check, AlertCircle, Shield, Info } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  yearlyMonthly: string;
  features: PlanFeature[];
  isPopular?: boolean;
  color: string;
}

interface PricingPlansProps {
  showFullVersion?: boolean;
}

export default function PricingPlans({ showFullVersion = false }: PricingPlansProps) {
  const { language } = useLanguage();
  const [isYearly, setIsYearly] = useState(false);

  const plans: Plan[] = language === "de" ? [
    {
      name: "Standard",
      monthlyPrice: "Kostenlos",
      yearlyPrice: "Kostenlos",
      yearlyMonthly: "Kostenlos",
      color: "bg-gray-100",
      features: [
        { text: "IBAN Konto", included: true },
        { text: "Virtuelle Debitkarte", included: true },
        { text: "SEPA Überweisungen", included: true },
        { text: "Basis Krypto-Trading", included: true },
        { text: "In-App Support", included: true },
        { text: "Kostenlose Abhebungen: 200€/Monat", included: true },
      ],
    },
    {
      name: "Plus",
      monthlyPrice: "€4,99",
      yearlyPrice: "€47,88",
      yearlyMonthly: "€3,99",
      color: "bg-blue-100",
      features: [
        { text: "Alles aus Standard", included: true },
        { text: "Physische Debitkarte", included: true },
        { text: "Erweiterte Limits", included: true },
        { text: "Prioritäts-Support", included: true },
        { text: "Kostenlose Abhebungen: 400€/Monat", included: true },
        { text: "Keine Gebühren Wochenende FX", included: true },
      ],
    },
    {
      name: "Premium",
      monthlyPrice: "€9,99",
      yearlyPrice: "€95,88",
      yearlyMonthly: "€7,99",
      color: "bg-purple-100",
      isPopular: true,
      features: [
        { text: "Alles aus Plus", included: true },
        { text: "Premium Metallkarte", included: true },
        { text: "Unbegrenzte FX zum Interbankenkurs", included: true },
        { text: "Globale Krankenversicherung", included: true },
        { text: "Kostenlose Abhebungen: 800€/Monat", included: true },
        { text: "Lounge-Zugang weltweit", included: true },
      ],
    },
    {
      name: "Metal",
      monthlyPrice: "€17,99",
      yearlyPrice: "€167,88",
      yearlyMonthly: "€13,99",
      color: "bg-gray-800 text-white",
      features: [
        { text: "Alles aus Premium", included: true },
        { text: "Exklusive Metal-Karte", included: true },
        { text: "Cashback auf Kartenzahlungen", included: true },
        { text: "Concierge Service", included: true },
        { text: "Kostenlose Abhebungen: 1.500€/Monat", included: true },
        { text: "Exklusive Partner-Angebote", included: true },
      ],
    },
    {
      name: "Ultra",
      monthlyPrice: "€59,99",
      yearlyPrice: "€575,88",
      yearlyMonthly: "€47,99",
      color: "bg-gradient-to-br from-amber-400 to-orange-500 text-white",
      features: [
        { text: "Alles aus Metal", included: true },
        { text: "Ultra Premium Karte (limitiert)", included: true },
        { text: "Höchste Cashback-Raten", included: true },
        { text: "24/7 Dedizierter Support", included: true },
        { text: "Unbegrenzte Abhebungen weltweit", included: true },
        { text: "VIP Investment-Beratung", included: true },
      ],
    },
  ] : [
    {
      name: "Standard",
      monthlyPrice: "Free",
      yearlyPrice: "Free",
      yearlyMonthly: "Free",
      color: "bg-gray-100",
      features: [
        { text: "IBAN Account", included: true },
        { text: "Virtual Debit Card", included: true },
        { text: "SEPA Transfers", included: true },
        { text: "Basic Crypto Trading", included: true },
        { text: "In-App Support", included: true },
        { text: "Free withdrawals: €200/month", included: true },
      ],
    },
    {
      name: "Plus",
      monthlyPrice: "€4.99",
      yearlyPrice: "€47.88",
      yearlyMonthly: "€3.99",
      color: "bg-blue-100",
      features: [
        { text: "Everything in Standard", included: true },
        { text: "Physical Debit Card", included: true },
        { text: "Extended Limits", included: true },
        { text: "Priority Support", included: true },
        { text: "Free withdrawals: €400/month", included: true },
        { text: "No weekend FX fees", included: true },
      ],
    },
    {
      name: "Premium",
      monthlyPrice: "€9.99",
      yearlyPrice: "€95.88",
      yearlyMonthly: "€7.99",
      color: "bg-purple-100",
      isPopular: true,
      features: [
        { text: "Everything in Plus", included: true },
        { text: "Premium Metal Card", included: true },
        { text: "Unlimited FX at interbank rate", included: true },
        { text: "Global Health Insurance", included: true },
        { text: "Free withdrawals: €800/month", included: true },
        { text: "Lounge access worldwide", included: true },
      ],
    },
    {
      name: "Metal",
      monthlyPrice: "€17.99",
      yearlyPrice: "€167.88",
      yearlyMonthly: "€13.99",
      color: "bg-gray-800 text-white",
      features: [
        { text: "Everything in Premium", included: true },
        { text: "Exclusive Metal Card", included: true },
        { text: "Cashback on card payments", included: true },
        { text: "Concierge Service", included: true },
        { text: "Free withdrawals: €1,500/month", included: true },
        { text: "Exclusive partner offers", included: true },
      ],
    },
    {
      name: "Ultra",
      monthlyPrice: "€59.99",
      yearlyPrice: "€575.88",
      yearlyMonthly: "€47.99",
      color: "bg-gradient-to-br from-amber-400 to-orange-500 text-white",
      features: [
        { text: "Everything in Metal", included: true },
        { text: "Ultra Premium Card (limited)", included: true },
        { text: "Highest cashback rates", included: true },
        { text: "24/7 Dedicated Support", included: true },
        { text: "Unlimited withdrawals worldwide", included: true },
        { text: "VIP Investment Advisory", included: true },
      ],
    },
  ];

  // For preview on homepage, show only 3 plans
  const displayPlans = showFullVersion ? plans : plans.slice(0, 3);

  const termsDE = [
    { icon: "calendar", title: "Laufzeit", desc: "Monatlich: Keine Mindestlaufzeit. Jährlich: 12 Monate Mindestlaufzeit." },
    { icon: "clock", title: "Kündigungsfrist", desc: "Monatlich: Jederzeit zum Monatsende kündbar. Jährlich: 1 Monat vor Ablauf." },
    { icon: "refresh", title: "Verlängerung", desc: "Automatische Verlängerung, sofern nicht fristgerecht gekündigt." },
    { icon: "card", title: "Zahlung", desc: "Abbuchung per Lastschrift oder Kreditkarte. Jährlich im Voraus, monatlich zum Monatsbeginn." },
  ];

  const termsEN = [
    { icon: "calendar", title: "Contract Term", desc: "Monthly: No minimum term. Yearly: 12 months minimum term." },
    { icon: "clock", title: "Cancellation", desc: "Monthly: Cancel anytime, effective end of month. Yearly: 1 month before expiry." },
    { icon: "refresh", title: "Renewal", desc: "Auto-renewal unless cancelled within the notice period." },
    { icon: "card", title: "Payment", desc: "Direct debit or credit card. Yearly paid upfront, monthly at start of each month." },
  ];

  const terms = language === "de" ? termsDE : termsEN;

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
            {language === "de" ? "ABO-MODELLE" : "SUBSCRIPTION PLANS"}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            {language === "de" ? "Wähle deinen Plan" : "Choose Your Plan"}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {language === "de"
              ? "Von kostenlos bis premium – finde den Plan, der zu deinem Lifestyle passt."
              : "From free to premium – find the plan that fits your lifestyle."}
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-8 md:mb-10">
          <div className="bg-gray-100 p-1 rounded-xl inline-flex items-center">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-sm font-medium transition-all ${
                !isYearly
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {language === "de" ? "Monatlich" : "Monthly"}
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                isYearly
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {language === "de" ? "Jährlich" : "Yearly"}
              <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-semibold">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Schufa-frei Banner */}
        <div className="mb-10 md:mb-12">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-4 md:p-6 flex items-center gap-4 max-w-3xl mx-auto">
            <div className="flex-shrink-0">
              <Shield className="w-10 h-10 md:w-12 md:h-12 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-green-800 text-lg md:text-xl mb-1">
                {language === "de" ? "100% Schufa-frei" : "100% No Credit Check"}
              </h3>
              <p className="text-green-700 text-sm md:text-base">
                {language === "de"
                  ? "Keine Schufa-Abfrage – auch bei negativen Einträgen problemlos ein Konto eröffnen."
                  : "No credit check required – open an account easily, even with negative credit history."}
              </p>
            </div>
          </div>
        </div>

        {/* Plans Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${showFullVersion ? 'lg:grid-cols-5' : 'lg:grid-cols-3'} gap-4 md:gap-6 mb-8`}>
          {displayPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-5 md:p-6 border ${
                plan.isPopular ? "border-primary shadow-lg scale-105" : "border-gray-200"
              } transition-all duration-300 hover:shadow-lg`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {language === "de" ? "Beliebt" : "Popular"}
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className={`${plan.color} rounded-xl p-4 mb-4 text-center`}>
                <h3 className="text-lg md:text-xl font-bold mb-1">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl md:text-3xl font-bold">
                    {isYearly ? plan.yearlyMonthly : plan.monthlyPrice}
                  </span>
                  {plan.monthlyPrice !== "Kostenlos" && plan.monthlyPrice !== "Free" && (
                    <span className="text-sm opacity-80">
                      /{language === "de" ? "Monat" : "month"}
                    </span>
                  )}
                </div>
                {isYearly && plan.yearlyPrice !== "Kostenlos" && plan.yearlyPrice !== "Free" && (
                  <p className="text-xs opacity-70 mt-1">
                    {plan.yearlyPrice} {language === "de" ? "pro Jahr" : "per year"}
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* View All Plans Link (only on homepage preview) */}
        {!showFullVersion && (
          <div className="text-center mb-8">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              {language === "de" ? "Alle Pläne ansehen" : "View all plans"}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}

        {/* Contract Terms (only on full version) */}
        {showFullVersion && (
          <div className="mt-12 md:mt-16">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-6 md:mb-8">
              {language === "de" ? "Vertragsbedingungen" : "Contract Terms"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
              {terms.map((term, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-4 md:p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Info className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="font-semibold text-gray-900">{term.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600">{term.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-8 md:mt-12">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 md:p-5 flex items-start gap-3 max-w-4xl mx-auto">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-amber-800 text-sm md:text-base font-medium mb-1">
                {language === "de" ? "Hinweis" : "Disclaimer"}
              </p>
              <p className="text-amber-700 text-xs md:text-sm">
                {language === "de"
                  ? "Alle Preise und Leistungen ohne Gewähr. Änderungen und Anpassungen vorbehalten. Die endgültigen Konditionen werden vor dem offiziellen Launch bekanntgegeben. Preise inkl. MwSt."
                  : "All prices and services without guarantee. Subject to change and adjustments. Final conditions will be announced before official launch. Prices incl. VAT."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
