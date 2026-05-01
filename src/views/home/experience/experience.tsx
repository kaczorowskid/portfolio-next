import { ExperienceDesktop } from "./experience-desktop";
import { ExperienceMobile } from "./experience-mobile";

export const Experience = () => (
  <div id="experience-section">
    <div className="hidden lg:block">
      <ExperienceDesktop />
    </div>
    <div className="block lg:hidden">
      <ExperienceMobile />
    </div>
  </div>
);
