import { cn } from "@/utils";

type ExpertiseDetailsCounterProps = {
  count: number;
  isHiglighted: boolean;
};

export const ExpertiseDetailsCounter = ({
  count,
  isHiglighted,
}: ExpertiseDetailsCounterProps) => (
  <div
    className={cn(
      "transition-all duration-1000  size-14 rounded-full border flex justify-center items-center bg-black text-2xl font-bold text-green-600 border-white",
      isHiglighted ? "border-white" : "border-gray-800"
    )}
  >
    {count}
  </div>
);
