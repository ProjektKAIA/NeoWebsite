"use client";

import { Header, Footer, CookieBanner } from "@/components";
import PricingPlans from "@/components/PricingPlans";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PricingPage() {
  const { language } = useLanguage();

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

        {/* Full Pricing Section */}
        <PricingPlans showFullVersion={true} />

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
              {language === "de" ? "Häufige Fragen zu unseren Plänen" : "Frequently Asked Questions"}
            </h2>

            <div className="space-y-4">
              {(language === "de" ? [
                {
                  q: "Kann ich meinen Plan jederzeit wechseln?",
                  a: "Ja, du kannst jederzeit auf einen höheren Plan upgraden. Bei einem Downgrade wird die Änderung zum nächsten Abrechnungszeitraum wirksam."
                },
                {
                  q: "Was passiert nach der Kündigung?",
                  a: "Nach der Kündigung behältst du alle Features bis zum Ende des bezahlten Zeitraums. Danach wechselt dein Konto automatisch zum kostenlosen Standard-Plan."
                },
                {
                  q: "Gibt es versteckte Kosten?",
                  a: "Nein, alle Kosten sind transparent. Die angegebenen Preise sind Endpreise inkl. MwSt. Zusätzliche Gebühren können nur bei Drittanbieter-Diensten anfallen."
                },
                {
                  q: "Wie funktioniert die jährliche Zahlung?",
                  a: "Bei jährlicher Zahlung sparst du 20%. Der Betrag wird einmalig im Voraus abgebucht und du erhältst 12 Monate Zugang."
                },
                {
                  q: "Kann ich den Ultra-Plan testen?",
                  a: "Ja, für Neukunden bieten wir eine 30-tägige Testphase für Premium-Pläne an. Details werden beim Launch bekanntgegeben."
                }
              ] : [
                {
                  q: "Can I change my plan anytime?",
                  a: "Yes, you can upgrade to a higher plan at any time. Downgrades take effect at the next billing period."
                },
                {
                  q: "What happens after cancellation?",
                  a: "After cancellation, you keep all features until the end of your paid period. Then your account automatically switches to the free Standard plan."
                },
                {
                  q: "Are there hidden costs?",
                  a: "No, all costs are transparent. Listed prices are final prices including VAT. Additional fees may only apply for third-party services."
                },
                {
                  q: "How does yearly payment work?",
                  a: "With yearly payment, you save 20%. The amount is charged once upfront and you get 12 months of access."
                },
                {
                  q: "Can I try the Ultra plan?",
                  a: "Yes, we offer a 30-day trial period for premium plans for new customers. Details will be announced at launch."
                }
              ]).map((faq, index) => (
                <details key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors">
                    <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                    <svg className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
