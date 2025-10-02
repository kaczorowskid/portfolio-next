import { cn } from "@/utils";
import { ListProps } from "./list";
import { Size } from "./list-item";

type ListBulletProps = {
  size?: Size;
};

const getSize = (size: Size) => (size == "small" ? "w-2 h-2" : "w-3 h-3");

export const ListBullet = ({ size = "small" }: ListBulletProps) => (
  <div className={cn("bg-green-600 rounded-full", getSize(size))} />
);
