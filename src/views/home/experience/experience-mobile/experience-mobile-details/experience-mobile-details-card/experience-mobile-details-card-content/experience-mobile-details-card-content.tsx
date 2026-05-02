import type { IconType } from "react-icons";
import { AccordionContent } from "@/components/ui/accordion";
import { ExperienceMobileDetailsCardContentAchievements } from "./experience-mobile-details-card-content-achievements";
import { ExperienceMobileDetailsCardContentDescription } from "./experience-mobile-details-card-content-description";
import { ExperienceMobileDetailsCardContentTechnologies } from "./experience-mobile-details-card-content-technologies";

type ExperienceMobileDetailsCardContentProps = {
  achievements: string[];
  description: string;
  technologies: {
    name: string;
    icon: IconType;
  }[];
};

export const ExperienceMobileDetailsCardContent = ({
  achievements,
  description,
  technologies,
}: ExperienceMobileDetailsCardContentProps) => (
  <AccordionContent>
    <ExperienceMobileDetailsCardContentDescription description={description} />
    <ExperienceMobileDetailsCardContentAchievements
      achievements={achievements}
    />
    <ExperienceMobileDetailsCardContentTechnologies
      technologies={technologies}
    />
  </AccordionContent>
);
