import { ReactNode } from "react";
import { ListBullet } from "./list-bullet";

export type Size = "small" | "medium";

type ListItemProps = {
  size?: Size;
  children: ReactNode;
};

export const ListItem = ({ size = "small", children }: ListItemProps) => (
  <li className="flex items-start gap-3">
    <div className="flex items-center h-[1.5em]">
      <ListBullet size={size} />
    </div>
    {children}
  </li>
);
