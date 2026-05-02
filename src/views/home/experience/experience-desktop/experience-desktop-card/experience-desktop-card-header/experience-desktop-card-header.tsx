import type { StaticImageData } from "next/image";
import { ExperienceDesktopCardHeaderHeading } from "./experience-desktop-card-header-heading";
import { ExperienceDesktopCardHeaderLogo } from "./experience-desktop-card-header-logo";
import { ExperienceDesktopCardHeaderMeta } from "./experience-desktop-card-header-meta";

type ExperienceDesktopCardHeaderProps = {
  logo: StaticImageData;
  company: string;
  period: string;
  position: string;
  location: string;
};

export const ExperienceDesktopCardHeader = ({
  logo,
  period,
  position,
  company,
  location,
}: ExperienceDesktopCardHeaderProps) => (
  <div className="w-full flex gap-7 mb-3 items-center justify-between flex-row">
    <div className="flex gap-7 items-center">
      <ExperienceDesktopCardHeaderLogo logo={logo} company={company} />
      <ExperienceDesktopCardHeaderHeading
        position={position}
        company={company}
      />
    </div>
    <ExperienceDesktopCardHeaderMeta location={location} period={period} />
  </div>
);
