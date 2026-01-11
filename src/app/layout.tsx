import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ff5d37",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://neoneobank.com"),
  title: "NeoNeo Bank - The Next-Gen Mobile Bank",
  description: "The operating system for modern money. Banking, crypto, investments and payments — all in one app.",
  keywords: ["neobank", "digital bank", "crypto", "investments", "mobile banking", "fintech", "digital wallet", "IBAN", "SEPA", "VISA"],
  authors: [{ name: "NeoNeo Bank" }],
  creator: "NeoNeo Bank",
  publisher: "NeoNeo Bank",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "NeoNeo Bank - The Next-Gen Mobile Bank",
    description: "The operating system for modern money. Banking, crypto, investments and payments — all in one app.",
    type: "website",
    locale: "de_DE",
    siteName: "NeoNeo Bank",
    images: [
      {
        url: "/app-mockup.png",
        width: 400,
        height: 800,
        alt: "NeoNeo Bank App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NeoNeo Bank - The Next-Gen Mobile Bank",
    description: "The operating system for modern money. Banking, crypto, investments and payments — all in one app",
    images: ["/app-mockup.png"],
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
    ],
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
