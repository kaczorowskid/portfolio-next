import { ReactNode } from "react";

type SkillsItemContentCodeProps = {
  children: ReactNode;
};

export const SkillsItemContentCode = ({
  children,
}: SkillsItemContentCodeProps) => (
  <div className="bg-gray-900 text-white font-mono p-4 rounded-md">
    {children}
  </div>
);
