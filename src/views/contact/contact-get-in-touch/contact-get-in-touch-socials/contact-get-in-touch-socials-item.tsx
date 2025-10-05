import { Icon } from "@tabler/icons-react";

type ContactGetInTouchSocialsItemProps = {
  title: string;
  description: string;
  icon: Icon;
};

export const ContactGetInTouchSocialsItem = ({
  icon: Icon,
  description,
  title,
}: ContactGetInTouchSocialsItemProps) => (
  <div className="text-white flex items-center gap-6 py-3">
    <Icon className="size-8 text-green-600" />
    <div>
      <p className="font-bold">{title}</p>
      <p className="">{description}</p>
    </div>
  </div>
);
