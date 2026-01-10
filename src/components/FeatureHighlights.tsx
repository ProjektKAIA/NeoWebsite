"use client";

import { Check, Wallet } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FeatureHighlights() {
  const { t } = useLanguage();

  const highlights = [
    {
      titleKey: "highlights.multiCurrency.title",
      descKey: "highlights.multiCurrency.desc",
      isHighlighted: true
    },
    {
      titleKey: "highlights.onboarding.title",
      descKey: "highlights.onboarding.desc"
    },
    {
      titleKey: "highlights.dashboard.title",
      descKey: "highlights.dashboard.desc"
    },
    {
      titleKey: "highlights.realtime.title",
      descKey: "highlights.realtime.desc"
    },
    {
      titleKey: "highlights.future.title",
      descKey: "highlights.future.desc"
    },
    {
      titleKey: "highlights.design.title",
      descKey: "highlights.design.desc"
    },
    {
      titleKey: "highlights.safe.title",
      descKey: "highlights.safe.desc"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10">
          {highlights.map((feature, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 ${feature.isHighlighted ? 'bg-primary/5 p-4 rounded-xl -m-4' : ''}`}
            >
              {/* Icon */}
              <div className={`flex-shrink-0 w-6 h-6 mt-0.5 ${feature.isHighlighted ? 'text-primary' : 'text-primary'}`}>
                {feature.isHighlighted ? (
                  <Wallet className="w-6 h-6" strokeWidth={2} />
                ) : (
                  <Check className="w-6 h-6" strokeWidth={2.5} />
                )}
              </div>

              {/* Content */}
              <div>
                <h3 className={`text-xl font-semibold mb-1 ${feature.isHighlighted ? 'text-primary' : 'text-gray-900'}`}>
                  {feature.isHighlighted && <span className="text-primary">+ </span>}
                  {t(feature.titleKey)}
                </h3>
                <p className="text-gray-500">
                  {t(feature.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
