import { AccordionContent } from "@/components/ui/accordion";
import type { Project } from "../../../../projects-details.data";
import { ProjectsMobileDetailsItemContentDescription } from "./projects-mobile-details-item-content-description";
import { ProjectsMobileDetailsItemContentImage } from "./projects-mobile-details-item-content-image";
import { ProjectsMobileDetailsItemContentList } from "./projects-mobile-details-item-content-list";

type ProjectsMobileDetailsItemContentProps = {
  project: Project;
};

export const ProjectsMobileDetailsItemContent = ({
  project: { technologies, description, image, title, github, live },
}: ProjectsMobileDetailsItemContentProps) => (
  <AccordionContent>
    <ProjectsMobileDetailsItemContentImage
      image={image}
      title={title}
      github={github}
      live={live}
    />
    <ProjectsMobileDetailsItemContentDescription description={description} />
    <ProjectsMobileDetailsItemContentList technologies={technologies} />
  </AccordionContent>
);
