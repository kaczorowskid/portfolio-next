import { HeroTitle } from "./hero-title";
import { HeroDescription } from "./hero-description";
import { HeroSocials } from "./hero-socials";
import { HeroWrapper } from "./hero-wrapper";
import { HeroImage } from "./hero-image";

export const Hero = () => (
  <HeroWrapper>
    <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
      <div className="flex-1">
        <HeroTitle />
        <HeroDescription />
        <HeroSocials />
      </div>
      <HeroImage />
    </div>
  </HeroWrapper>
);
