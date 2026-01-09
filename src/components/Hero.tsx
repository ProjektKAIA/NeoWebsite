"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Label */}
        <p className="section-label mb-6">
          THE NEXT-GEN MOBILE BANK
        </p>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight">
          Smart money management
          <br />
          in your pocket
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-600 mb-16">
          Banking, crypto, investments and payments — all in one app
        </p>

        {/* iPhone Mockup */}
        <div className="relative mx-auto max-w-sm">
          <Image
            src="/app-mockup.png"
            alt="NeoNeo Bank App"
            width={400}
            height={800}
            className="drop-shadow-2xl"
            priority
          />
        </div>

        {/* Coming Soon - App Store Buttons */}
        <div className="mt-16">
          <p className="text-gray-500 text-sm mb-4 font-medium">Bald verfügbar</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Apple App Store Button */}
            <a
              href="#"
              className="flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
            >
              {/* Apple Logo */}
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <p className="text-[10px] opacity-80">Download on the</p>
                <p className="text-lg font-semibold -mt-1">App Store</p>
              </div>
            </a>

            {/* Google Play Store Button */}
            <a
              href="#"
              className="flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
            >
              {/* Google Play Logo - Colorful */}
              <svg className="w-7 h-7" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92z"/>
                <path fill="#FBBC04" d="M17.556 8.235L14.85 9.806 13.792 12l1.058 2.194 2.706 1.571L21.17 13.5c.732-.423.732-1.577 0-2l-3.614-2.265z"/>
                <path fill="#4285F4" d="M3.609 1.814L13.792 12l1.058-2.194-5.464-9.09a1 1 0 0 0-.864-.498c-.186 0-.372.052-.534.154l-4.379 1.442z"/>
                <path fill="#34A853" d="M13.792 12l-1.058 2.194 5.464 9.09a.999.999 0 0 0 1.398.344l4.379-1.442-6.627-7.992L13.792 12z"/>
              </svg>
              <div className="text-left">
                <p className="text-[10px] opacity-80">GET IT ON</p>
                <p className="text-lg font-semibold -mt-1">Google Play</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
