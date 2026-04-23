import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { HeroSocialsItem } from "./hero-socials-item";

const SOCIALS_ITEMS = [
  {
    name: "Email",
    icon: IconMail,
    href: "mailto:kaczorowskid97@gmail.com",
  },
  {
    name: "Github",
    icon: IconBrandGithub,
    href: "https://github.com/kaczorowskid",
  },
  {
    name: "Linkedin",
    icon: IconBrandLinkedin,
    href: "https://linkedin.com/in/damiankaczorowski",
  },
];

export const HeroSocials = () => (
  <div className="flex gap-6 flex-wrap">
    {SOCIALS_ITEMS.map(({ href, icon, name }, index) => (
      <HeroSocialsItem key={index} href={href} icon={icon} name={name} />
    ))}
  </div>
);
