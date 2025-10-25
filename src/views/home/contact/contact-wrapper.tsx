import { PageSection } from "@/components";
import { ReactNode } from "react";

type ContactWrapperProps = {
  children: ReactNode;
};

export const ContactWrapper = ({ children }: ContactWrapperProps) => (
  <PageSection id="contact-section" variant="white">
    <PageSection.Content className="min-h-screen relative flex justify-center items-center">
      {children}
    </PageSection.Content>
  </PageSection>
);
