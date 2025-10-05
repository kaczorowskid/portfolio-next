import { ContactGetInTouchSocials } from "./contact-get-in-touch-socials";
import { ContactGetInTouchSubitle } from "./contact-get-in-touch-subtitle";
import { ContactGetInTouchTitle } from "./contact-get-in-touch-title";

export const ContactGetInTouch = () => (
  <div className="py-2">
    <ContactGetInTouchTitle />
    <ContactGetInTouchSubitle />
    <ContactGetInTouchSocials />
  </div>
);
