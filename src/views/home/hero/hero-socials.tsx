import { Badge } from "@/components";
import { IconBrandGithub, IconMail } from "@tabler/icons-react";

const SOCIALS_ITEMS = [
  {
    name: "Github",
    icon: IconBrandGithub,
    href: "/github",
  },
  {
    name: "Email",
    icon: IconMail,
    href: "/mail",
  },
];

export const HeroSocials = () => (
  <div className="flex gap-6">
    {SOCIALS_ITEMS.map(({ href, icon: Icon, name }, index) => (
      <a key={index} href={href}>
        <Badge color="black" leftSection={<Icon />}>
          {name}
        </Badge>
      </a>
    ))}
  </div>
);
