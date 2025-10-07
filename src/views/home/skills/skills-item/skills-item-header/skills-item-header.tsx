import { SkillsItemHeaderControls } from "./skills-item-header-controls";
import { SkillsItemHeaderTitle } from "./skills-item-header-title";

type SkillsItemHeaderProps = {
  title: string;
};

export const SkillsItemHeader = ({ title }: SkillsItemHeaderProps) => (
  <div className="flex items-center justify-between bg-gray-800 px-4 py-3">
    <SkillsItemHeaderControls />
    <SkillsItemHeaderTitle title={title} />
  </div>
);
