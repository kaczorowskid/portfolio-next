import { AccordionTrigger } from "@/components/ui/accordion";
import { ProjectsDetailsCounter } from "../../../shared/ui";

type ProjectsMobileDetailsItemTriggerProps = {
  count: number;
  title: string;
};

export const ProjectsMobileDetailsItemTrigger = ({
  count,
  title,
}: ProjectsMobileDetailsItemTriggerProps) => (
  <AccordionTrigger className="text-2xl flex items-center">
    <div className="flex items-center gap-3">
      <ProjectsDetailsCounter count={count} isHighlighted={false} />
      <span>{title}</span>
    </div>
  </AccordionTrigger>
);
