import { cn } from "@/utils";
import { Variant } from "./page-section.types";

type PageSectionTitleProps = {
  title: string;
  variant?: Variant;
};

const MAP_VARIANT_TO_TAILWIND_CLASS: Record<Variant, string> = {
  black: "text-white",
  white: "text-black",
};

export const PageSectionTitle = ({
  title,
  variant = "white",
}: PageSectionTitleProps) => (
  <h2
    className={cn(
      "text-6xl md:text-9xl font-bold",
      MAP_VARIANT_TO_TAILWIND_CLASS[variant]
    )}
  >
    {title}
  </h2>
);
