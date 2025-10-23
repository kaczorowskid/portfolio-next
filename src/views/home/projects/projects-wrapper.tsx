import { PageSection } from "@/components";
import { ReactNode } from "react";

type ProjectsWrapperProps = {
  children: ReactNode;
};

export const ProjectsWrapper = ({ children }: ProjectsWrapperProps) => (
  <PageSection id="projects-section">
    <PageSection.Title>projects</PageSection.Title>
    <PageSection.Inset>
      <PageSection.Content className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {children}
      </PageSection.Content>
    </PageSection.Inset>
  </PageSection>
);
