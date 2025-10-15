import { HeroTitle } from "./hero-title";
import { HeroDescription } from "./hero-description";
import { HeroSkills } from "./hero-skills";
import { HeroSocials } from "./hero-socials";
import { HeroWrapper } from "./hero-wrapper";
import { HeroMorphingBlob } from "./hero-morphing-blob";

export const Hero = () => (
  <HeroWrapper>
    <div className="flex">
      <div>
        <HeroTitle />
        <HeroDescription />
        <HeroSkills />
        <HeroSocials />
      </div>
      <HeroMorphingBlob />
    </div>
  </HeroWrapper>
);
