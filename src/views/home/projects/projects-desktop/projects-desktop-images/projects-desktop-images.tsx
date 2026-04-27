import Image from "next/image";
import { useRef } from "react";
import { SiGithub } from "react-icons/si";
import { TbLocation } from "react-icons/tb";
import { PROJECTS_DETAILS_DATA } from "../../projects-details.data";
import { ProjectsDesktopImageLink } from "./projects-desktop-images-link";

type ProjectsDesktopImageProps = {
  activeIndex: number;
};

export const ProjectsDesktopImage = ({
  activeIndex,
}: ProjectsDesktopImageProps) => {
  const project = PROJECTS_DETAILS_DATA[activeIndex] ?? PROJECTS_DETAILS_DATA[0];
  const { image, github, live, title } = project;

  const ref = useRef<HTMLImageElement>(null);

  return (
    <div className="aspect-[16/9] pr-16 sticky top-[calc(50%-150px)]">
      <Image
        ref={ref}
        className="size-full object-cover rounded-2xl"
        src={image}
        alt=""
      />
      {(github || live) && (
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center opacity-0 hover:opacity-90"
          style={{ width: ref.current?.width, height: ref.current?.height }}
        >
          <div className="flex px-3 py-2 gap-3 bg-black rounded-lg">
            {github && (
              <ProjectsDesktopImageLink
                href={github}
                icon={SiGithub}
                project={title}
                type="github"
              />
            )}
            {live && (
              <ProjectsDesktopImageLink
                href={live}
                icon={TbLocation}
                project={title}
                type="live"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
