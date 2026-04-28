import { SITE_AUTHOR, SITE_DESCRIPTION, SITE_URL } from "@/constants";

export const JsonLdScript = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_AUTHOR,
    jobTitle: "Software Developer",
    url: SITE_URL,
    email: "kaczorowskid97@gmail.com",
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
    sameAs: [
      "https://github.com/kaczorowskid",
      "https://linkedin.com/in/damiankaczorowski",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
