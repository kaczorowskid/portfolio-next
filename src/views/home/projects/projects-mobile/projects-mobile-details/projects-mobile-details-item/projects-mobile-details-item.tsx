import { AccordionItem } from "@/components/ui/accordion";
import { ProjectsMobileDetailsItemTrigger } from "./experience-mobile-details-item-trigger";
import { ProjectsMobileDetailsItemContent } from "./projects-mobile-details-item-content";
import { StaticImageData } from "next/image";

type ProjectsMobileDetailsItemProps = {
  projects: {
    title: string;
    image: StaticImageData;
    description: string;
    technologies: string[];
  };
  count: number;
};

export const ProjectsMobileDetailsItem = ({
  count,
  projects,
}: ProjectsMobileDetailsItemProps) => {
  const { title } = projects;

  return (
    <AccordionItem value={title}>
      <ProjectsMobileDetailsItemTrigger count={count} title={title} />
      <ProjectsMobileDetailsItemContent projects={projects} />
    </AccordionItem>
  );
};
