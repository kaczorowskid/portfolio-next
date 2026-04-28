import { cn } from "@/utils";

type ProjectsDetailsCounterProps = {
  count: number;
  isHighlighted: boolean;
};

export const ProjectsDetailsCounter = ({
  count,
  isHighlighted,
}: ProjectsDetailsCounterProps) => (
  <div
    className={cn(
      "transition-all duration-1000  size-14 rounded-full border flex justify-center items-center bg-black text-2xl font-bold text-green-600 border-white",
      isHighlighted ? "border-white" : "border-gray-800"
    )}
  >
    {count}
  </div>
);
