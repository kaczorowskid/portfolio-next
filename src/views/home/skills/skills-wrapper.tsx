import { PageSection } from "@/components";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

type SkillsWrapperProps = {
  children: ReactNode;
};

export const SkillsWrapper = ({ children }: SkillsWrapperProps) => (
  <PageSection>
    <div className="-mt-20">
      <PageSection.Title>skills</PageSection.Title>
    </div>
    <PageSection.Inset>
      <PageSection.Content className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {children}
      </PageSection.Content>
    </PageSection.Inset>
  </PageSection>
);
