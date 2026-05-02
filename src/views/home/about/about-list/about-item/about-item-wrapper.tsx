import type { ReactNode } from "react";

type AboutItemWrapperProps = {
  hasLine: boolean;
  children: ReactNode;
};

export const AboutItemWrapper = ({
  hasLine,
  children,
}: AboutItemWrapperProps) => {
  if (!hasLine) {
    return children;
  }

  return (
    <div className="pl-6 pt-2 pr-2 pb-2 border-l-8 border-l-green-600 bg-gray-50 rounded-xl">
      {children}
    </div>
  );
};
