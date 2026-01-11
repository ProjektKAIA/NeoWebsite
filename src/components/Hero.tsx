"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useLanguage } from "@/context/LanguageContext";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

type GalleryItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
  poster?: string;
};

// Gallery items - add more images/videos here
const galleryItems: GalleryItem[] = [
  {
    type: "video",
    src: "/grok-video-cropped.mp4",
    poster: "/app-mockup.png",
  },
  // Images temporarily disabled - need versions without background
  // {
  //   type: "image",
  //   src: "/Gemini_Generated_Image_cqpug7cqpug7cqpu.png",
  //   alt: "NeoNeo Bank App - Dashboard",
  // },
  // {
  //   type: "image",
  //   src: "/Gemini_Generated_Image_gvsckcgvsckcgvsc.png",
  //   alt: "NeoNeo Bank App - Features",
  // },
  // {
  //   type: "image",
  //   src: "/Gemini_Generated_Image_duupggduupggduup.png",
  //   alt: "NeoNeo Bank App - Transactions",
  // },
];

export default function Hero() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);

    // Handle video playback when sliding
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === swiper.activeIndex) {
          // Auto-play video when it becomes active
          video.play();
        } else {
          video.pause();
        }
      }
    });
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

        {/* Swipeable Gallery */}
        <div className="relative mx-auto w-full max-w-md md:max-w-lg lg:max-w-xl">
          <Swiper
            modules={[Pagination, Navigation, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={0}
            speed={600}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            onSlideChange={handleSlideChange}
            className="hero-swiper"
          >
            {galleryItems.map((item, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center">
                <div className="relative mx-auto w-64 sm:w-72 md:w-80 lg:w-96">
                  {item.type === "video" ? (
                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-black">
                      <video
                        ref={(el) => { videoRefs.current[index] = el; }}
                        src={item.src}
                        poster={item.poster}
                        className="w-full h-auto"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.alt || "NeoNeo Bank App"}
                      width={400}
                      height={800}
                      className="drop-shadow-2xl w-full h-auto"
                      priority={index === 0}
                      sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                    />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          {galleryItems.length > 1 && (
            <>
              <button
                className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 -ml-2 md:-ml-6"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 -mr-2 md:-mr-6"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Slide indicator */}
          {galleryItems.length > 1 && (
            <div className="mt-6 flex justify-center gap-2">
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    activeIndex === index
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {item.type === "video" ? (
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  ) : (
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  )}
                  <span>{index + 1}</span>
                </div>
              ))}
            </div>
          )}
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

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .hero-swiper {
          padding-bottom: 40px;
        }
        .hero-swiper .swiper-wrapper {
          transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        .hero-swiper .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.5s ease, opacity 0.5s ease;
        }
        .hero-swiper .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        .hero-swiper .swiper-pagination-bullet-active {
          background: #ff5d37;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}
