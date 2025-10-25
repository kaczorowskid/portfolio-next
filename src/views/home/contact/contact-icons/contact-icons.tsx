import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { ContactIconsItem } from "./contact-icons-item";

const CONTACT_DATA = [
  {
    href: "mailto:kaczorowskid79@gmail.com",
    icon: IconMail,
  },
  {
    href: "https://github.com/kaczorowskid",
    icon: IconBrandGithub,
  },
  {
    href: "https://linkedin.com",
    icon: IconBrandLinkedin,
  },
];

export const ContactIcons = () => (
  <div className="flex gap-16 justify-center items-center z-10">
    {CONTACT_DATA.map(({ href, icon }, index) => (
      <ContactIconsItem key={index} href={href} icon={icon} />
    ))}
  </div>
);
