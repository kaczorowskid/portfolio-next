import { Container } from "@/components";
import { HeroTitle } from "./hero-title";
import { HeroDescription } from "./hero-description";
import { HeroGreeting } from "./hero-greeting";
import { HeroSkills } from "./hero-skills";
import { HeroSocials } from "./hero-socials";

export const Hero = () => (
  <Container
    as="section"
    className="h-screen flex flex-col justify-center container px-6 md:px-0"
  >
    <HeroGreeting />
    <HeroTitle />
    <HeroDescription />
    <HeroSkills />
    <HeroSocials />
  </Container>
);
