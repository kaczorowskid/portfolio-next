import {
  IconBolt,
  IconCode,
  IconDatabase,
  IconGauge,
} from "@tabler/icons-react";
import { ContactGetInTouchSocialsItem } from "./contact-get-in-touch-socials-item";

const CONTACT_SOCIALS_DATA = [
  {
    icon: IconCode,
    description: "Modern web applications",
    title: "Frontend development",
  },
  {
    icon: IconBolt,
    description: "Fast, scalable apps",
    title: "React & Next.js",
  },
  {
    icon: IconGauge,
    description: "Lightning-fast loading",
    title: "Performance Optimization",
  },
  {
    icon: IconDatabase,
    description: "Seamless connectivity",
    title: "API Integration",
  },
];

export const ContactGetInTouchSocials = () => (
  <div className="grid grid-cols-2">
    {CONTACT_SOCIALS_DATA.map(({ icon, description, title }, index) => (
      <ContactGetInTouchSocialsItem
        key={index}
        icon={icon}
        description={description}
        title={title}
      />
    ))}
  </div>
);
