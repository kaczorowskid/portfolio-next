import { cn } from "@/utils";
import { ReactNode } from "react";

type BadgeProps = {
  color?: "black" | "white";
  leftSection?: ReactNode;
  children: ReactNode;
};

export const Badge = ({
  color = "white",
  leftSection,
  children,
}: BadgeProps) => (
  <div className={cn("relative group", color === "black" ? "invert" : "")}>
    <div className="relative flex items-center gap-2 md:gap-3 bg-white border-2 border-black rounded-xl px-3 py-1.5 md:px-4 md:py-2 group-hover:rotate-0 transition-transform duration-300">
      {leftSection && (
        <span className="text-black font-bold">
          <span className="[&_svg]:w-4 md:[&_svg]:w-5">{leftSection}</span>
        </span>
      )}
      <span className="text-xs md:text-sm font-bold text-black">{children}</span>
    </div>
  </div>
);
