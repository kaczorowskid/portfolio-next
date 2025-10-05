import { ReactNode } from "react";
import { Variant } from "./page-section.types";
import { cn } from "@/utils";

type PageSectionWrapperProps = {
  variant?: Variant;
  children: ReactNode;
};

const MAP_VARIANT_TO_TAILWIND_CLASS: Record<Variant, string> = {
  black: "bg-black",
  white: "bg-white",
};

export const PageSectionWrapper = ({
  variant = "white",
  children,
}: PageSectionWrapperProps) => (
  <div className={cn("w-full", MAP_VARIANT_TO_TAILWIND_CLASS[variant])}>
    {children}
  </div>
);
