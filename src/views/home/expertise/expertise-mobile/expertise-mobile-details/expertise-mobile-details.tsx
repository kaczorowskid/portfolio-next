import { Accordion } from "@/components/ui";
import { ExpertiseMobileDetailsItem } from "./expertise-mobile-details-item";
import { EXPERTISE_DETAILS_DATA } from "../../expertise-details.data";

export const ExpertiseMobileDetails = () => (
  <Accordion type="multiple">
    {EXPERTISE_DETAILS_DATA.map((expertise, index) => (
      <ExpertiseMobileDetailsItem
        key={index}
        count={index + 1}
        expertise={expertise}
      />
    ))}
  </Accordion>
);
