import { AccordionItem } from "@/components/ui/accordion";
import { ProjectsMobileDetailsItemTrigger } from "./experience-mobile-details-item-trigger";
import { ProjectsMobileDetailsItemContent } from "./projects-mobile-details-item-content";
import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

type ProjectsMobileDetailsItemProps = {
  projects: {
    title: string;
    image: StaticImageData;
    description: string;
    technologies: {
      name: string;
      icon: IconType;
    }[];
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
