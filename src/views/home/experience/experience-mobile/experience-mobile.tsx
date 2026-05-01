import { PageSection } from "@/components";
import { ExperienceMobileDetails } from "./experience-mobile-details";

export const ExperienceMobile = () => (
  <PageSection variant="black">
    <PageSection.Title>experience</PageSection.Title>
    <PageSection.Inset>
      <PageSection.Content>
        <ExperienceMobileDetails />
      </PageSection.Content>
    </PageSection.Inset>
  </PageSection>
);
