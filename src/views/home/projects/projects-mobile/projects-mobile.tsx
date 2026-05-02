import { PageSection } from "@/components";
import { ProjectsMobileDetails } from "./projects-mobile-details";

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
