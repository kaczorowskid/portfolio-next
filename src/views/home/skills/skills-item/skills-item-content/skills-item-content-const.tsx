import type { ReactNode } from "react";

type SkillsItemContentConstProps = {
  technology: string;
  children: ReactNode;
};

export const SkillsItemContentConst = ({
  technology,
  children,
}: SkillsItemContentConstProps) => (
  <>
    <span className="text-blue-300">const</span>{" "}
    <span className="text-blue-400">{technology}Skills</span> = {children}
  </>
);
