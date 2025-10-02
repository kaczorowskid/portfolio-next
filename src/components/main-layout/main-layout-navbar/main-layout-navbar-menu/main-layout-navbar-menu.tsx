import { MainLayoutNavbarMenuItems } from "./main-layout-navbar-menu-items";
import { cn } from "@/utils";

type MainLayoutNavbarMenuProps = {
  isOpen: boolean;
};

export const MainLayoutNavbarMenu = ({ isOpen }: MainLayoutNavbarMenuProps) => (
  <div
    id="menu-section"
    className={cn(
      "h-screen bg-black text-white w-full fixed inset-0 z-10 transition-normal duration-500 overflow-hidden",
      isOpen ? "translate-x-0" : "translate-x-full"
    )}
  >
    <MainLayoutNavbarMenuItems />
  </div>
);
