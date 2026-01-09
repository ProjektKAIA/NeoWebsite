"use client";

import { Check } from "lucide-react";

const highlights = [
  {
    title: "Easy onboarding",
    description: "Open your account in minutes"
  },
  {
    title: "All-in-one dashboard",
    description: "No need to switch apps"
  },
  {
    title: "Real-time updates",
    description: "Stay on top of your finances"
  },
  {
    title: "Future-ready",
    description: "Built for crypto and global markets"
  },
  {
    title: "Sleek, intuitive design",
    description: "Built for modern users"
  },
  {
    title: "Your money is safe",
    description: "Licensed and compliant"
  }
];

export default function FeatureHighlights() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10">
          {highlights.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4"
            >
              {/* Checkmark */}
              <div className="flex-shrink-0 w-6 h-6 text-primary mt-0.5">
                <Check className="w-6 h-6" strokeWidth={2.5} />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
