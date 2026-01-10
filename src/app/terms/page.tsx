"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowLeft } from "lucide-react";
import LegalDisclaimer from "@/components/LegalDisclaimer";

export default function TermsPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>{language === "de" ? "Zurück zur Startseite" : "Back to Home"}</span>
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {language === "de" ? "Allgemeine Geschäftsbedingungen" : "Terms of Service"}
        </h1>

        <LegalDisclaimer />

        <div className="prose prose-lg max-w-none text-gray-600">
          {language === "de" ? (
            <>
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Geltungsbereich</h2>
                <p className="mb-4">
                  Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für die Nutzung der Website und zukünftigen Dienstleistungen der LUNA LTD, handelnd als Neoneo Bank (nachfolgend "Anbieter" genannt).
                </p>
                <p className="mb-4">
                  Mit der Nutzung unserer Website und/oder Dienstleistungen erklären Sie sich mit diesen AGB einverstanden. Wenn Sie mit diesen Bedingungen nicht einverstanden sind, nutzen Sie unsere Website oder Dienstleistungen bitte nicht.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Anbieter</h2>
                <p className="mb-4">
                  <strong>LUNA LTD</strong><br />
                  (Handelnd als Neoneo Bank)<br />
                  20 Wenlock Road<br />
                  London, N1 7GU<br />
                  United Kingdom<br /><br />
                  Company Number: 16121231<br />
                  E-Mail: contact@neoneobank.de
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Leistungsbeschreibung</h2>
                <p className="mb-4">
                  Der Anbieter stellt eine informative Website über geplante digitale Bankdienstleistungen bereit. Die auf der Website dargestellten Produkte und Dienstleistungen sind derzeit in Entwicklung und werden voraussichtlich 2026 verfügbar sein.
                </p>
                <p className="mb-4">
                  Die endgültigen Produkte und Dienstleistungen können von den auf der Website beschriebenen abweichen. Der Anbieter behält sich das Recht vor, die angebotenen Dienstleistungen jederzeit zu ändern, zu erweitern oder einzustellen.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Registrierung und Benutzerkonto</h2>
                <p className="mb-4">
                  Für bestimmte zukünftige Dienstleistungen ist eine Registrierung erforderlich. Bei der Registrierung verpflichten Sie sich:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Wahre, genaue und vollständige Angaben zu Ihrer Person zu machen</li>
                  <li>Diese Informationen stets aktuell zu halten</li>
                  <li>Ihre Zugangsdaten vertraulich zu behandeln</li>
                  <li>Den Anbieter unverzüglich über unbefugte Nutzung Ihres Kontos zu informieren</li>
                </ul>
                <p className="mb-4">
                  Der Anbieter behält sich das Recht vor, Benutzerkonten bei Verstoß gegen diese AGB zu sperren oder zu löschen.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Nutzungsrechte und Pflichten</h2>
                <p className="mb-4">
                  Die Nutzung der Website und der zukünftigen Dienstleistungen erfolgt auf eigenes Risiko. Der Nutzer verpflichtet sich:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Die Website und Dienstleistungen nur für rechtmäßige Zwecke zu nutzen</li>
                  <li>Keine falschen Identitäten anzunehmen</li>
                  <li>Keine schädliche Software zu verbreiten</li>
                  <li>Die Rechte anderer Nutzer zu respektieren</li>
                  <li>Keine automatisierten Systeme zur Datenerfassung zu verwenden</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Geistiges Eigentum</h2>
                <p className="mb-4">
                  Alle Inhalte der Website, einschließlich Texte, Grafiken, Logos, Icons, Bilder und Software, sind Eigentum des Anbieters oder seiner Lizenzgeber und durch Urheberrechte und andere Schutzrechte geschützt.
                </p>
                <p className="mb-4">
                  Die Vervielfältigung, Verbreitung, Modifikation oder öffentliche Wiedergabe von Inhalten bedarf der vorherigen schriftlichen Zustimmung des Anbieters.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Haftungsbeschränkung</h2>
                <p className="mb-4">
                  Die Inhalte der Website dienen ausschließlich zu Informationszwecken. Der Anbieter übernimmt keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Informationen.
                </p>
                <p className="mb-4">
                  Der Anbieter haftet nicht für Schäden, die durch die Nutzung oder Nichtnutzung der auf der Website angebotenen Informationen entstehen, es sei denn, es liegt Vorsatz oder grobe Fahrlässigkeit vor.
                </p>
                <p className="mb-4">
                  Die Haftung für mittelbare Schäden, insbesondere entgangenen Gewinn, ist ausgeschlossen, soweit gesetzlich zulässig.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Externe Links</h2>
                <p className="mb-4">
                  Die Website kann Links zu externen Websites Dritter enthalten. Der Anbieter hat keinen Einfluss auf die Inhalte dieser externen Seiten und übernimmt daher keine Gewähr für deren Richtigkeit. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Änderungen der AGB</h2>
                <p className="mb-4">
                  Der Anbieter behält sich das Recht vor, diese AGB jederzeit zu ändern. Die aktuelle Version ist stets auf der Website verfügbar. Bei wesentlichen Änderungen werden registrierte Nutzer per E-Mail informiert. Die fortgesetzte Nutzung der Website nach Änderung der AGB gilt als Zustimmung zu den neuen Bedingungen.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Datenschutz</h2>
                <p className="mb-4">
                  Die Erhebung und Verarbeitung personenbezogener Daten erfolgt gemäß unserer{" "}
                  <Link href="/privacy" className="text-primary hover:underline">Datenschutzerklärung</Link>.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Anwendbares Recht und Gerichtsstand</h2>
                <p className="mb-4">
                  Diese AGB unterliegen dem Recht von England und Wales. Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesen AGB ist London, Vereinigtes Königreich, soweit gesetzlich zulässig.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Salvatorische Klausel</h2>
                <p className="mb-4">
                  Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchführbar sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Die unwirksame Bestimmung ist durch eine wirksame zu ersetzen, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Kontakt</h2>
                <p className="mb-4">
                  Bei Fragen zu diesen AGB wenden Sie sich bitte an:<br />
                  E-Mail: contact@neoneobank.de
                </p>
              </section>
            </>
          ) : (
            <>
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Scope</h2>
                <p className="mb-4">
                  These Terms of Service apply to the use of the website and future services of LUNA LTD, trading as Neoneo Bank (hereinafter referred to as "Provider").
                </p>
                <p className="mb-4">
                  By using our website and/or services, you agree to these Terms. If you do not agree with these terms, please do not use our website or services.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Provider</h2>
                <p className="mb-4">
                  <strong>LUNA LTD</strong><br />
                  (Trading as Neoneo Bank)<br />
                  20 Wenlock Road<br />
                  London, N1 7GU<br />
                  United Kingdom<br /><br />
                  Company Number: 16121231<br />
                  Email: contact@neoneobank.de
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Service Description</h2>
                <p className="mb-4">
                  The Provider operates an informational website about planned digital banking services. The products and services presented on the website are currently in development and are expected to be available in 2026.
                </p>
                <p className="mb-4">
                  The final products and services may differ from those described on the website. The Provider reserves the right to modify, expand, or discontinue the offered services at any time.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Registration and User Account</h2>
                <p className="mb-4">
                  Registration is required for certain future services. By registering, you agree to:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Provide true, accurate, and complete information about yourself</li>
                  <li>Keep this information up to date at all times</li>
                  <li>Keep your login credentials confidential</li>
                  <li>Immediately notify the Provider of any unauthorized use of your account</li>
                </ul>
                <p className="mb-4">
                  The Provider reserves the right to suspend or delete user accounts in case of violation of these Terms.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Usage Rights and Obligations</h2>
                <p className="mb-4">
                  Use of the website and future services is at your own risk. Users agree to:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Use the website and services only for lawful purposes</li>
                  <li>Not assume false identities</li>
                  <li>Not distribute harmful software</li>
                  <li>Respect the rights of other users</li>
                  <li>Not use automated systems for data collection</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property</h2>
                <p className="mb-4">
                  All content on the website, including texts, graphics, logos, icons, images, and software, is the property of the Provider or its licensors and is protected by copyright and other intellectual property rights.
                </p>
                <p className="mb-4">
                  Reproduction, distribution, modification, or public display of content requires the prior written consent of the Provider.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
                <p className="mb-4">
                  The content of the website is for informational purposes only. The Provider does not guarantee the accuracy, completeness, or timeliness of the information provided.
                </p>
                <p className="mb-4">
                  The Provider shall not be liable for damages arising from the use or non-use of the information offered on the website, unless there is intent or gross negligence.
                </p>
                <p className="mb-4">
                  Liability for indirect damages, in particular lost profits, is excluded to the extent permitted by law.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. External Links</h2>
                <p className="mb-4">
                  The website may contain links to external third-party websites. The Provider has no influence on the content of these external sites and therefore accepts no responsibility for their accuracy. The respective provider is always responsible for the content of linked pages.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to Terms</h2>
                <p className="mb-4">
                  The Provider reserves the right to change these Terms at any time. The current version is always available on the website. Registered users will be notified by email of significant changes. Continued use of the website after changes to the Terms constitutes acceptance of the new terms.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Data Protection</h2>
                <p className="mb-4">
                  The collection and processing of personal data is carried out in accordance with our{" "}
                  <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Applicable Law and Jurisdiction</h2>
                <p className="mb-4">
                  These Terms are governed by the laws of England and Wales. The place of jurisdiction for all disputes arising from or in connection with these Terms is London, United Kingdom, to the extent permitted by law.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Severability Clause</h2>
                <p className="mb-4">
                  If individual provisions of these Terms are or become invalid or unenforceable, the validity of the remaining provisions shall not be affected. The invalid provision shall be replaced by a valid provision that comes closest to the economic purpose of the invalid provision.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact</h2>
                <p className="mb-4">
                  If you have any questions about these Terms, please contact us at:<br />
                  Email: contact@neoneobank.de
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
