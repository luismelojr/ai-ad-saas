import Features from "@/components/landing/features-1";
import FooterSection from "@/components/landing/footer";
import HeroSection from "@/components/landing/hero-section";
import IntegrationsSection from "@/components/landing/integrations-6";
import Pricing from "@/components/landing/pricing";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <IntegrationsSection />
      <Pricing />
      <FooterSection />
    </>
  );
}
