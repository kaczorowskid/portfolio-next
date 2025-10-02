import { Badge } from "@/components";
import { Github, Mail } from "lucide-react";

const SOCIALS_ITEMS = [
  {
    name: "Github",
    icon: <Github />,
    href: "/github",
  },
  {
    name: "Email",
    icon: <Mail />,
    href: "/mail",
  },
];

export const HeroSocials = () => (
  <div className="flex gap-6">
    {SOCIALS_ITEMS.map(({ href, icon, name }, index) => (
      <a key={index} href={href}>
        <Badge leftSection={icon}>{name}</Badge>
      </a>
    ))}
  </div>
);
