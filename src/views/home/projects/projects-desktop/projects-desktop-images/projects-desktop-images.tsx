import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import { PROJECTS_DETAILS_DATA } from "../../projects-details.data";
import { ProjectsDesktopImageLink } from "./projects-desktop-images-link";

type ProjectsDesktopImageProps = {
  activeIndex: number;
};

export const ProjectsDesktopImage = ({
  activeIndex,
}: ProjectsDesktopImageProps) => {
  const project =
    PROJECTS_DETAILS_DATA[activeIndex] ?? PROJECTS_DETAILS_DATA[0];
  const { image, github, live, title } = project;

  return (
    <div className="aspect-video pr-16 sticky top-[calc(50%-150px)]">
      <div className="relative w-full">
        <Image
          className="w-full h-70 object-cover rounded-2xl"
          src={image}
          alt=""
        />
        {(github || live) && (
          <div className="absolute inset-0 flex justify-center items-center rounded-2xl opacity-0 hover:opacity-90 transition-opacity">
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
                  icon={TbWorld}
                  project={title}
                  type="live"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
