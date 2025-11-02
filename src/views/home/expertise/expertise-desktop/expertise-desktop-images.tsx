import frontend from "@/assets/images/frontend.svg";
import design from "@/assets/images/design.svg";
import development from "@/assets/images/development.svg";
import discovery from "@/assets/images/discovery.png";
import planning from "@/assets/images/planning.svg";
import Image from "next/image";
import { EXPERTISE_DETAILS_DATA } from "../expertise-details.data";

type ExpertiseDesktopImageProps = {
  currentItem: number[];
};

const IMAGES_DATA = [
  EXPERTISE_DETAILS_DATA[0].image,
  EXPERTISE_DETAILS_DATA[1].image,
  EXPERTISE_DETAILS_DATA[2].image,
  EXPERTISE_DETAILS_DATA[3].image,
  EXPERTISE_DETAILS_DATA[4].image,
];

export const ExpertiseDesktopImage = ({
  currentItem,
}: ExpertiseDesktopImageProps) => {
  const currentImage = IMAGES_DATA[currentItem.length - 2] ?? IMAGES_DATA[0];

  return (
    <div className="aspect-[16/9] pr-16 sticky top-[calc(50%-150px)]">
      <Image
        className="size-full object-cover rounded-2xl"
        src={currentImage}
        alt=""
      />
    </div>
  );
};
