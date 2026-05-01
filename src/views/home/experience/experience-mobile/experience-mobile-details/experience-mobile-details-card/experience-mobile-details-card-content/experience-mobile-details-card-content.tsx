import { AccordionContent } from "@/components/ui/accordion";
import { ExperienceMobileDetailsCardContentDescription } from "./experience-mobile-details-card-content-description";
import { ExperienceMobileDetailsCardContentAchievements } from "./experience-mobile-details-card-content-achievements";
import { ExperienceMobileDetailsCardContentTechnologies } from "./experience-mobile-details-card-content-technologies";
import { IconType } from "react-icons";

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
