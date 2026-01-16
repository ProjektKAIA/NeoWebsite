"use client";

import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY } from "@/constants/company";

// iPhone Screenshots für den Mockup-Rahmen
const IPHONE_SCREENSHOTS = [
  { src: "/home.png", alt: `${COMPANY.tradingAs} App - Home` },
  { src: "/transfer.png", alt: `${COMPANY.tradingAs} App - Überweisungen` },
  { src: "/currencys.png", alt: `${COMPANY.tradingAs} App - Währungen` },
  { src: "/investments.png", alt: `${COMPANY.tradingAs} App - Investments` },
  { src: "/support.png", alt: `${COMPANY.tradingAs} App - Support` },
];

const AUTO_SLIDE_INTERVAL = 4000;

export default function Hero() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Video ended state - wenn true, zeige Screenshots
  const [videoEnded, setVideoEnded] = useState(false);

  // iPhone Screenshot Slider State
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const minSwipeDistance = 50;

  const goToSlide = useCallback((index: number) => {
    setCurrentScreenshot(index);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentScreenshot((prev) => (prev + 1) % IPHONE_SCREENSHOTS.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentScreenshot((prev) => (prev - 1 + IPHONE_SCREENSHOTS.length) % IPHONE_SCREENSHOTS.length);
  }, []);

  const resetInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(goToNext, AUTO_SLIDE_INTERVAL);
  }, [goToNext]);

  // Starte Auto-Slide nur wenn Video beendet ist
  useEffect(() => {
    if (videoEnded) {
      intervalRef.current = setInterval(goToNext, AUTO_SLIDE_INTERVAL);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [goToNext, videoEnded]);

  // Video ended handler
  const handleVideoEnded = useCallback(() => {
    setVideoEnded(true);
  }, []);

  // Video erneut abspielen
  const replayVideo = useCallback(() => {
    if (videoRef.current) {
      setVideoEnded(false);
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
    // Auto-slide stoppen während Video läuft
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > minSwipeDistance;
    if (isSwipe) {
      if (distance > 0) {
        goToNext();
      } else {
        goToPrev();
      }
      resetInterval();
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 md:pt-32 pb-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Label */}
        <p className="section-label mb-6 mt-4 md:mt-8">
          {t("hero.label")}
        </p>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight">
          {t("hero.title1")}
          <br />
          {t("hero.title2")}
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-600 mb-4">
          {t("hero.subtitle")}
        </p>

        {/* Tagline */}
        <p className="text-sm text-gray-500 italic mb-12">
          {t("hero.tagline")}
        </p>

        {/* Video oder Screenshots - nur eines wird angezeigt */}
        <div className="flex items-center justify-center">
          <div className="relative w-64 sm:w-72 md:w-80">
            {/* Video - ausgeblendet wenn beendet */}
            <div
              className={`transition-opacity duration-700 ${
                videoEnded ? 'opacity-0 absolute inset-0 pointer-events-none' : 'opacity-100'
              }`}
            >
              <video
                ref={videoRef}
                src="/grok-video.mp4"
                className="w-full h-auto block"
                autoPlay
                muted
                playsInline
                preload="auto"
                onEnded={handleVideoEnded}
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* iPhone Mockup mit Screenshots - eingeblendet nach Video */}
            <div
              className={`transition-opacity duration-700 ${
                videoEnded ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
              }`}
            >
              {/* iPhone Rahmen */}
              <div
                className="bg-black border-[12px] border-gray-800 rounded-[45px] overflow-hidden shadow-2xl shadow-black/30"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10" />

                {/* Screenshot Container */}
                <div className="relative w-full aspect-[9/19.5]">
                  {IPHONE_SCREENSHOTS.map((screenshot, index) => (
                    <div
                      key={screenshot.src}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        index === currentScreenshot ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Thumbnail Galerie + Play Button */}
              <div className="flex items-center justify-center gap-2 mt-6">
                {/* Play Button für Video */}
                <button
                  onClick={replayVideo}
                  className={`relative w-14 h-14 rounded-xl overflow-hidden border-2 border-gray-200 hover:border-primary transition-all duration-300 bg-gray-900 flex items-center justify-center group`}
                  aria-label="Video abspielen"
                >
                  {/* Play Icon */}
                  <svg
                    className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>

                {/* Screenshot Thumbnails */}
                {IPHONE_SCREENSHOTS.map((screenshot, index) => (
                  <button
                    key={screenshot.src}
                    onClick={() => {
                      goToSlide(index);
                      resetInterval();
                    }}
                    className={`relative w-14 h-14 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      index === currentScreenshot
                        ? 'border-primary ring-2 ring-primary/30 scale-105'
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                    aria-label={`Screenshot ${index + 1} anzeigen`}
                  >
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon - App Store Buttons */}
        <div className="mt-16">
          <p className="text-gray-500 text-sm mb-4 font-medium">{t("hero.comingSoon")}</p>
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
                <p className="text-[10px] opacity-80">{t("hero.downloadOn")}</p>
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
                <p className="text-[10px] opacity-80">{t("hero.getItOn")}</p>
                <p className="text-lg font-semibold -mt-1">Google Play</p>
              </div>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
