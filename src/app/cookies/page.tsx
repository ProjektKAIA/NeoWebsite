"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowLeft } from "lucide-react";
import LegalDisclaimer from "@/components/LegalDisclaimer";

export default function CookiesPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-24 pb-12 md:pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors mb-6 md:mb-8 text-sm md:text-base"
        >
          <ArrowLeft size={18} className="md:w-5 md:h-5" />
          <span>{language === "de" ? "Zurück zur Startseite" : "Back to Home"}</span>
        </Link>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
          {language === "de" ? "Cookie-Richtlinie" : "Cookie Policy"}
        </h1>

        <LegalDisclaimer />

        <div className="prose prose-lg max-w-none text-gray-600">
          {language === "de" ? (
            <>
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Was sind Cookies?</h2>
                <p className="mb-4">
                  Cookies sind kleine Textdateien, die von Websites, die Sie besuchen, auf Ihrem Computer oder Mobilgerät gespeichert werden. Sie werden häufig verwendet, um Websites funktionsfähig zu machen oder effizienter zu arbeiten, sowie um Informationen an die Eigentümer der Website zu übermitteln.
                </p>
                <p className="mb-4">
                  Cookies ermöglichen es einer Website, Ihr Gerät zu erkennen und Informationen über Ihre Präferenzen oder vergangene Aktionen zu speichern.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Wie wir Cookies verwenden</h2>
                <p className="mb-4">
                  Unsere Website verwendet Cookies, um:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Die Website ordnungsgemäß funktionieren zu lassen</li>
                  <li>Ihre Spracheinstellungen zu speichern</li>
                  <li>Die Nutzung unserer Website zu analysieren und zu verbessern</li>
                  <li>Die Sicherheit der Website zu gewährleisten</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Arten von Cookies, die wir verwenden</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Notwendige Cookies</h3>
                <p className="mb-4">
                  Diese Cookies sind für das ordnungsgemäße Funktionieren der Website unerlässlich. Sie ermöglichen grundlegende Funktionen wie die Seitennavigation und den Zugriff auf sichere Bereiche der Website. Ohne diese Cookies kann die Website nicht richtig funktionieren.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-sm"><strong>Beispiele:</strong></p>
                  <ul className="list-disc pl-6 text-sm">
                    <li>Session-Cookies zur Aufrechterhaltung Ihres Sitzungsstatus</li>
                    <li>Sicherheits-Cookies zur Verhinderung von Betrug</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Funktionale Cookies</h3>
                <p className="mb-4">
                  Diese Cookies ermöglichen es der Website, sich an Ihre Entscheidungen zu erinnern (wie Ihre bevorzugte Sprache) und erweiterte, personalisiertere Funktionen bereitzustellen.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-sm"><strong>Beispiele:</strong></p>
                  <ul className="list-disc pl-6 text-sm">
                    <li>Spracheinstellungen</li>
                    <li>Regionale Einstellungen</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Analyse-Cookies</h3>
                <p className="mb-4">
                  Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem sie Informationen anonym sammeln und melden. Dies hilft uns, unsere Website kontinuierlich zu verbessern.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-sm"><strong>Hinweis:</strong> Derzeit verwenden wir keine Analyse-Cookies. Sollte sich dies ändern, werden wir diese Richtlinie aktualisieren.</p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies von Drittanbietern</h2>
                <p className="mb-4">
                  Derzeit verwenden wir keine Cookies von Drittanbietern. Sollten wir in Zukunft Dienste von Drittanbietern einbinden, werden wir diese Richtlinie entsprechend aktualisieren und Sie informieren.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Wie Sie Cookies verwalten können</h2>
                <p className="mb-4">
                  Die meisten Webbrowser erlauben eine gewisse Kontrolle über Cookies durch die Browsereinstellungen. Sie können:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Alle Cookies akzeptieren oder ablehnen</li>
                  <li>Cookies nur von bestimmten Websites akzeptieren</li>
                  <li>Benachrichtigt werden, wenn eine Website einen Cookie setzen möchte</li>
                  <li>Alle Cookies regelmäßig löschen</li>
                </ul>
                <p className="mb-4">
                  <strong>Bitte beachten Sie:</strong> Das Blockieren aller Cookies kann sich negativ auf die Funktionalität dieser und vieler anderer Websites auswirken.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Browser-Einstellungen</h3>
                <p className="mb-4">
                  Hier erfahren Sie, wie Sie Cookie-Einstellungen in den gängigsten Browsern verwalten:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/de-de/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
                  <li><a href="https://support.microsoft.com/de-de/microsoft-edge/cookies-in-microsoft-edge-l%C3%B6schen-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Speicherdauer</h2>
                <p className="mb-4">
                  Die Speicherdauer von Cookies variiert je nach Typ:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Session-Cookies:</strong> Werden gelöscht, wenn Sie Ihren Browser schließen</li>
                  <li><strong>Persistente Cookies:</strong> Bleiben für einen bestimmten Zeitraum auf Ihrem Gerät (typischerweise zwischen 30 Tagen und 2 Jahren)</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Änderungen dieser Cookie-Richtlinie</h2>
                <p className="mb-4">
                  Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren, um Änderungen in den von uns verwendeten Cookies oder aus anderen betrieblichen, rechtlichen oder regulatorischen Gründen widerzuspiegeln. Bitte besuchen Sie diese Seite regelmäßig, um über unsere Verwendung von Cookies informiert zu bleiben.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kontakt</h2>
                <p className="mb-4">
                  Wenn Sie Fragen zu unserer Verwendung von Cookies haben, kontaktieren Sie uns bitte unter:<br />
                  E-Mail: hello@neoneobank.de
                </p>
              </section>
            </>
          ) : (
            <>
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">What are Cookies?</h2>
                <p className="mb-4">
                  Cookies are small text files that are stored on your computer or mobile device by websites you visit. They are widely used to make websites work or work more efficiently, as well as to provide information to the owners of the website.
                </p>
                <p className="mb-4">
                  Cookies allow a website to recognize your device and store information about your preferences or past actions.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Cookies</h2>
                <p className="mb-4">
                  Our website uses cookies to:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Make the website function properly</li>
                  <li>Save your language preferences</li>
                  <li>Analyze and improve our website usage</li>
                  <li>Ensure website security</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Cookies We Use</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Necessary Cookies</h3>
                <p className="mb-4">
                  These cookies are essential for the proper functioning of the website. They enable basic functions such as page navigation and access to secure areas of the website. Without these cookies, the website cannot function properly.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-sm"><strong>Examples:</strong></p>
                  <ul className="list-disc pl-6 text-sm">
                    <li>Session cookies to maintain your session status</li>
                    <li>Security cookies to prevent fraud</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Functional Cookies</h3>
                <p className="mb-4">
                  These cookies allow the website to remember your choices (such as your preferred language) and provide enhanced, more personalized features.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-sm"><strong>Examples:</strong></p>
                  <ul className="list-disc pl-6 text-sm">
                    <li>Language settings</li>
                    <li>Regional preferences</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Analytics Cookies</h3>
                <p className="mb-4">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us continuously improve our website.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-sm"><strong>Note:</strong> We currently do not use analytics cookies. If this changes, we will update this policy.</p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Cookies</h2>
                <p className="mb-4">
                  We currently do not use third-party cookies. If we integrate third-party services in the future, we will update this policy accordingly and inform you.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Manage Cookies</h2>
                <p className="mb-4">
                  Most web browsers allow some control over cookies through browser settings. You can:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Accept or reject all cookies</li>
                  <li>Accept cookies only from certain websites</li>
                  <li>Be notified when a website wants to set a cookie</li>
                  <li>Delete all cookies regularly</li>
                </ul>
                <p className="mb-4">
                  <strong>Please note:</strong> Blocking all cookies may negatively impact the functionality of this and many other websites.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Browser Settings</h3>
                <p className="mb-4">
                  Here's how to manage cookie settings in the most common browsers:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
                  <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Storage Duration</h2>
                <p className="mb-4">
                  The storage duration of cookies varies by type:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent cookies:</strong> Remain on your device for a specified period (typically between 30 days and 2 years)</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Cookie Policy</h2>
                <p className="mb-4">
                  We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for other operational, legal, or regulatory reasons. Please visit this page regularly to stay informed about our use of cookies.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
                <p className="mb-4">
                  If you have any questions about our use of cookies, please contact us at:<br />
                  Email: hello@neoneobank.de
                </p>
              </section>
            </>
          )}
        </div>

        {/* Last Updated */}
        <p className="text-gray-400 text-sm mt-12">
          {language === "de" ? "Zuletzt aktualisiert: Januar 2026" : "Last updated: January 2026"}
        </p>
      </div>
    </div>
  );
}
