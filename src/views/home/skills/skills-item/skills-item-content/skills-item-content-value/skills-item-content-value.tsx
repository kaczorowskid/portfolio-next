import type { IconType } from "react-icons";
import type { Color } from "../../skills-item.types";
import { SkillsItemContentValueComment } from "./skills-item-content-value-comment";
import { SkillsItemContentValueItem } from "./skills-item-content-value-item";

type SkillsItemContentValueProps = {
  color: Color;
  name: string;
  icon: IconType;
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
