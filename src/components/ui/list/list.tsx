import type { ReactNode } from "react";
import { cn } from "@/utils";
import { ListItem } from "./list-item";

export type ListProps = {
  className?: string;
  children: ReactNode;
};

export const List = ({ className, children }: ListProps) => (
  <ul className={cn("space-y-3", className)}>{children}</ul>
);

List.Item = ListItem;
