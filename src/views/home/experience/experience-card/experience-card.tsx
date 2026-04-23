import { TablerIcon } from "@tabler/icons-react";
import { ExperienceCardAchievements } from "./experience-card-achievements";
import { ExperienceCardDescription } from "./experience-card-description";
import { StaticImageData } from "next/image";
import { ExperienceCardHeader } from "./experience-card-header";
import { ExperienceCardTechnologies } from "./experience-card-technologies";

type ExperienceCardProps = {
  experience: {
    id: string;
    company: string;
    position: string;
    location: string;
    period: string;
    logo: StaticImageData;
    description: string;
    achievements: string[];
    technologies: {
      name: string;
      icon: TablerIcon;
    }[];
  };
};

export const ExperienceCard = ({
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
}: ExperienceCardProps) => (
  <div className="w-full p-4 md:p-10 relative border-2 border-gray-200 rounded-3xl mb-12 shadow-2xl ">
    <ExperienceCardHeader
      position={position}
      logo={logo}
      title={company}
      period={period}
      location={location}
    />
    <ExperienceCardDescription description={description} />
    <ExperienceCardAchievements achievements={achievements} />
    <ExperienceCardTechnologies technologies={technologies} />
  </div>
);
