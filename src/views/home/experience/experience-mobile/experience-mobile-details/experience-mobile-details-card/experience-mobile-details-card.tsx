import { AccordionItem } from "@/components/ui/accordion";
import { ExperienceMobileDetailsCardTrigger } from "./experience-mobile-details-card-trigger";
import { ExperienceMobileDetailsCardContent } from "./experience-mobile-details-card-content";
import { Experience } from "../../../experience.data";

type ExperienceMobileDetailsCardProps = {
  experience: Experience;
};

export const ExperienceMobileDetailsCard = ({
  experience: {
    achievements,
    company,
    description,
    id,
    logo,
    period,
    position,
    technologies,
  },
}: ExperienceMobileDetailsCardProps) => (
  <AccordionItem value={id}>
    <ExperienceMobileDetailsCardTrigger
      company={company}
      period={period}
      logo={logo}
      position={position}
    />
    <ExperienceMobileDetailsCardContent
      achievements={achievements}
      description={description}
      technologies={technologies}
    />
  </AccordionItem>
);
