import Image, { StaticImageData } from "next/image";

type ExperienceDesktopCardHeaderLogoProps = {
  logo: StaticImageData;
  company: string;
};

export const ExperienceDesktopCardHeaderLogo = ({
  logo,
  company,
}: ExperienceDesktopCardHeaderLogoProps) => (
  <Image
    className="rounded-lg shrink-0"
    width={50}
    height={50}
    src={logo}
    alt={`${company} logo`}
  />
);
