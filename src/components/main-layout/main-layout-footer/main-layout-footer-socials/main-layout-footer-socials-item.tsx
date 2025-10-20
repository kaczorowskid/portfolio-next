import { Badge } from "@/components/ui";
import { Icon } from "@tabler/icons-react";
import Link from "next/link";

type MainLayoutFooterSocialsItemProps = {
  href: string;
  icon: Icon;
  name: string;
};

export const MainLayoutFooterSocialsItem = ({
  href,
  icon: Icon,
  name,
}: MainLayoutFooterSocialsItemProps) => (
  <Link href={href}>
    <Badge leftSection={<Icon />} color="black">
      {name}
    </Badge>
  </Link>
);
