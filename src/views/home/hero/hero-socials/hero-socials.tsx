import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { TbMail } from "react-icons/tb";
import { CONTACT_EMAIL, CONTACT_GITHUB, CONTACT_LINKEDIN } from "@/constants";
import { HeroSocialsItem } from "./hero-socials-item";

const SOCIALS_ITEMS = [
  {
    name: "Email",
    icon: TbMail,
    href: `mailto:${CONTACT_EMAIL}`,
    social: "email",
  },
  {
    name: "Github",
    icon: SiGithub,
    href: CONTACT_GITHUB,
    social: "github",
  },
  {
    name: "Linkedin",
    icon: FaLinkedin,
    href: CONTACT_LINKEDIN,
    social: "linkedin",
  },
] as const;

export const HeroSocials = () => (
  <div className="flex gap-6 flex-wrap">
    {SOCIALS_ITEMS.map(({ href, icon, name, social }) => (
      <HeroSocialsItem
        key={social}
        href={href}
        icon={icon}
        name={name}
        social={social}
      />
    ))}
  </div>
);
