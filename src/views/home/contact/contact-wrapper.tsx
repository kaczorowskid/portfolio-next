import { PageSection } from "@/components";
import { ReactNode } from "react";

type ContactWrapperProps = {
  children: ReactNode;
};

export const ContactWrapper = ({ children }: ContactWrapperProps) => (
  <PageSection id="contact-section" variant="black">
    <PageSection.Title>contact</PageSection.Title>
    <PageSection.Inset>
      <PageSection.Content className="grid grid-cols-2">
        {children}
      </PageSection.Content>
    </PageSection.Inset>
  </PageSection>
);
