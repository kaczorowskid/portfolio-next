import { AccordionItem } from "@/components/ui/accordion";
import { ExpertiseMobileDetailsItemTrigger } from "./experience-mobile-details-item-trigger";
import { ExpertiseMobileDetailsItemContent } from "./expertise-mobile-details-item-content";

type ExpertiseMobileDetailsItemProps = {
  expertise: {
    title: string;
    image: string;
    description: string;
    bullets: string[];
  };
  count: number;
};

export const ExpertiseMobileDetailsItem = ({
  count,
  expertise,
}: ExpertiseMobileDetailsItemProps) => {
  const { title } = expertise;

  return (
    <AccordionItem value={title}>
      <ExpertiseMobileDetailsItemTrigger count={count} title={title} />
      <ExpertiseMobileDetailsItemContent expertise={expertise} />
    </AccordionItem>
  );
};
