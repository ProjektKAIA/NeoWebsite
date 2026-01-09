"use client";

export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="card p-12 md:p-20 text-center">
          {/* Section Label */}
          <p className="section-label mb-4">
            DESIGNED FOR MODERN LIFE
          </p>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Feel free to contact us
          </h2>

          {/* Description */}
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-10">
            Neoneo bank gives users the tools to send, save, invest, and grow from one beautifully simple app
          </p>

          {/* CTA Button */}
          <a
            href="https://t.me/neoneobank"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4"
          >
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
}
