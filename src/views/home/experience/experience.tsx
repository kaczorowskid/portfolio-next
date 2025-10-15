import { ExperienceCard } from "./experience-card";
import { EXPERIENCE_DATA } from "./experience.data";
import { ExperienceWrapper } from "./experience-wrapper";

export const Experience = () => (
  <ExperienceWrapper>
    {EXPERIENCE_DATA.map((experience, index) => (
      <ExperienceCard key={index} experience={experience} />
    ))}
  </ExperienceWrapper>
);
