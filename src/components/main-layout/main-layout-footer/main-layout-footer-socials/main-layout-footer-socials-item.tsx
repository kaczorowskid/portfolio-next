import { Icon } from "@tabler/icons-react";
import Link from "next/link";

type MainLayoutFooterSocialsItemProps = {
  item: {
    href: string;
    icon: Icon;
  };
};

export const MainLayoutFooterSocialsItem = ({
  item: { href, icon: Icon },
}: MainLayoutFooterSocialsItemProps) => (
  <Link href={href}>
    <Icon className="size-10 lg:size-14 text-green-600" />
  </Link>
);
