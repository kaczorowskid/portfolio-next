import Image, { StaticImageData } from "next/image";

type ProjectsMobileDetailsItemContentImageProps = {
  image: StaticImageData;
};

export const ProjectsMobileDetailsItemContentImage = ({
  image,
}: ProjectsMobileDetailsItemContentImageProps) => (
  <Image
    className="size-full object-cover rounded-2xl mt-4"
    src={image}
    alt=""
  />
);
