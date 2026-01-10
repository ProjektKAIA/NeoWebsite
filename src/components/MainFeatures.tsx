"use client";

import { Coins, CreditCard, ArrowLeftRight, TrendingUp, MessageCircle, Shield, Banknote, Bitcoin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function MainFeatures() {
  const { t } = useLanguage();

  const features = [
    {
      titleKey: "features.iban.title",
      descKey: "features.iban.desc",
      icon: Banknote,
      isHighlighted: true
    },
    {
      titleKey: "features.cards.title",
      descKey: "features.cards.desc",
      icon: CreditCard,
      isHighlighted: true
    },
    {
      titleKey: "features.transfers.title",
      descKey: "features.transfers.desc",
      icon: ArrowLeftRight
    },
    {
      titleKey: "features.crypto.title",
      descKey: "features.crypto.desc",
      icon: Bitcoin
    },
    {
      titleKey: "features.investments.title",
      descKey: "features.investments.desc",
      icon: TrendingUp
    },
    {
      titleKey: "features.chat.title",
      descKey: "features.chat.desc",
      icon: MessageCircle,
      isHighlighted: true
    },
    {
      titleKey: "features.support.title",
      descKey: "features.support.desc",
      icon: Coins
    },
    {
      titleKey: "features.security.title",
      descKey: "features.security.desc",
      icon: Shield
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="section-label mb-4">
            {t("features.label")}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {t("features.title")}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            {t("features.desc")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`card p-6 ${feature.isHighlighted ? 'bg-primary/5 border-primary/20' : ''}`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${feature.isHighlighted ? 'bg-primary/20' : 'bg-primary/10'}`}>
                  <Icon className={`w-6 h-6 ${feature.isHighlighted ? 'text-primary' : 'text-primary'}`} />
                </div>

                {/* Title */}
                <h3 className={`text-lg font-semibold mb-2 whitespace-pre-line leading-tight ${feature.isHighlighted ? 'text-primary' : 'text-gray-900'}`}>
                  {t(feature.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm">
                  {t(feature.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
