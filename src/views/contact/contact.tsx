import { PageSection } from "@/components";
import { ContactForm } from "./contact-form";
import { ContactGetInTouch } from "./contact-get-in-touch";

export const Contact = () => (
  <PageSection variant="black" title="contact" className="grid grid-cols-2">
    <ContactGetInTouch />
    <ContactForm />
  </PageSection>
);
