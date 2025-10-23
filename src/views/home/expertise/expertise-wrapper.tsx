import { PageSection } from "@/components";
import { ReactNode } from "react";

type ExpertiseWrapperProps = {
  children: ReactNode;
};

export const ExpertiseWrapper = ({ children }: ExpertiseWrapperProps) => (
  <PageSection id="expertise-section" variant="black">
    <PageSection.Title>expertise</PageSection.Title>
    <PageSection.Inset>
      <PageSection.Content className="relative grid grid-cols-2 min-h-screen">
        {children}
      </PageSection.Content>
    </PageSection.Inset>
  </PageSection>
);
