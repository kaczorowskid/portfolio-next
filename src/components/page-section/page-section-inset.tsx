import { ReactNode } from "react";

type PageSectionInsetProps = {
  children: ReactNode;
};

export const PageSectionInset = ({ children }: PageSectionInsetProps) => (
  <div className="w-full flex flex-col justify-center items-center py-20 px-16 mx-auto max-w-350">
    {children}
  </div>
);
