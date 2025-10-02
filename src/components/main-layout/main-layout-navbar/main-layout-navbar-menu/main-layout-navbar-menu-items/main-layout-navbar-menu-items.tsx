import { MainLayoutNavbarMenuLink } from "./main-layout-navbar-menu-link";

const NAV_ITEMS = [
  "Home",
  "About",
  "Portfolio",
  "Experience",
  "Skills",
  "Contact",
];

export const MainLayoutNavbarMenuItems = () => (
  <div className="flex flex-col justify-center items-center gap-12 size-full">
    {NAV_ITEMS.map((item, index) => (
      <MainLayoutNavbarMenuLink key={index} name={item} />
    ))}
  </div>
);
