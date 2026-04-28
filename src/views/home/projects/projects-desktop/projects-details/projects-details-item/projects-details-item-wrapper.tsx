import { ReactNode } from "react";
import { cn } from "@/utils";
import { ProjectsDetailsCounter } from "@/views/home/projects/shared/ui";

type ProjectsDetailsItemWrapperProps = {
  count: number;
  children: ReactNode;
  setRef: (element: HTMLDivElement | null) => void;
  isHighlighted: boolean;
};

export const ProjectsDetailsItemWrapper = ({
  count,
  setRef,
  children,
  isHighlighted,
}: ProjectsDetailsItemWrapperProps) => (
  <div
    ref={setRef}
    className={cn(
      "transition-all duration-1000",
      isHighlighted ? "text-white" : "text-gray-800"
    )}
  >
    <div className="relative border-l pl-12 pb-6">
      <div className="absolute -left-7 top-4">
        <ProjectsDetailsCounter isHighlighted={isHighlighted} count={count} />
      </div>
      {children}
    </div>
  </div>
);
