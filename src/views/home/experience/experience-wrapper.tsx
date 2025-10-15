import { PageSection } from "@/components";
import { ReactNode } from "react";

type ExperienceWrapperProps = {
  children: ReactNode;
};

export const ExperienceWrapper = ({ children }: ExperienceWrapperProps) => (
  <PageSection variant="black">
    <PageSection.Title>experience</PageSection.Title>
    <PageSection.Inset>
      <PageSection.Content>{children}</PageSection.Content>
    </PageSection.Inset>
  </PageSection>
);
