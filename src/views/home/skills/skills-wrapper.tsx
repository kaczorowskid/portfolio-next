import { PageSection } from "@/components";
import { ReactNode } from "react";

type SkillsWrapperProps = {
  children: ReactNode;
};

export const SkillsWrapper = ({ children }: SkillsWrapperProps) => (
  <PageSection id="skills-section">
    <PageSection.Title>skills</PageSection.Title>
    <PageSection.Inset>
      <PageSection.Content className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {children}
      </PageSection.Content>
    </PageSection.Inset>
  </PageSection>
);
