import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neoneo Bank - The Next-Gen Mobile Bank",
  description: "Banking, crypto, investments and payments — all in one app. Smart money management in your pocket.",
  keywords: ["neobank", "digital bank", "crypto", "investments", "mobile banking"],
  openGraph: {
    title: "Neoneo Bank - The Next-Gen Mobile Bank",
    description: "Banking, crypto, investments and payments — all in one app",
    type: "website",
    locale: "de_DE",
    siteName: "Neoneo Bank",
  },
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
