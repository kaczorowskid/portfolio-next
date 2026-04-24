import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { TbLocation } from "react-icons/tb";
import { useRef } from "react";
import { PROJECTS_DETAILS_DATA } from "../../projects-details.data";
import { ProjectsDesktopImageLink } from "./projects-desktop-images-link";

type ProjectsDesktopImageProps = {
  currentItem: number[];
};

export const ProjectsDesktopImage = ({
  currentItem,
}: ProjectsDesktopImageProps) => {
  const { image, github, live } =
    PROJECTS_DETAILS_DATA[currentItem.length - 2] ?? PROJECTS_DETAILS_DATA[0];

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
              <ProjectsDesktopImageLink href={github} icon={SiGithub} />
            )}
            {live && (
              <ProjectsDesktopImageLink href={live} icon={TbLocation} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
