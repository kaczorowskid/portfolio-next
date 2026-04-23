import { Badge } from "@/components";
import { Icon } from "@tabler/icons-react";
import Link from "next/link";

type HeroSocialsItemProps = {
  href: string;
  icon: Icon;
  name: string;
};

export const HeroSocialsItem = ({
  href,
  icon: Icon,
  name,
}: HeroSocialsItemProps) => (
  <Link href={href}>
    <Badge color="white" leftSection={<Icon />}>
      {name}
    </Badge>
  </Link>
);
