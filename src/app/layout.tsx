import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ff5d37",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://neoneobank.com"),
  title: "Neoneo Bank - The Next-Gen Mobile Bank",
  description: "Banking, crypto, investments and payments — all in one app. Smart money management in your pocket.",
  keywords: ["neobank", "digital bank", "crypto", "investments", "mobile banking", "fintech", "digital wallet"],
  authors: [{ name: "Neoneo Bank" }],
  creator: "Neoneo Bank",
  publisher: "Neoneo Bank",
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
    title: "Neoneo Bank - The Next-Gen Mobile Bank",
    description: "Banking, crypto, investments and payments — all in one app. Smart money management in your pocket.",
    type: "website",
    locale: "de_DE",
    siteName: "Neoneo Bank",
    images: [
      {
        url: "/app-mockup.png",
        width: 400,
        height: 800,
        alt: "Neoneo Bank App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neoneo Bank - The Next-Gen Mobile Bank",
    description: "Banking, crypto, investments and payments — all in one app",
    images: ["/app-mockup.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
