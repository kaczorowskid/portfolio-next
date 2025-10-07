type AboutItemProps = {
  text: string;
};

export const AboutItem = ({ text }: AboutItemProps) => (
  <p className="text-white text-xl ">{text}</p>
);
