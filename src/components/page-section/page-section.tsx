import { ReactNode } from "react";
import { Container } from "../container";
import { PageSectionTitle } from "./page-section-title";
import { cn } from "@/utils";
import { PageSectionWrapper } from "./page-section-wrapper";
import { Variant } from "./page-section.types";

type PageSectionProps = {
  title: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

const MAP_VARIANT_TO_TAILWIND_CLASS: Record<Variant, string> = {
  black: "bg-black",
  white: "bg-white",
};

export const PageSection = ({
  title,
  variant = "white",
  className,
  children,
}: PageSectionProps) => (
  <PageSectionWrapper variant={variant}>
    <Container
      as="section"
      className={cn(
        "flex flex-col justify-center items-center py-20 px-16 mx-auto max-w-350",
        MAP_VARIANT_TO_TAILWIND_CLASS[variant]
      )}
    >
      <PageSectionTitle variant={variant} title={title} />
      <div className={cn("mt-20 w-full", className)}>{children}</div>
    </Container>
  </PageSectionWrapper>
);
