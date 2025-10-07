import { Color } from "../../skills-item.types";
import { Icon } from "@tabler/icons-react";
import { SkillsItemContentValueItem } from "./skills-item-content-value-item";
import { SkillsItemContentValueComment } from "./skills-item-content-value-comment";

type SkillsItemContentValueProps = {
  color: Color;
  name: string;
  icon: Icon;
};

export const SkillsItemContentValue = ({
  color,
  icon,
  name,
}: SkillsItemContentValueProps) => (
  <div className="px-3 py-0.5 flex items-center justify-between gap-6">
    <SkillsItemContentValueItem color={color} name={name} />
    <SkillsItemContentValueComment icon={icon} />
  </div>
);
