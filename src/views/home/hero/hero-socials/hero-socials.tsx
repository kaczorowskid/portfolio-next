import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { TbMail } from "react-icons/tb";
import { HeroSocialsItem } from "./hero-socials-item";

const SOCIALS_ITEMS = [
  {
    name: "Email",
    icon: TbMail,
    href: "mailto:kaczorowskid97@gmail.com",
    social: "email",
  },
  {
    name: "Github",
    icon: SiGithub,
    href: "https://github.com/kaczorowskid",
    social: "github",
  },
  {
    name: "Linkedin",
    icon: FaLinkedin,
    href: "https://linkedin.com/in/damiankaczorowski",
    social: "linkedin",
  },
] as const;

export const HeroSocials = () => (
  <div className="flex gap-6 flex-wrap">
    {SOCIALS_ITEMS.map(({ href, icon, name, social }, index) => (
      <HeroSocialsItem
        key={index}
        href={href}
        icon={icon}
        name={name}
        social={social}
      />
    ))}
  </div>
);
