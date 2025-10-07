import { Icon } from "@tabler/icons-react";
import { Color } from "../skills-item.types";
import { SkillsItemContentArray } from "./skills-item-content-array";
import { SkillsItemContentCode } from "./skills-item-content-code";
import { SkillsItemContentConst } from "./skills-item-content-const";
import { SkillsItemContentValue } from "./skills-item-content-value";

export type SkillsItemContentProps = {
  technology: string;
  color: Color;
  skills: {
    name: string;
    icon: Icon;
  }[];
};

export const SkillsItemContent = ({
  color,
  technology,
  skills,
}: SkillsItemContentProps) => (
  <div className="bg-gray-900 text-white font-mono h-full pb-2">
    <SkillsItemContentCode>
      <SkillsItemContentConst technology={technology}>
        <SkillsItemContentArray>
          {skills.map(({ icon, name }) => (
            <SkillsItemContentValue
              key={name}
              color={color}
              icon={icon}
              name={name}
            />
          ))}
        </SkillsItemContentArray>
      </SkillsItemContentConst>
    </SkillsItemContentCode>
  </div>
);
