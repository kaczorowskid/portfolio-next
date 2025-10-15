import { PageSection } from "@/components";
import { ReactNode } from "react";

type HeroWrapperProps = {
  children: ReactNode;
};

export const HeroWrapper = ({ children }: HeroWrapperProps) => (
  <PageSection variant="black">
    <PageSection.Content className="h-screen flex flex-col justify-center container px-6 md:px-0">
      {children}
    </PageSection.Content>
  </PageSection>
);
