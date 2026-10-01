import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ff5d37",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://neoneobank.com"),
  title: "NEONEO Bank – Projekt eingestellt",
  description: "Dieses Projekt wurde eingestellt.",
  keywords: ["neobank", "digital bank", "crypto", "investments", "mobile banking", "fintech", "digital wallet", "IBAN", "SEPA", "VISA"],
  authors: [{ name: "NEONEO Bank" }],
  creator: "NEONEO Bank",
  publisher: "NEONEO Bank",
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
    title: "NEONEO Bank – Projekt eingestellt",
    description: "Dieses Projekt wurde eingestellt.",
    type: "website",
    locale: "de_DE",
    siteName: "NEONEO Bank",
    images: [
      {
        url: "/app-mockup.png",
        width: 400,
        height: 800,
        alt: "NEONEO Bank App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEONEO Bank – Projekt eingestellt",
    description: "Dieses Projekt wurde eingestellt.",
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
    <html lang="de" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
