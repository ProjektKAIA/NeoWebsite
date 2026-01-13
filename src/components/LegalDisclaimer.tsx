"use client";

import { useLanguage } from "@/context/LanguageContext";
import { COMPANY } from "@/constants/company";
import { AlertTriangle } from "lucide-react";

export default function LegalDisclaimer() {
  const { language } = useLanguage();

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 md:p-6 mb-6 md:mb-10">
      <div className="flex items-start gap-3 md:gap-4">
        <div className="flex-shrink-0">
          <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />
        </div>
        <div>
          <h3 className="font-semibold text-amber-800 mb-1 md:mb-2 text-sm md:text-base">
            {language === "de" ? "Rechtlicher Hinweis" : "Legal Notice"}
          </h3>
          <p className="text-amber-700 text-xs md:text-sm leading-relaxed">
            {language === "de" ? (
              <>
                Dieses Dokument befindet sich derzeit in rechtlicher Überprüfung und wird fortlaufend aktualisiert, um den geltenden gesetzlichen Anforderungen zu entsprechen. Die vorliegenden Bestimmungen stellen einen vorläufigen Stand dar und können sich ohne vorherige Ankündigung ändern. Wir empfehlen, diese Seite regelmäßig auf Aktualisierungen zu überprüfen. Bei Fragen wenden Sie sich bitte an{" "}
                <a href={`mailto:${COMPANY.contact.email}`} className="underline hover:text-amber-900">
                  {COMPANY.contact.email}
                </a>.
              </>
            ) : (
              <>
                This document is currently under legal review and is being continuously updated to comply with applicable legal requirements. The provisions herein represent a preliminary version and are subject to change without prior notice. We recommend checking this page regularly for updates. For questions, please contact{" "}
                <a href={`mailto:${COMPANY.contact.email}`} className="underline hover:text-amber-900">
                  {COMPANY.contact.email}
                </a>.
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
