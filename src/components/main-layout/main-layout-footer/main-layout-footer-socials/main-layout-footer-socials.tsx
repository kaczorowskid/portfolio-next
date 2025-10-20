import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { MainLayoutFooterSocialsItem } from "./main-layout-footer-socials-item";

const SOCIALS_DATA = [
  {
    href: "github.com/kaczorowskid",
    icon: IconBrandGithub,
    name: "Github",
  },
  {
    href: "linkedin.com",
    icon: IconBrandLinkedin,
    name: "Linkedin",
  },
];

export const MainLayoutFooterSocials = () => (
  <div className="flex gap-8 mb-8 md:mb-0">
    {SOCIALS_DATA.map(({ href, icon, name }, index) => (
      <MainLayoutFooterSocialsItem
        key={index}
        href={href}
        icon={icon}
        name={name}
      />
    ))}
  </div>
);
