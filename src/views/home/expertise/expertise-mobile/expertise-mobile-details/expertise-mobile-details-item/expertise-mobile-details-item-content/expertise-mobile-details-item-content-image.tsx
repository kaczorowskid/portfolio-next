import Image from "next/image";

type ExpertiseMobileDetailsItemContentImageProps = {
  image: string;
};

export const ExpertiseMobileDetailsItemContentImage = ({
  image,
}: ExpertiseMobileDetailsItemContentImageProps) => (
  <Image
    className="size-full object-cover rounded-2xl mt-4"
    src={image}
    alt=""
  />
);
