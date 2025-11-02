import { AccordionContent } from "@/components/ui/accordion";
import { ExpertiseMobileDetailsItemContentDescription } from "./expertise-mobile-details-item-content-description";
import { ExpertiseMobileDetailsItemContentList } from "./expertise-mobile-details-item-content-list";
import { ExpertiseMobileDetailsItemContentImage } from "./expertise-mobile-details-item-content-image";

type ExpertiseMobileDetailsItemContentProps = {
  expertise: {
    image: string;
    description: string;
    bullets: string[];
  };
};

export const ExpertiseMobileDetailsItemContent = ({
  expertise: { bullets, description, image },
}: ExpertiseMobileDetailsItemContentProps) => (
  <AccordionContent>
    <ExpertiseMobileDetailsItemContentImage image={image} />
    <ExpertiseMobileDetailsItemContentDescription description={description} />
    <ExpertiseMobileDetailsItemContentList bullets={bullets} />
  </AccordionContent>
);
