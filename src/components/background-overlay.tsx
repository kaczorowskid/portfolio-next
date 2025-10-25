import { cn } from "@/utils";

type BackgroundOverlayProps = {
  opacity: number;
  title: string;
};

const createBackgroundTitle = (title: string) => `${title} • `.repeat(8);
const calculateOpacity = (percentage: number) => `opacity-${percentage}`;

export const BackgroundOverlay = ({
  opacity,
  title,
}: BackgroundOverlayProps) => (
  <div
    className={cn(
      "absolute h-full top-0 flex items-center justify-center z-0",
      calculateOpacity(opacity)
    )}
  >
    <div className="text-[200px] font-bold whitespace-nowrap">
      {createBackgroundTitle(title)}
    </div>
  </div>
);
