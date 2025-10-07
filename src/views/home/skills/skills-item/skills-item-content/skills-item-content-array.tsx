import { ReactNode } from "react";

type SkillsItemContentArrayProps = {
  children: ReactNode;
};

export const SkillsItemContentArray = ({
  children,
}: SkillsItemContentArrayProps) => (
  <>
    <span className="text-yellow-300">[</span>
    {children}
    <div className="text-yellow-300">]</div>
  </>
);
