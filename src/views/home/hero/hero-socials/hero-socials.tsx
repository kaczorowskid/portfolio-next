import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { TbMail } from "react-icons/tb";
import { HeroSocialsItem } from "./hero-socials-item";

const SOCIALS_ITEMS = [
  {
    name: "Email",
    icon: TbMail,
    href: "mailto:kaczorowskid97@gmail.com",
  },
  {
    name: "Github",
    icon: SiGithub,
    href: "https://github.com/kaczorowskid",
  },
  {
    name: "Linkedin",
    icon: FaLinkedin,
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
