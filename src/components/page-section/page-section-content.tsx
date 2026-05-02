import type { ReactNode } from "react";
import { cn } from "@/utils";

type PageSectionContentProps = {
  className?: string;
  children: ReactNode;
};

export const PageSectionContent = ({
  className,
  children,
}: PageSectionContentProps) => (
  <div className={cn("w-full px-4 sm:px-16", className)}>{children}</div>
);
