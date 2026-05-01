import { AccordionTrigger } from "@/components/ui/accordion";
import { StaticImageData } from "next/image";
import { ExperienceMobileDetailsCardTriggerLogo } from "./experience-mobile-details-card-trigger-logo";
import { ExperienceMobileDetailsCardTriggerMeta } from "./experience-mobile-details-card-trigger-meta";

type ExperienceMobileDetailsCardTriggerProps = {
  company: string;
  period: string;
  logo: StaticImageData;
  position: string;
};

export const ExperienceMobileDetailsCardTrigger = ({
  company,
  logo,
  period,
  position,
}: ExperienceMobileDetailsCardTriggerProps) => (
  <AccordionTrigger className="flex items-center">
    <div className="w-full flex items-center gap-6">
      <ExperienceMobileDetailsCardTriggerLogo logo={logo} company={company} />
      <ExperienceMobileDetailsCardTriggerMeta
        company={company}
        period={period}
        position={position}
      />
    </div>
  </AccordionTrigger>
);
