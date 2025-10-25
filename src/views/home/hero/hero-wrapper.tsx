import { PageSection } from "@/components";
import { ReactNode } from "react";

type HeroWrapperProps = {
  children: ReactNode;
};

export const HeroWrapper = ({ children }: HeroWrapperProps) => (
  <PageSection id="hero-section" variant="black">
    <PageSection.Content className="h-screen flex flex-col justify-center">
      {children}
    </PageSection.Content>
  </PageSection>
);
