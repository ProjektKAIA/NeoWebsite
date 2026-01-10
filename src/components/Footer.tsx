"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-gray-400 text-sm">
          {t("footer.copyright")}, {currentYear}
        </p>
      </div>
    </footer>
  );
}
