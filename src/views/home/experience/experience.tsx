import { ExperienceCard } from "./experience-card";
import { EXPERIENCE_DATA } from "./experience.data";
import { PageSection } from "@/components";

export const Experience = () => (
  <PageSection id="experience-section" variant="black">
    <PageSection.Title>experience</PageSection.Title>
    <PageSection.Inset>
      <PageSection.Content>
        {EXPERIENCE_DATA.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </PageSection.Content>
    </PageSection.Inset>
  </PageSection>
);
