import { PageSection } from "@/components";
import { HeroDescription } from "./hero-description";
import { HeroImage } from "./hero-image";
import { HeroSocials } from "./hero-socials";
import { HeroTitle } from "./hero-title";

export const Hero = () => (
  <PageSection id="hero-section">
    <PageSection.Content className="h-screen flex flex-col justify-center max-w-350">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
        <div className="flex-1">
          <HeroTitle />
          <HeroDescription />
          <HeroSocials />
        </div>
        <HeroImage />
      </div>
    </PageSection.Content>
  </PageSection>
);
