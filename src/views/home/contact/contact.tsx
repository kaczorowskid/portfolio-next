import { ContactForm } from "./contact-form";
import { ContactGetInTouch } from "./contact-get-in-touch";
import { ContactWrapper } from "./contact-wrapper";

export const Contact = () => (
  <ContactWrapper>
    <ContactGetInTouch />
    <ContactForm />
  </ContactWrapper>
);
