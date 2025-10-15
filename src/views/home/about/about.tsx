import { AboutList } from "./about-list";
import { AboutOverlay } from "./about-overlay";
import { AboutWrapper } from "./about-wrapper";

export const About = () => (
  <AboutWrapper>
    <AboutOverlay />
    <AboutList />
  </AboutWrapper>
);
