import Image, { StaticImageData } from "next/image";

type ExperienceMobileDetailsCardTriggerLogoProps = {
  logo: StaticImageData;
  company: string;
};

export const ExperienceMobileDetailsCardTriggerLogo = ({
  logo,
  company,
}: ExperienceMobileDetailsCardTriggerLogoProps) => (
  <Image
    className="rounded-lg shrink-0"
    width={50}
    height={50}
    src={logo}
    alt={`${company} logo`}
  />
);
