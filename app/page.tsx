import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { ProductsSection } from "@/components/ProductsSection";
import { BrandingSection } from "@/components/BrandingSection";
import { WhiteLabelSection } from "@/components/WhiteLabelSection";
import { ManufacturingTimeline } from "@/components/ManufacturingTimeline";
import { WholesaleSection } from "@/components/WholesaleSection";
import { AboutPreview } from "@/components/AboutPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ProductsSection />
      <BrandingSection />
      <WhiteLabelSection />
      <ManufacturingTimeline />
      <WholesaleSection />
      <AboutPreview />
    </>
  );
}
