import { Badge } from "@/components";
import Link from "next/link";
import { IconType } from "react-icons";

type HeroSocialsItemProps = {
  href: string;
  icon: IconType;
  name: string;
  social: "email" | "github" | "linkedin";
};

export const HeroSocialsItem = ({
  href,
  icon: Icon,
  name,
  social,
}: HeroSocialsItemProps) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    data-umami-event="social-hero-event"
    data-umami-event-social={social}
  >
    <Badge color="white" leftSection={<Icon />}>
      {name}
    </Badge>
  </Link>
);
