"use client";

import { Coins } from "lucide-react";

const features = [
  {
    title: "Multi-currency accounts\n& card balances"
  },
  {
    title: "Instant transfers\n& QR payments"
  },
  {
    title: "Real-time crypto rates\n& market data"
  },
  {
    title: "Smart investments\nwith live insights"
  },
  {
    title: "24/7 customer support\n& security tools"
  },
  {
    title: "End-to-end encryption\n& Biometric or 2FA login"
  }
];

export default function MainFeatures() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="section-label mb-4">
            MORE THAN JUST A BANK
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Always at your fingertips in Neobank
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Neobank is a type of direct bank that operates exclusively using online banking without traditional physical branch networks
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card p-8"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Coins className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 whitespace-pre-line leading-tight">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
