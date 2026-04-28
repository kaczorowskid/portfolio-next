import { PageSection } from "@/components";
import { AboutList } from "./about-list";

export const About = () => (
  <PageSection id="about-section">
    <div className="-mt-20!">
      <PageSection.Title>about me</PageSection.Title>
    </div>
    <PageSection.Inset>
      <PageSection.Content>
        <AboutList />
      </PageSection.Content>
    </PageSection.Inset>
  </PageSection>
);
