import { ReactNode } from "react";
import { ListItem } from "./list-item";

export type ListProps = {
  children: ReactNode;
};

export const List = ({ children }: ListProps) => (
  <ul className="space-y-3">{children}</ul>
);

List.Item = ListItem;
