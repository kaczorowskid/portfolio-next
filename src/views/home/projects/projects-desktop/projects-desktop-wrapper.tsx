import { PageSection } from "@/components";
import { ReactNode } from "react";

type ProjectsDesktopWrapperProps = {
  children: ReactNode;
};

export const ProjectsDesktopWrapper = ({
  children,
}: ProjectsDesktopWrapperProps) => (
  <PageSection id="projects-section" variant="black">
    <PageSection.Title>projects</PageSection.Title>
    <PageSection.Inset>
      <PageSection.Content className="relative grid grid-cols-2 min-h-screen">
        {children}
      </PageSection.Content>
    </PageSection.Inset>
  </PageSection>
);
