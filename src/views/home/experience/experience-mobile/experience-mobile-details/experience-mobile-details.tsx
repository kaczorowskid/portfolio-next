import { Accordion } from "@/components/ui";
import { EXPERIENCE_DATA } from "../../experience.data";
import { ExperienceMobileDetailsCard } from "./experience-mobile-details-card";

export const ExperienceMobileDetails = () => (
  <Accordion type="multiple">
    {EXPERIENCE_DATA.map((experience) => (
      <ExperienceMobileDetailsCard key={experience.id} experience={experience} />
    ))}
  </Accordion>
);
