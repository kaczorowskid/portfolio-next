import { About } from "./about";
import { Contact } from "./contact";
import { Experience } from "./experience";
import { Expertise } from "./expertise/expertise";

import { Hero } from "./hero";
import { Projects } from "./projects";
import { Skills } from "./skills";

export const Home = () => (
  <>
    <Hero />
    <About />
    <Projects />
    <Experience />
    <Skills />
    <Expertise />
    <Contact />
  </>
);
