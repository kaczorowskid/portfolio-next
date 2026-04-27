import { AccordionContent } from "@/components/ui/accordion";
import { ProjectsMobileDetailsItemContentDescription } from "./projects-mobile-details-item-content-description";
import { ProjectsMobileDetailsItemContentList } from "./projects-mobile-details-item-content-list";
import { ProjectsMobileDetailsItemContentImage } from "./projects-mobile-details-item-content-image";
import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

type ProjectsMobileDetailsItemContentProps = {
  projects: {
    image: StaticImageData;
    description: string;
    technologies: {
      name: string;
      icon: IconType;
    }[];
  };
};

export const ProjectsMobileDetailsItemContent = ({
  projects: { technologies, description, image },
}: ProjectsMobileDetailsItemContentProps) => (
  <AccordionContent>
    <ProjectsMobileDetailsItemContentImage image={image} />
    <ProjectsMobileDetailsItemContentDescription description={description} />
    <ProjectsMobileDetailsItemContentList technologies={technologies} />
  </AccordionContent>
);
