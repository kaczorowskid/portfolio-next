import { AccordionItem } from "@/components/ui/accordion";
import type { Project } from "../../../projects-details.data";
import { ProjectsMobileDetailsItemContent } from "./projects-mobile-details-item-content";
import { ProjectsMobileDetailsItemTrigger } from "./projects-mobile-details-item-trigger";

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
