import { cn } from "@/utils";
import { ReactNode } from "react";

type PageSectionContentProps = {
  className?: string;
  children: ReactNode;
};

export const PageSectionContent = ({
  className,
  children,
}: PageSectionContentProps) => (
  <div className={cn("w-full", className)}>{children}</div>
);
