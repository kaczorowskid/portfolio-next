import { AccordionTrigger } from "@/components/ui/accordion";
import { ExpertiseDetailsCounter } from "../../../shared/ui";

type ExpertiseMobileDetailsItemTriggerProps = {
  count: number;
  title: string;
};

export const ExpertiseMobileDetailsItemTrigger = ({
  count,
  title,
}: ExpertiseMobileDetailsItemTriggerProps) => (
  <AccordionTrigger className="text-2xl flex items-center">
    <div className="flex items-center gap-6">
      <ExpertiseDetailsCounter count={count} isHiglighted={false} />
      <span>{title}</span>
    </div>
  </AccordionTrigger>
);
