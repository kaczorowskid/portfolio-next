import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/utils";
import { PageSectionContent } from "./page-section-content";
import { PageSectionInset } from "./page-section-inset";
import { PageSectionTitle } from "./page-section-title";

type Variant = "white" | "black";

type NewPageSectionProps = {
  variant?: Variant;
  children: ReactNode;
} & ComponentProps<"section">;

const MAP_VARIANT_TO_TAILWIND_CLASS: Record<Variant, string> = {
  black: "bg-black text-white",
  white: "bg-white text-black",
};

export const PageSection = ({
  variant = "white",
  children,
  ...props
}: NewPageSectionProps) => (
  <section
    {...props}
    className={cn(
      "w-full flex flex-col items-center",
      MAP_VARIANT_TO_TAILWIND_CLASS[variant],
    )}
  >
    {children}
  </section>
);

PageSection.Title = PageSectionTitle;
PageSection.Inset = PageSectionInset;
PageSection.Content = PageSectionContent;
