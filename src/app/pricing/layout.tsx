import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preise & Pläne | NeoNeo Bank - Von Free bis Ultra",
  description: "Wähle den perfekten Plan für dich. Standard kostenlos, Plus €4,99, Premium €9,99, Metal €17,99 oder Ultra €59,99 pro Monat. Schufa-frei, auch bei negativen Einträgen.",
  keywords: ["NeoNeo Bank Preise", "Neobank Abo", "Banking Kosten", "Schufa-frei Konto", "Mobile Banking Tarife"],
  openGraph: {
    title: "Preise & Pläne | NeoNeo Bank",
    description: "Wähle den perfekten Plan für dich. Von kostenlos bis Ultra Premium. 100% Schufa-frei.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preise & Pläne | NeoNeo Bank",
    description: "Wähle den perfekten Plan für dich. Von kostenlos bis Ultra Premium.",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
