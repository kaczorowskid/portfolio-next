import { PageSection } from "@/components";
import { SkillsItem } from "./skills-item/skills-item";
import { SKILLS_DATA } from "./skills.data";

export const Skills = () => (
  <PageSection id="skills-section">
    <PageSection.Title>skills</PageSection.Title>
    <PageSection.Inset>
      <PageSection.Content className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {Object.entries(SKILLS_DATA).map(
          ([technology, { color, skills }], index) => (
            <SkillsItem
              key={index}
              color={color}
              skills={skills}
              technology={technology}
            />
          ),
        )}
      </PageSection.Content>
    </PageSection.Inset>
  </PageSection>
);
