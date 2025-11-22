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
  <div className="flex gap-6">
    {SOCIALS_DATA.map((item, index) => (
      <MainLayoutFooterSocialsItem key={index} item={item} />
    ))}
  </div>
);
