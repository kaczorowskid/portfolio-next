import { About } from "@/views/about";
import { Contact } from "@/views/contact";
import { Experience } from "@/views/experience";
import { Hero } from "@/views/hero";
import { Portfolio } from "@/views/portfolio";
import { Skills } from "@/views/skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}
