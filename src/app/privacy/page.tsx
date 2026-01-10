"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowLeft } from "lucide-react";
import LegalDisclaimer from "@/components/LegalDisclaimer";

export default function PrivacyPage() {
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
          {language === "de" ? "Datenschutzerklärung" : "Privacy Policy"}
        </h1>

        <LegalDisclaimer />

        <div className="prose prose-lg max-w-none text-gray-600">
          {language === "de" ? (
            <>
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Datenschutz auf einen Blick</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Allgemeine Hinweise</h3>
                <p className="mb-4">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Datenerfassung auf dieser Website</h3>
                <p className="mb-4">
                  <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                </p>
                <p className="mb-4">
                  <strong>Wie erfassen wir Ihre Daten?</strong><br />
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                </p>
                <p className="mb-4">
                  <strong>Wofür nutzen wir Ihre Daten?</strong><br />
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>
                <p className="mb-4">
                  <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Verantwortliche Stelle</h2>
                <p className="mb-4">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <p className="mb-4">
                  LUNA LTD<br />
                  20 Wenlock Road<br />
                  London, N1 7GU<br />
                  United Kingdom
                </p>
                <p className="mb-4">
                  <strong>Vertreten durch:</strong> Paul Kappel (CEO)<br />
                  <strong>E-Mail:</strong> hello@neoneobank.de
                </p>
                <p className="mb-4">
                  Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Datenerfassung auf dieser Website</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Cookies</h3>
                <p className="mb-4">
                  Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
                </p>
                <p className="mb-4">
                  Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-Cookies). Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von Drittunternehmen innerhalb von Webseiten (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Server-Log-Dateien</h3>
                <p className="mb-4">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="mb-4">
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Kontaktformular</h3>
                <p className="mb-4">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="mb-4">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Ihre Rechte</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Recht auf Auskunft</h3>
                <p className="mb-4">
                  Sie haben das Recht, jederzeit von uns unentgeltliche Auskunft über die zu Ihrer Person gespeicherten personenbezogenen Daten sowie eine Kopie dieser Daten zu erhalten.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Recht auf Berichtigung</h3>
                <p className="mb-4">
                  Sie haben das Recht, die unverzügliche Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Recht auf Löschung</h3>
                <p className="mb-4">
                  Sie haben das Recht, die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Recht auf Einschränkung der Verarbeitung</h3>
                <p className="mb-4">
                  Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Recht auf Datenübertragbarkeit</h3>
                <p className="mb-4">
                  Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Widerspruchsrecht</h3>
                <p className="mb-4">
                  Sie haben das Recht, jederzeit gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen, wenn die Verarbeitung auf der Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Beschwerderecht</h3>
                <p className="mb-4">
                  Sie haben das Recht auf Beschwerde bei einer Aufsichtsbehörde. Die für uns zuständige Aufsichtsbehörde ist das Information Commissioner's Office (ICO) in Großbritannien.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Datensicherheit</h2>
                <p className="mb-4">
                  Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. Sie erkennen eine verschlüsselte Verbindung an der Zeichenfolge „https://" und dem Schloss-Symbol in der Browserzeile.
                </p>
                <p className="mb-4">
                  Wir bedienen uns geeigneter technischer und organisatorischer Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.
                </p>
              </section>
            </>
          ) : (
            <>
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Privacy at a Glance</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">General Information</h3>
                <p className="mb-4">
                  The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to personally identify you. Detailed information on the subject of data protection can be found in our privacy policy listed below this text.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Data Collection on This Website</h3>
                <p className="mb-4">
                  <strong>Who is responsible for data collection on this website?</strong><br />
                  Data processing on this website is carried out by the website operator. You can find their contact details in the "Responsible Party" section of this privacy policy.
                </p>
                <p className="mb-4">
                  <strong>How do we collect your data?</strong><br />
                  Your data is collected when you provide it to us. This could be data you enter in a contact form, for example. Other data is automatically collected by our IT systems when you visit the website. This is primarily technical data (e.g., internet browser, operating system, or time of page access). This data is collected automatically as soon as you enter this website.
                </p>
                <p className="mb-4">
                  <strong>What do we use your data for?</strong><br />
                  Part of the data is collected to ensure error-free provision of the website. Other data may be used to analyze your user behavior.
                </p>
                <p className="mb-4">
                  <strong>What rights do you have regarding your data?</strong><br />
                  You have the right to receive information about the origin, recipient, and purpose of your stored personal data free of charge at any time. You also have the right to request the correction or deletion of this data. If you have given consent to data processing, you can revoke this consent at any time for the future. You also have the right to request the restriction of the processing of your personal data under certain circumstances. Furthermore, you have the right to lodge a complaint with the competent supervisory authority.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Responsible Party</h2>
                <p className="mb-4">
                  The responsible party for data processing on this website is:
                </p>
                <p className="mb-4">
                  LUNA LTD<br />
                  20 Wenlock Road<br />
                  London, N1 7GU<br />
                  United Kingdom
                </p>
                <p className="mb-4">
                  <strong>Represented by:</strong> Paul Kappel (CEO)<br />
                  <strong>Email:</strong> hello@neoneobank.de
                </p>
                <p className="mb-4">
                  The responsible party is the natural or legal person who, alone or jointly with others, decides on the purposes and means of processing personal data (e.g., names, email addresses, etc.).
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Collection on This Website</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Cookies</h3>
                <p className="mb-4">
                  Our website uses so-called "cookies." Cookies are small data packets and do not cause any damage to your device. They are stored either temporarily for the duration of a session (session cookies) or permanently (persistent cookies) on your device. Session cookies are automatically deleted after your visit. Persistent cookies remain stored on your device until you delete them yourself or they are automatically deleted by your web browser.
                </p>
                <p className="mb-4">
                  Cookies can come from us (first-party cookies) or from third-party companies (so-called third-party cookies). Third-party cookies enable the integration of certain services from third-party companies within websites (e.g., cookies for processing payment services).
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Server Log Files</h3>
                <p className="mb-4">
                  The provider of the pages automatically collects and stores information in so-called server log files, which your browser automatically transmits to us. These are:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Browser type and browser version</li>
                  <li>Operating system used</li>
                  <li>Referrer URL</li>
                  <li>Host name of the accessing computer</li>
                  <li>Time of the server request</li>
                  <li>IP address</li>
                </ul>
                <p className="mb-4">
                  This data is not merged with other data sources. The collection of this data is based on Art. 6 para. 1 lit. f GDPR. The website operator has a legitimate interest in the technically error-free presentation and optimization of their website – for this purpose, the server log files must be recorded.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Contact Form</h3>
                <p className="mb-4">
                  If you send us inquiries via the contact form, your details from the inquiry form, including the contact details you provided there, will be stored by us for the purpose of processing the inquiry and in case of follow-up questions. We do not pass on this data without your consent.
                </p>
                <p className="mb-4">
                  The processing of this data is based on Art. 6 para. 1 lit. b GDPR if your request is related to the performance of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, the processing is based on our legitimate interest in the effective processing of inquiries addressed to us (Art. 6 para. 1 lit. f GDPR) or on your consent (Art. 6 para. 1 lit. a GDPR) if this has been requested.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Your Rights</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Right to Information</h3>
                <p className="mb-4">
                  You have the right to receive free information about the personal data stored about you and a copy of this data at any time.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Right to Rectification</h3>
                <p className="mb-4">
                  You have the right to request the immediate correction of inaccurate or completion of your personal data stored with us.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Right to Erasure</h3>
                <p className="mb-4">
                  You have the right to request the deletion of your personal data stored with us, unless processing is necessary for exercising the right to freedom of expression and information, for fulfilling a legal obligation, for reasons of public interest, or for asserting, exercising, or defending legal claims.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Right to Restriction of Processing</h3>
                <p className="mb-4">
                  You have the right to request the restriction of the processing of your personal data.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Right to Data Portability</h3>
                <p className="mb-4">
                  You have the right to have data that we process automatically based on your consent or in fulfillment of a contract handed over to you or to a third party in a common, machine-readable format.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Right to Object</h3>
                <p className="mb-4">
                  You have the right to object at any time to the processing of your personal data if the processing is based on Art. 6 para. 1 lit. e or f GDPR.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Right to Lodge a Complaint</h3>
                <p className="mb-4">
                  You have the right to lodge a complaint with a supervisory authority. The supervisory authority responsible for us is the Information Commissioner's Office (ICO) in the United Kingdom.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
                <p className="mb-4">
                  We use the widely used SSL (Secure Socket Layer) method in combination with the highest level of encryption supported by your browser during website visits. You can recognize an encrypted connection by the "https://" string and the lock symbol in your browser line.
                </p>
                <p className="mb-4">
                  We use appropriate technical and organizational security measures to protect your data against accidental or intentional manipulation, partial or complete loss, destruction, or unauthorized access by third parties. Our security measures are continuously improved in line with technological developments.
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
