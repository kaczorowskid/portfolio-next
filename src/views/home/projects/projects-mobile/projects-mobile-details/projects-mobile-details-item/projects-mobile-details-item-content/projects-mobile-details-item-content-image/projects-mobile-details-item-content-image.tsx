import Image, { type StaticImageData } from "next/image";
import { SiGithub } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import { ProjectsMobileDetailsItemContentImageLink } from "./projects-mobile-details-item-content-image-link";

type ProjectsMobileDetailsItemContentImageProps = {
  image: StaticImageData;
  title: string;
  github?: string;
  live?: string;
};

export const ProjectsMobileDetailsItemContentImage = ({
  image,
  title,
  github,
  live,
}: ProjectsMobileDetailsItemContentImageProps) => (
  <div className="relative mt-4">
    <Image className="size-full object-cover rounded-2xl" src={image} alt="" />
    {(github || live) && (
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="flex px-3 py-2 gap-3 bg-black rounded-lg">
          {github && (
            <ProjectsMobileDetailsItemContentImageLink
              href={github}
              icon={SiGithub}
              project={title}
              type="github"
            />
          )}
          {live && (
            <ProjectsMobileDetailsItemContentImageLink
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
);
