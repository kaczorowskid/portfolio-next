import { PageSection } from "@/components";
import { ReactNode } from "react";

type PortfolioWrapperProps = {
  children: ReactNode;
};

export const PortfolioWrapper = ({ children }: PortfolioWrapperProps) => (
  <PageSection id="portfolio-section">
    <PageSection.Title>portfolio</PageSection.Title>
    <PageSection.Inset>
      <PageSection.Content className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {children}
      </PageSection.Content>
    </PageSection.Inset>
  </PageSection>
);
