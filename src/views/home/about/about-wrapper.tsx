import { PageSection } from "@/components";
import { ReactNode } from "react";

type AboutWrapperProps = {
  children: ReactNode;
};

export const AboutWrapper = ({ children }: AboutWrapperProps) => (
  <PageSection id="about-section">
    <div className="-mt-20!">
      <PageSection.Title>about me</PageSection.Title>
    </div>
    <PageSection.Inset>
      <PageSection.Content>{children}</PageSection.Content>
    </PageSection.Inset>
  </PageSection>
);
