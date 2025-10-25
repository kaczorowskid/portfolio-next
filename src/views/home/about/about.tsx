import { BackgroundOverlay } from "@/components";
import { AboutList } from "./about-list";
import { AboutWrapper } from "./about-wrapper";

export const About = () => (
  <AboutWrapper>
    <BackgroundOverlay title="about" opacity={5} />
    <AboutList />
  </AboutWrapper>
);
