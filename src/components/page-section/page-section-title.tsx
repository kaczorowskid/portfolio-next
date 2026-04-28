import { ReactNode } from "react";

type PageSectionTitleProps = {
  children: ReactNode;
};

export const PageSectionTitle = ({ children }: PageSectionTitleProps) => (
  <h2 className="text-6xl mt-20 md:text-9xl font-bold">{children}</h2>
);
