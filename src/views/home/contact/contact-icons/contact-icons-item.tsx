import { Icon } from "@tabler/icons-react";
import Link from "next/link";

type ContactIconsItemProps = {
  href: string;
  icon: Icon;
};

export const ContactIconsItem = ({
  href,
  icon: Icon,
}: ContactIconsItemProps) => (
  <Link href={href}>
    <Icon className="size-20 lg:size-40 text-green-600" />
  </Link>
);
