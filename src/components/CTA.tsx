"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="card p-6 sm:p-10 md:p-16 lg:p-20 text-center">
          {/* Section Label */}
          <p className="section-label mb-3 md:mb-4 text-xs md:text-sm">
            {t("cta.label")}
          </p>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
            {t("cta.title")}
          </h2>

          {/* Description */}
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg mb-6 md:mb-10 px-2">
            {t("cta.desc")}
          </p>

          {/* CTA Button */}
          <a
            href="https://t.me/neoneobank"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 inline-block"
          >
            {t("cta.button")}
          </a>
        </div>
      </div>
    </section>
  );
}
