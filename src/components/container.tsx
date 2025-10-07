import { cn } from "@/utils";
import React, { ComponentPropsWithoutRef, ElementType } from "react";

type PolymorphicProps<T extends ElementType> = {
  as?: T;
  className?: string;
} & ComponentPropsWithoutRef<T>;

export const Container = <T extends ElementType = "div">({
  as,
  className,
  children,
  ...props
}: PolymorphicProps<T>) => {
  const As = as || "div";

  return (
    <As className={cn("mx-auto", className)} {...props}>
      {children}
    </As>
  );
};
