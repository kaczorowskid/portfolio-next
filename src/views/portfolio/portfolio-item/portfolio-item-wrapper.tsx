import { CSSProperties, ReactNode } from "react";

type PortfolioItemWrapperProps = {
  color: string;
  children: ReactNode;
};

export const PortfolioItemWrapper = ({
  children,
  color,
}: PortfolioItemWrapperProps) => (
  <div
    className="bg-[var(--background-color)] group overflow-hidden rounded-4xl transition aspect-square flex flex-col relative"
    style={{ "--background-color": color } as CSSProperties}
  >
    {children}
  </div>
);
