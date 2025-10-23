import { CSSProperties, ReactNode } from "react";

type ProjectsItemWrapperProps = {
  color: string;
  children: ReactNode;
};

export const ProjectsItemWrapper = ({
  children,
  color,
}: ProjectsItemWrapperProps) => (
  <div
    className="bg-[var(--background-color)] group overflow-hidden rounded-4xl transition aspect-square flex flex-col relative"
    style={{ "--background-color": color } as CSSProperties}
  >
    {children}
  </div>
);
