"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { X, Settings, Shield } from "lucide-react";

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

const defaultPreferences: CookiePreferences = {
  necessary: true, // Always required
  functional: false,
  analytics: false,
  marketing: false,
};

export default function CookieBanner() {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  // Check if consent was already given
  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      preferences: prefs,
      timestamp: new Date().toISOString(),
      version: "1.0"
    }));
    setIsVisible(false);
  };

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    saveConsent(allAccepted);
  };

  const acceptNecessaryOnly = () => {
    saveConsent(defaultPreferences);
  };

  const savePreferences = () => {
    saveConsent(preferences);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === "necessary") return; // Can't disable necessary cookies
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isVisible) return null;

  const t = {
    en: {
      title: "We value your privacy",
      description: "We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking \"Accept All\", you consent to our use of cookies.",
      acceptAll: "Accept All",
      rejectAll: "Necessary Only",
      settings: "Cookie Settings",
      saveSettings: "Save Preferences",
      cookiePolicy: "Cookie Policy",
      privacyPolicy: "Privacy Policy",

      // Settings
      settingsTitle: "Cookie Preferences",
      settingsDesc: "Manage your cookie preferences. You can enable or disable different types of cookies below.",

      necessary: "Strictly Necessary",
      necessaryDesc: "These cookies are essential for the website to function properly. They enable basic functions like page navigation and access to secure areas.",
      alwaysActive: "Always Active",

      functional: "Functional Cookies",
      functionalDesc: "These cookies enable the website to provide enhanced functionality and personalization, such as remembering your language preference.",

      analytics: "Analytics Cookies",
      analyticsDesc: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",

      marketing: "Marketing Cookies",
      marketingDesc: "These cookies are used to track visitors across websites to display relevant advertisements.",
    },
    de: {
      title: "Wir respektieren Ihre Privatsphäre",
      description: "Wir verwenden Cookies, um Ihr Browsing-Erlebnis zu verbessern, personalisierte Inhalte bereitzustellen und unseren Traffic zu analysieren. Durch Klicken auf \"Alle akzeptieren\" stimmen Sie unserer Verwendung von Cookies zu.",
      acceptAll: "Alle akzeptieren",
      rejectAll: "Nur notwendige",
      settings: "Cookie-Einstellungen",
      saveSettings: "Einstellungen speichern",
      cookiePolicy: "Cookie-Richtlinie",
      privacyPolicy: "Datenschutz",

      // Settings
      settingsTitle: "Cookie-Einstellungen",
      settingsDesc: "Verwalten Sie Ihre Cookie-Einstellungen. Sie können verschiedene Arten von Cookies unten aktivieren oder deaktivieren.",

      necessary: "Unbedingt erforderlich",
      necessaryDesc: "Diese Cookies sind für das ordnungsgemäße Funktionieren der Website unerlässlich. Sie ermöglichen grundlegende Funktionen wie die Seitennavigation.",
      alwaysActive: "Immer aktiv",

      functional: "Funktionale Cookies",
      functionalDesc: "Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung, wie z.B. das Speichern Ihrer Spracheinstellung.",

      analytics: "Analyse-Cookies",
      analyticsDesc: "Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem sie Informationen anonym sammeln.",

      marketing: "Marketing-Cookies",
      marketingDesc: "Diese Cookies werden verwendet, um Besucher über Websites hinweg zu verfolgen und relevante Werbung anzuzeigen.",
    }
  };

  const text = t[language];

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
        onClick={() => {}} // Prevent closing by clicking backdrop
      />

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[101] p-4 md:p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">

            {!showSettings ? (
              // Main Banner
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      {text.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {text.description}
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={acceptAll}
                    className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                  >
                    {text.acceptAll}
                  </button>
                  <button
                    onClick={acceptNecessaryOnly}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-colors"
                  >
                    {text.rejectAll}
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-colors"
                  >
                    <Settings size={18} />
                    {text.settings}
                  </button>
                </div>

                {/* Links */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap gap-4 text-sm">
                  <Link href="/cookies" className="text-primary hover:underline">
                    {text.cookiePolicy}
                  </Link>
                  <Link href="/privacy" className="text-primary hover:underline">
                    {text.privacyPolicy}
                  </Link>
                </div>
              </div>
            ) : (
              // Settings Panel
              <div className="max-h-[80vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      {text.settingsTitle}
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">
                      {text.settingsDesc}
                    </p>
                  </div>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Close"
                  >
                    <X size={20} className="text-gray-500" />
                  </button>
                </div>

                {/* Cookie Categories */}
                <div className="p-6 space-y-6">
                  {/* Necessary Cookies */}
                  <div className="border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{text.necessary}</h3>
                      <span className="text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                        {text.alwaysActive}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{text.necessaryDesc}</p>
                  </div>

                  {/* Functional Cookies */}
                  <div className="border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{text.functional}</h3>
                      <ToggleSwitch
                        checked={preferences.functional}
                        onChange={() => togglePreference("functional")}
                      />
                    </div>
                    <p className="text-sm text-gray-500">{text.functionalDesc}</p>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{text.analytics}</h3>
                      <ToggleSwitch
                        checked={preferences.analytics}
                        onChange={() => togglePreference("analytics")}
                      />
                    </div>
                    <p className="text-sm text-gray-500">{text.analyticsDesc}</p>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{text.marketing}</h3>
                      <ToggleSwitch
                        checked={preferences.marketing}
                        onChange={() => togglePreference("marketing")}
                      />
                    </div>
                    <p className="text-sm text-gray-500">{text.marketingDesc}</p>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="sticky bottom-0 bg-white border-t border-gray-100 p-6 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={savePreferences}
                    className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                  >
                    {text.saveSettings}
                  </button>
                  <button
                    onClick={acceptAll}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-colors"
                  >
                    {text.acceptAll}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// Toggle Switch Component
function ToggleSwitch({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={`relative w-12 h-6 rounded-full transition-colors ${
        checked ? "bg-primary" : "bg-gray-300"
      }`}
      role="switch"
      aria-checked={checked}
    >
      <span
        className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${
          checked ? "translate-x-7" : "translate-x-1"
        }`}
      />
    </button>
  );
}
