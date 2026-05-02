import { PageSection } from "@/components";
import { EXPERIENCE_DATA } from "../experience.data";
import { ExperienceDesktopCard } from "./experience-desktop-card";

export const ExperienceDesktop = () => (
  <PageSection variant="black">
    <PageSection.Title>experience</PageSection.Title>
    <PageSection.Inset>
      <PageSection.Content>
        {EXPERIENCE_DATA.map((experience) => (
          <ExperienceDesktopCard key={experience.id} experience={experience} />
        ))}
      </PageSection.Content>
    </PageSection.Inset>
  </PageSection>
);
