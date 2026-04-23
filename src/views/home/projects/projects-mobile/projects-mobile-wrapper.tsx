import { PageSection } from "@/components";
import { ReactNode } from "react";

type ProjectsMobileWrapperProps = {
  children: ReactNode;
};

export const ProjectsMobileWrapper = ({
  children,
}: ProjectsMobileWrapperProps) => (
  <PageSection id="projects-section" variant="black">
    <PageSection.Title>projects</PageSection.Title>
    <PageSection.Inset>
      <PageSection.Content className="relative">{children}</PageSection.Content>
    </PageSection.Inset>
  </PageSection>
);
