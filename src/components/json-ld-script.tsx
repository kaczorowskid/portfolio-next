import {
  CONTACT_EMAIL,
  CONTACT_GITHUB,
  CONTACT_LINKEDIN,
  SITE_AUTHOR,
  SITE_DESCRIPTION,
  SITE_URL,
} from "@/constants";

export const JsonLdScript = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_AUTHOR,
    jobTitle: "Software Developer",
    url: SITE_URL,
    email: CONTACT_EMAIL,
    description: SITE_DESCRIPTION,
    knowsAbout: [
      "Java",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Spring Boot",
      "Node.js",
      "Tailwind CSS",
      "Tanstack Query",
      "Zustand",
    ],
    sameAs: [CONTACT_GITHUB, CONTACT_LINKEDIN],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
