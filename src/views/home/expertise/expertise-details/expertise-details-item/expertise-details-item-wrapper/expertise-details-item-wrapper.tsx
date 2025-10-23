import { ReactNode } from "react";
import { ExpertiseDetailsItemWrapperCounter } from "./expertise-details-item-wrapper-counter";
import { cn } from "@/utils";

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
      <ExpertiseDetailsItemWrapperCounter
        isHiglighted={isHiglighted}
        count={count}
      />
      {children}
    </div>
  </div>
);
