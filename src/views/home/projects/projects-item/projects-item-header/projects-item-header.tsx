import { CSSProperties } from "react";
import { useProjectsItemHeader } from "./use-projects-item-header";

type ProjectsItemHeaderProps = {
  title: string;
  subtitle: string;
  description?: string;
};

export const ProjectsItemHeader = ({
  description,
  subtitle,
  title,
}: ProjectsItemHeaderProps) => {
  const { descriptionHeight, descriptionRef } = useProjectsItemHeader();

  return (
    <header className="px-10 py-10">
      <h2 className="text-white text-lg sm:text-xl md:text-2xl font-light leading-tight">
        {title}
      </h2>
      <p className="mt-1 text-white/60 text-xs sm:text-lg font-light truncate">
        {subtitle}
      </p>
      <div
        className="max-h-0 overflow-hidden opacity-0 transition-[max-height,opacity] duration-300 ease-out group-hover:max-h-[var(--extra-h)] group-hover:opacity-100"
        style={{ "--extra-h": `${descriptionHeight}px` } as CSSProperties}
      >
        <p
          className="text-white/80 mt-1 text-xs sm:text-sm font-light leading-6"
          ref={descriptionRef}
        >
          {description}
        </p>
      </div>
    </header>
  );
};
