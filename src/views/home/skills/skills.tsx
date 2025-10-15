import { SkillsItem } from "./skills-item/skills-item";
import { SKILLS_DATA } from "./skills.data";
import { SkillsWrapper } from "./skills-wrapper";

export const Skills = () => (
  <SkillsWrapper>
    {Object.entries(SKILLS_DATA).map(
      ([technology, { color, skills }], index) => (
        <SkillsItem
          key={index}
          color={color}
          skills={skills}
          technology={technology}
        />
      )
    )}
  </SkillsWrapper>
);
