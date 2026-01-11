import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns | Neoneo Bank - Die Bank der nächsten Generation",
  description: "Erfahre mehr über NEONEO HOLDINGS LTD und unsere Mission: Finanzielle Freiheit für alle. Gegründet 2024 in London, Launch geplant für 2026.",
  keywords: ["Neoneo Bank Über uns", "NEONEO HOLDINGS LTD", "Neobank Story", "Fintech Startup", "Mobile Bank UK"],
  openGraph: {
    title: "Über uns | Neoneo Bank",
    description: "Die Bank für die nächste Generation. Unsere Mission: Finanzielle Freiheit für alle.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Über uns | Neoneo Bank",
    description: "Die Bank für die nächste Generation. Unsere Mission: Finanzielle Freiheit für alle.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
