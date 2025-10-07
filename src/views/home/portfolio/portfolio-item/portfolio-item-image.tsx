type PortfolioItemImageProps = {
  image: string;
};

export const PortfolioItemImage = ({ image }: PortfolioItemImageProps) => (
  <div className="flex-1 min-h-0 flex items-center justify-center transition-transform duration-300 ease-out group-hover:translate-y-1">
    <div className="w-full h-full px-6 overflow-hidden">
      <img className="w-full h-full object-contain" src={image} alt="" />
    </div>
  </div>
);
