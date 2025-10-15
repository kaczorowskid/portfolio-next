import { ReactNode } from "react";

import { cn } from "@/utils";
import { PageSectionTitle } from "./page-section-title";
import { PageSectionInset } from "./page-section-inset";
import { PageSectionContent } from "./page-section-content";

type Variant = "white" | "black";

type NewPageSectionProps = {
  variant?: Variant;
  children: ReactNode;
};

const MAP_VARIANT_TO_TAILWIND_CLASS: Record<Variant, string> = {
  black: "bg-black text-white",
  white: "bg-white text-black",
};

export const PageSection = ({
  variant = "white",
  children,
}: NewPageSectionProps) => (
  <section
    className={cn(
      "w-full flex flex-col items-center",
      MAP_VARIANT_TO_TAILWIND_CLASS[variant]
    )}
  >
    {children}
  </section>
);

PageSection.Title = PageSectionTitle;
PageSection.Inset = PageSectionInset;
PageSection.Content = PageSectionContent;
