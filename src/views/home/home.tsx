import { About } from "./about";
import { Contact } from "./contact";
import { Experience } from "./experience";
import { Hero } from "./hero";
import { Portfolio } from "./portfolio";
import { Skills } from "./skills";

export const Home = () => (
  <>
    <Hero />
    <About />
    <Portfolio />
    <Experience />
    <Skills />
    <Contact />
  </>
);
