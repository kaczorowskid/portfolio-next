import { PageSection } from "@/components";
import { ReactNode } from "react";

type ExpertiseMobileWrapperProps = {
  children: ReactNode;
};

export const ExpertiseMobileWrapper = ({
  children,
}: ExpertiseMobileWrapperProps) => (
  <PageSection id="expertise-section" variant="black">
    <PageSection.Title>expertise</PageSection.Title>
    <PageSection.Inset>
      <PageSection.Content className="relative">{children}</PageSection.Content>
    </PageSection.Inset>
  </PageSection>
);
