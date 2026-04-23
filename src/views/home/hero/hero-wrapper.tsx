import { PageSection } from "@/components";
import { ReactNode } from "react";

type HeroWrapperProps = {
  children: ReactNode;
};

export const HeroWrapper = ({ children }: HeroWrapperProps) => (
  <PageSection id="hero-section">
    <PageSection.Content className="h-screen flex flex-col justify-center max-w-350">
      {children}
    </PageSection.Content>
  </PageSection>
);
