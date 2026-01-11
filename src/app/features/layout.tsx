import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features | NeoNeo Bank - Banking, Krypto, Investments & mehr",
  description: "Entdecke alle Features: IBAN, SEPA, 596+ Kryptowährungen, globale Aktien, ETFs, In-App Chat mit Geldversand, Biometrische Sicherheit und mehr.",
  keywords: ["NeoNeo Bank Features", "Mobile Banking Funktionen", "Krypto Trading", "IBAN Account", "SEPA Transfer", "Digital Wallet"],
  openGraph: {
    title: "Features | NeoNeo Bank",
    description: "Banking, Krypto, Investments und Payments - alle Features in einer App.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Features | NeoNeo Bank",
    description: "Banking, Krypto, Investments und Payments - alle Features in einer App.",
  },
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
