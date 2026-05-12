import { PageSection } from "@/components";
import { AboutList } from "./about-list";

export const About = () => (
  <PageSection id="about-section">
    <PageSection.Inset>
      <PageSection.Content>
        <AboutList />
      </PageSection.Content>
    </PageSection.Inset>
  </PageSection>
);
