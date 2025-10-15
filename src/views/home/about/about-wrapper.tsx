import { PageSection } from "@/components";
import { ReactNode } from "react";

type AboutWrapperProps = {
  children: ReactNode;
};

export const AboutWrapper = ({ children }: AboutWrapperProps) => (
  <PageSection>
    <PageSection.Content className="relative overflow-hidden px-6 mt-32  mb-10">
      {children}
    </PageSection.Content>
  </PageSection>
);
