import {
  Header,
  Hero,
  FeatureHighlights,
  MainFeatures,
  TechPartners,
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
        <CTA />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
