import Link from "next/link";
import { Fragment } from "react";
import { CONTACT_EMAIL, CONTACT_GITHUB, CONTACT_LINKEDIN } from "@/constants";

const SOCIALS = [
  {
    name: "Email",
    href: `mailto:${CONTACT_EMAIL}`,
    social: "email",
  },
  {
    name: "Github",
    href: CONTACT_GITHUB,
    social: "github",
  },
  {
    name: "Linkedin",
    href: CONTACT_LINKEDIN,
    social: "linkedin",
  },
];

export const MainLayoutFooterLinks = () => (
  <div className="text-gray-400 flex gap-2">
    {SOCIALS.map(({ href, name, social }) => (
      <Fragment key={social}>
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
