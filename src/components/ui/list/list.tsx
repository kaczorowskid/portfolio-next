import { ReactNode } from "react";
import { ListItem } from "./list-item";
import { cn } from "@/utils";

export type ListProps = {
  className?: string;
  children: ReactNode;
};

export const List = ({ className, children }: ListProps) => (
  <ul className={cn("space-y-3", className)}>{children}</ul>
);

List.Item = ListItem;
