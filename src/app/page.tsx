import {
  Header,
  Hero,
  FeatureHighlights,
  MainFeatures,
  CTA,
  Footer
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeatureHighlights />
        <MainFeatures />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
