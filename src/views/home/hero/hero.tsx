import { HeroTitle } from "./hero-title";
import { HeroDescription } from "./hero-description";
import { HeroSocials } from "./hero-socials";
import { HeroImage } from "./hero-image";
import { PageSection } from "@/components";

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
