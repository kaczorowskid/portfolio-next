import { Icon } from "@tabler/icons-react";

type SkillsItemContentValueCommentProps = {
  icon: Icon;
};

export const SkillsItemContentValueComment = ({
  icon: Icon,
}: SkillsItemContentValueCommentProps) => (
  <div className="flex items-center text-green-700 gap-0.5">
    //
    <Icon className="size-6" />
  </div>
);
