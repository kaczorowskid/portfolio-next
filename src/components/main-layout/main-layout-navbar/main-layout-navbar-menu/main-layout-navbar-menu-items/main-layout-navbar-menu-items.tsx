import { MainLayoutNavbarMenuLink } from "./main-layout-navbar-menu-link";

const NAV_ITEMS = [
  { name: "Home", section: "hero-section" },
  { name: "About", section: "about-section" },
  { name: "Projects", section: "projects-section" },
  { name: "Experience", section: "experience-section" },
  { name: "Skills", section: "skills-section" },
  { name: "Expertise", section: "expertise-section" },
  { name: "Contact", section: "contact-section" },
];

export const MainLayoutNavbarMenuItems = () => (
  <div className="flex flex-col justify-center items-center gap-12 size-full">
    {NAV_ITEMS.map((item, index) => (
      <MainLayoutNavbarMenuLink key={index} item={item} />
    ))}
  </div>
);
