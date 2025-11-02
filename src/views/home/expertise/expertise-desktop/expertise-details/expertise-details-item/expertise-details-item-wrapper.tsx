import { ReactNode } from "react";
import { cn } from "@/utils";
import { ExpertiseDetailsCounter } from "@/views/home/expertise/shared/ui";

type ExpertiseDetailsItemWrapperProps = {
  count: number;
  children: ReactNode;
  setElementRef: (el: HTMLDivElement) => void;
  isHiglighted: boolean;
};

export const ExpertiseDetailsItemWrapper = ({
  count,
  setElementRef,
  children,
  isHiglighted,
}: ExpertiseDetailsItemWrapperProps) => (
  <div
    data-index={count}
    ref={setElementRef}
    className={cn(
      "transition-all duration-1000",
      isHiglighted ? "text-white" : "text-gray-800"
    )}
  >
    <div className="relative border-l pl-12 pb-6">
      <div className="absolute -left-7 top-4">
        <ExpertiseDetailsCounter isHiglighted={isHiglighted} count={count} />
      </div>
      {children}
    </div>
  </div>
);
