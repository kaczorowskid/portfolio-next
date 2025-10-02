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
  <button className={cn("relative group", color === "black" ? "invert" : "")}>
    <div className="absolute inset-0 bg-black rounded-xl transform rotate-3 group-hover:rotate-4 transition-transform duration-300"></div>
    <div className="relative flex items-center gap-3 bg-white border-2 border-black rounded-xl px-4 py-2 transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
      <span className="text-black font-bold">
        {leftSection && <span className="[&_svg]:w-5">{leftSection}</span>}
      </span>
      <span className="text-sm font-bold text-black">{children}</span>
    </div>
  </button>
);
