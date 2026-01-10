"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="card p-12 md:p-20 text-center">
          {/* Section Label */}
          <p className="section-label mb-4">
            {t("cta.label")}
          </p>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {t("cta.title")}
          </h2>

          {/* Description */}
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-10">
            {t("cta.desc")}
          </p>

          {/* CTA Button */}
          <a
            href="https://t.me/neoneobank"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4"
          >
            {t("cta.button")}
          </a>
        </div>
      </div>
    </section>
  );
}
