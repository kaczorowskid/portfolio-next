import { Icon } from "@tabler/icons-react";
import { SkillsItemContent } from "./skills-item-content";
import { SkillsItemHeader } from "./skills-item-header";
import { Color } from "./skills-item.types";

export type SkillsItemProps = {
  technology: string;
  color: Color;
  skills: {
    name: string;
    icon: Icon;
  }[];
};

export const SkillsItem = ({ color, skills, technology }: SkillsItemProps) => (
  <div className="rounded-2xl overflow-hidden text-lg">
    <SkillsItemHeader title={technology} />
    <SkillsItemContent color={color} skills={skills} technology={technology} />
  </div>
);
