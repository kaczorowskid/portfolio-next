import { MAIN_LAYOUT_NAVBAR_MENU_ID } from "../main-layout-navbar.constants";
import { MainLayoutNavbarMenuItems } from "./main-layout-navbar-menu-items";
import { cn } from "@/utils";

type MainLayoutNavbarMenuProps = {
  isOpen: boolean;
};

export const MainLayoutNavbarMenu = ({ isOpen }: MainLayoutNavbarMenuProps) => (
  <div
    id={MAIN_LAYOUT_NAVBAR_MENU_ID}
    role="dialog"
    aria-modal="true"
    aria-label="Main navigation"
    inert={!isOpen}
    className={cn(
      "h-screen bg-black text-white w-full fixed inset-0 z-100 transition-normal duration-500 overflow-hidden",
      isOpen ? "translate-x-0" : "translate-x-full",
    )}
  >
    <MainLayoutNavbarMenuItems />
  </div>
);
