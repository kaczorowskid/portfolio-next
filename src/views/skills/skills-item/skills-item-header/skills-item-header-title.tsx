type SkillsItemHeaderTitleProps = {
  title: string;
};

export const SkillsItemHeaderTitle = ({
  title,
}: SkillsItemHeaderTitleProps) => (
  <p className="text-gray-300 text-md font-mono">{title}.ts</p>
);
