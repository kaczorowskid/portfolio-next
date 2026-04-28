import Link from "next/link";
import { Fragment } from "react";

const SOCIALS = [
  {
    name: "Email",
    href: "mailto:kaczorowskid97@gmail.com",
    social: "email",
  },
  {
    name: "Github",
    href: "https://github.com/kaczorowskid",
    social: "github",
  },
  {
    name: "Linkedin",
    href: "https://linkedin.com/in/damiankaczorowski",
    social: "linkedin",
  },
];

export const MainLayoutFooterLinks = () => (
  <div className="text-gray-400 flex gap-2">
    {SOCIALS.map(({ href, name, social }, index) => (
      <Fragment key={index}>
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          data-umami-event="social-footer-event"
          data-umami-event-social={social}
        >
          {name}
        </Link>
        <span className="last:hidden">•</span>
      </Fragment>
    ))}
  </div>
);
