import { AccordionItem } from "@/components/ui/accordion";
import { Project } from "../../../projects-details.data";
import { ProjectsMobileDetailsItemTrigger } from "./experience-mobile-details-item-trigger";
import { ProjectsMobileDetailsItemContent } from "./projects-mobile-details-item-content";

type ProjectsMobileDetailsItemProps = {
  project: Project;
  count: number;
};

export const ProjectsMobileDetailsItem = ({
  count,
  project,
}: ProjectsMobileDetailsItemProps) => (
  <AccordionItem value={project.title}>
    <ProjectsMobileDetailsItemTrigger count={count} title={project.title} />
    <ProjectsMobileDetailsItemContent project={project} />
  </AccordionItem>
);
