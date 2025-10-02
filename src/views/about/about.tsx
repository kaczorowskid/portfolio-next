import { Container } from "@/components";
import { AboutList } from "./about-list";
import { AboutOverlay } from "./about-overlay";

export const About = () => (
  <Container
    as="section"
    className="bg-black relative overflow-hidden text-white px-6 py-32 mb-10"
  >
    <div id="about-section">
      <AboutOverlay />
      <AboutList />
    </div>
  </Container>
);
