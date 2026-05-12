import { cn } from "@/utils";
import { MAIN_LAYOUT_NAVBAR_MENU_ID } from "./main-layout-navbar.constants";

type MainLayoutNavbarButtonProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export const MainLayoutNavbarButton = ({
  isOpen,
  toggleMenu,
}: MainLayoutNavbarButtonProps) => (
  <button
    type="button"
    onClick={toggleMenu}
    aria-expanded={isOpen}
    aria-controls={MAIN_LAYOUT_NAVBAR_MENU_ID}
    aria-label={isOpen ? "Close menu" : "Open menu"}
    className="hidden fixed top-4 right-4 size-10 lg:top-7 lg:right-7 lg:size-13 bg-white mix-blend-difference rounded-full md:flex justify-center items-center font-bold z-50 flex-col cursor-pointer transition-all duration-500"
  >
    <div
      className={cn(
        "h-1 w-6 my-0.5 rounded-full bg-black transition ease transform duration-300",
        isOpen && "rotate-45 translate-y-2",
      )}
    />
    <div
      className={cn(
        "h-1 w-6 my-0.5 rounded-full bg-black transition ease transform duration-300",
        isOpen ? "opacity-0" : "opacity-100",
      )}
    />
    <div
      className={cn(
        "h-1 w-6 my-0.5 rounded-full bg-black transition ease transform duration-300",
        isOpen && "-rotate-45 -translate-y-2",
      )}
    />
  </button>
);
