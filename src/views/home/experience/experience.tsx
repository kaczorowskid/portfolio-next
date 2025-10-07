import { PageSection } from "@/components";
import { ExperienceCard } from "./experience-card";
import { EXPERIENCE_DATA } from "./experience.data";

export const Experience = () => (
  <PageSection title="experience" className="flex flex-col gap-10">
    {EXPERIENCE_DATA.map((experience, index) => (
      <ExperienceCard key={index} experience={experience} />
    ))}
  </PageSection>
);
