import { Badge } from "@/components";
import Link from "next/link";
import { IconType } from "react-icons";

type HeroSocialsItemProps = {
  href: string;
  icon: IconType;
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
