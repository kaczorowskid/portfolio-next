import { ReactNode } from "react";
import { Container } from "../container";
import { PageSectionTitle } from "./page-section-title";
import { cn } from "@/utils";

type PageSectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export const PageSection = ({
  title,
  className,
  children,
}: PageSectionProps) => (
  <Container
    as="section"
    className="flex flex-col justify-center items-center py-20 px-16 mx-auto max-w-350"
  >
    <PageSectionTitle title={title} />
    <div className={cn("mt-20 w-full", className)}>{children}</div>
  </Container>
);
