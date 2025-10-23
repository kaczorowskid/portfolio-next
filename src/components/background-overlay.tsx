type BackgroundOverlayProps = {
  title: string;
};

const createBackgroundTitle = (title: string) => `${title} • `.repeat(8);

export const BackgroundOverlay = ({ title }: BackgroundOverlayProps) => (
  <div className="absolute h-full top-0 flex items-center justify-center opacity-5">
    <div className="text-[200px] font-bold whitespace-nowrap">
      {createBackgroundTitle(title)}
    </div>
  </div>
);
