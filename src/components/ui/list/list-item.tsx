import { ReactNode } from "react";
import { ListBullet } from "./list-bullet";

export type Size = "small" | "medium";

type ListItemProps = {
  size?: Size;
  children: ReactNode;
};

export const ListItem = ({ size = "small", children }: ListItemProps) => (
  <li className="flex items-center gap-3">
    <ListBullet size={size} />
    {children}
  </li>
);
