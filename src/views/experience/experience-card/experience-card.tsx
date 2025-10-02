import { TablerIcon } from "@tabler/icons-react";
import { ExperienceCardAchievements } from "./experience-card-achievements";
import { ExperienceCardDescription } from "./experience-card-description";
import { ExperienceCardLocation } from "./experience-card-location";
import { ExperienceCardPeriod } from "./experience-card-period";
import { ExperienceCardPosition } from "./experience-card-position";
import { ExperienceCardTechnologies } from "./experience-card-technologies";
import { ExperienceCardTitle } from "./experience-card-title";

type ExperienceCardProps = {
  experience: {
    id: string;
    company: string;
    position: string;
    location: string;
    period: string;
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
    position,
    technologies,
  },
}: ExperienceCardProps) => (
  <div className="p-10 relative border-2 border-gray-200 text-black rounded-3xl mb-12 shadow-2xl">
    <div className="flex justify-between mb-3">
      <ExperienceCardTitle title={company} />
      <ExperienceCardPeriod period={period} />
    </div>
    <ExperienceCardPosition position={position} />
    <ExperienceCardLocation location={location} />
    <ExperienceCardDescription description={description} />
    <ExperienceCardAchievements achievements={achievements} />
    <ExperienceCardTechnologies technologies={technologies} />
  </div>
);
