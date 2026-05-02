import type { Experience } from "../../experience.data";
import { ExperienceDesktopCardAchievements } from "./experience-desktop-card-achievements";
import { ExperienceDesktopCardDescription } from "./experience-desktop-card-description";
import { ExperienceDesktopCardHeader } from "./experience-desktop-card-header";
import { ExperienceDesktopCardTechnologies } from "./experience-desktop-card-technologies";

type ExperienceDesktopCardProps = {
  experience: Experience;
};

export const ExperienceDesktopCard = ({
  experience: {
    achievements,
    company,
    description,
    location,
    period,
    logo,
    position,
    technologies,
  },
}: ExperienceDesktopCardProps) => (
  <div className="w-full p-4 md:p-10 relative border-2 border-gray-200 rounded-3xl mb-12 shadow-2xl ">
    <ExperienceDesktopCardHeader
      position={position}
      logo={logo}
      company={company}
      period={period}
      location={location}
    />
    <ExperienceDesktopCardDescription description={description} />
    <ExperienceDesktopCardAchievements achievements={achievements} />
    <ExperienceDesktopCardTechnologies technologies={technologies} />
  </div>
);
