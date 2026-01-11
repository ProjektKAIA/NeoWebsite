import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technologie | NeoNeo Bank - Enterprise-Grade Infrastruktur",
  description: "Unsere Partner: Nium für Banking, Kraken für 596+ Kryptowährungen, Twelve Data für Marktdaten. Höchste Sicherheit mit Ende-zu-Ende-Verschlüsselung.",
  keywords: ["NeoNeo Bank Technologie", "Nium API", "Kraken Crypto", "Twelve Data", "Banking Infrastruktur", "Fintech Sicherheit"],
  openGraph: {
    title: "Technologie | NeoNeo Bank",
    description: "Enterprise-Grade Infrastruktur mit führenden Technologiepartnern.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technologie | NeoNeo Bank",
    description: "Enterprise-Grade Infrastruktur mit führenden Technologiepartnern.",
  },
};

export default function TechnologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
