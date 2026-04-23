import programming from "@/assets/images/programming.svg";
import Image from "next/image";

export const HeroImage = () => (
  <div className="flex-1 flex justify-center">
    <Image
      src={programming}
      alt="hero-image"
      className="max-w-md w-full lg:max-w-2xl"
    />
  </div>
);
