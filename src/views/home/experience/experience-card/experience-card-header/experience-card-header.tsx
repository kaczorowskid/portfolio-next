import { StaticImageData } from "next/image";
import { ExperienceCardHeaderLogo } from "./experience-card-header-logo";
import { ExperienceCardHeaderMeta } from "./experience-card-header-meta";
import { ExperienceCardHeaderHeading } from "./experience-card-header-heading";

type ExperienceCardHeaderProps = {
  logo: StaticImageData;
  title: string;
  period: string;
  position: string;
  location: string;
};

export const ExperienceCardHeader = ({
  logo,
  period,
  position,
  title,
  location,
}: ExperienceCardHeaderProps) => (
  <div className="w-full flex lg:gap-7 gap-3 mb-3 lg:items-center justify-between lg:flex-row flex-col">
    <div className="flex gap-3 lg:gap-7 items-center">
      <ExperienceCardHeaderLogo logo={logo} />
      <ExperienceCardHeaderHeading position={position} title={title} />
    </div>
    <ExperienceCardHeaderMeta location={location} period={period} />
  </div>
);
