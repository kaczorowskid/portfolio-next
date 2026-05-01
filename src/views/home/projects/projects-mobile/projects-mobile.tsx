import { ProjectsMobileDetails } from "./projects-mobile-details";
import { PageSection } from "@/components";

export const ProjectsMobile = () => (
  <PageSection variant="black">
    <PageSection.Title>projects</PageSection.Title>
    <PageSection.Inset>
      <PageSection.Content className="relative">
        <ProjectsMobileDetails />
      </PageSection.Content>
    </PageSection.Inset>
  </PageSection>
);
