"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowLeft } from "lucide-react";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import { COMPANY } from "@/constants/company";

export default function ImprintPage() {
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
          {language === "de" ? "Impressum" : "Imprint"}
        </h1>

        <LegalDisclaimer />

        <div className="prose prose-lg max-w-none text-gray-600">
          {language === "de" ? (
            <>
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Angaben gemäß § 5 TMG / Companies Act 2006</h2>
                <p className="mb-4">
                  <strong>{COMPANY.name}</strong><br />
                  (Handelnd als {COMPANY.tradingAs})
                </p>
                <p className="mb-4">
                  {COMPANY.address.street}<br />
                  {COMPANY.address.city}, {COMPANY.address.postcode}<br />
                  {COMPANY.address.country}
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Handelsregister</h2>
                <p className="mb-2"><strong>Registergericht:</strong> Companies House, {COMPANY.registeredIn}</p>
                <p className="mb-2"><strong>Registernummer:</strong> {COMPANY.companyNumber}</p>
                <p className="mb-2"><strong>Gründungsdatum:</strong> 5. Dezember 2024</p>
                <p className="mb-2"><strong>Rechtsform:</strong> {COMPANY.companyType}</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Geschäftsführung</h2>
                <p className="mb-2"><strong>CEO / Director:</strong> {COMPANY.management.ceo}</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kontakt</h2>
                <p className="mb-2"><strong>E-Mail:</strong> {COMPANY.contact.email}</p>
                <p className="mb-2"><strong>Telegram:</strong> {COMPANY.contact.telegram}</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Umsatzsteuer-Identifikationsnummer</h2>
                <p className="mb-4">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  <em>In Beantragung</em>
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <p className="mb-4">
                  {COMPANY.management.ceo}<br />
                  {COMPANY.address.street}<br />
                  {COMPANY.address.city}, {COMPANY.address.postcode}<br />
                  {COMPANY.address.country}
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">EU-Streitschlichtung</h2>
                <p className="mb-4">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                  <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="mb-4">
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
                <p className="mb-4">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Haftung für Inhalte</h2>
                <p className="mb-4">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p className="mb-4">
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Haftung für Links</h2>
                <p className="mb-4">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
                <p className="mb-4">
                  Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Urheberrecht</h2>
                <p className="mb-4">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
                <p className="mb-4">
                  Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
              </section>
            </>
          ) : (
            <>
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Company Information (Companies Act 2006)</h2>
                <p className="mb-4">
                  <strong>{COMPANY.name}</strong><br />
                  (Trading as {COMPANY.tradingAs})
                </p>
                <p className="mb-4">
                  {COMPANY.address.street}<br />
                  {COMPANY.address.city}, {COMPANY.address.postcode}<br />
                  {COMPANY.address.country}
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Company Registration</h2>
                <p className="mb-2"><strong>Registered at:</strong> Companies House, {COMPANY.registeredIn}</p>
                <p className="mb-2"><strong>Company Number:</strong> {COMPANY.companyNumber}</p>
                <p className="mb-2"><strong>Date of Incorporation:</strong> {COMPANY.incorporationDate}</p>
                <p className="mb-2"><strong>Company Type:</strong> {COMPANY.companyType}</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Management</h2>
                <p className="mb-2"><strong>CEO / Director:</strong> {COMPANY.management.ceo}</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
                <p className="mb-2"><strong>Email:</strong> {COMPANY.contact.email}</p>
                <p className="mb-2"><strong>Telegram:</strong> {COMPANY.contact.telegram}</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">VAT Identification Number</h2>
                <p className="mb-4">
                  VAT ID Number:<br />
                  <em>Application pending</em>
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Responsible for Content</h2>
                <p className="mb-4">
                  {COMPANY.management.ceo}<br />
                  {COMPANY.address.street}<br />
                  {COMPANY.address.city}, {COMPANY.address.postcode}<br />
                  {COMPANY.address.country}
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">EU Online Dispute Resolution</h2>
                <p className="mb-4">
                  The European Commission provides a platform for online dispute resolution (ODR):{" "}
                  <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="mb-4">
                  Our email address can be found above in this imprint.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Consumer Dispute Resolution</h2>
                <p className="mb-4">
                  We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Liability for Content</h2>
                <p className="mb-4">
                  As a service provider, we are responsible for our own content on these pages in accordance with general laws. However, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
                </p>
                <p className="mb-4">
                  Obligations to remove or block the use of information under general law remain unaffected. However, liability in this regard is only possible from the time of knowledge of a specific infringement. Upon becoming aware of such violations, we will remove this content immediately.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Liability for Links</h2>
                <p className="mb-4">
                  Our website contains links to external third-party websites over whose content we have no control. Therefore, we cannot accept any liability for this third-party content. The respective provider or operator of the pages is always responsible for the content of the linked pages.
                </p>
                <p className="mb-4">
                  The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking. However, permanent monitoring of the content of linked pages is not reasonable without concrete evidence of an infringement. Upon becoming aware of legal violations, we will remove such links immediately.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Copyright</h2>
                <p className="mb-4">
                  The content and works created by the site operators on these pages are subject to copyright law. Duplication, processing, distribution, and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator.
                </p>
                <p className="mb-4">
                  Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. Upon becoming aware of legal violations, we will remove such content immediately.
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
