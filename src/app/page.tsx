import {
  Header,
  Hero,
  FeatureHighlights,
  MainFeatures,
  TechPartners,
  PricingPlans,
  CTA,
  Footer,
  CookieBanner
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeatureHighlights />
        <MainFeatures />
        <TechPartners />
        <PricingPlans />
        <CTA />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
