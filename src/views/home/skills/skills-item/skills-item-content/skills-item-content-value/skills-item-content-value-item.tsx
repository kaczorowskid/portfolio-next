import type { Color } from "../../skills-item.types";

type SkillsItemContentValueItemProps = {
  name: string;
  color: Color;
};

const getTextColor = (color: Color) => {
  switch (color) {
    case "red":
      return "text-red-300";
    case "orange":
      return "text-orange-300";
    case "purple":
      return "text-purple-500";
    default:
      return "text-orange-300";
  }
};

export const SkillsItemContentValueItem = ({
  color,
  name,
}: SkillsItemContentValueItemProps) => (
  <div>
    <span className={getTextColor(color)}>"{name}"</span>,
  </div>
);
