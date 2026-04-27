import { AccordionContent } from "@/components/ui/accordion";
import { Project } from "../../../../projects-details.data";
import { ProjectsMobileDetailsItemContentDescription } from "./projects-mobile-details-item-content-description";
import { ProjectsMobileDetailsItemContentImage } from "./projects-mobile-details-item-content-image";
import { ProjectsMobileDetailsItemContentList } from "./projects-mobile-details-item-content-list";

type ProjectsMobileDetailsItemContentProps = {
  project: Project;
};

export const ProjectsMobileDetailsItemContent = ({
  project: { technologies, description, image },
}: ProjectsMobileDetailsItemContentProps) => (
  <AccordionContent>
    <ProjectsMobileDetailsItemContentImage image={image} />
    <ProjectsMobileDetailsItemContentDescription description={description} />
    <ProjectsMobileDetailsItemContentList technologies={technologies} />
  </AccordionContent>
);
