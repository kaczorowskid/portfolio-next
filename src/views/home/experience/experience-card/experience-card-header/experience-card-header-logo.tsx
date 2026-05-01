import Image, { StaticImageData } from "next/image";

type ExperienceCardHeaderLogoProps = {
  logo: StaticImageData;
};

export const ExperienceCardHeaderLogo = ({
  logo,
}: ExperienceCardHeaderLogoProps) => (
  <Image
    className="rounded-lg shrink-0"
    width={50}
    height={50}
    src={logo}
    alt=""
  />
);
