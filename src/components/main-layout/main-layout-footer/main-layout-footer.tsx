import { MainLayoutFooterCopyright } from "./main-layout-footer-copyright";
import { MainLayoutFooterLinks } from "./main-layout-footer-links";

export const MainLayoutFooter = () => (
  <footer className="bg-black text-md flex flex-col gap-2 sm:flex-row justify-between items-center mx-auto px-3 sm:px-20 md:px-40 py-10 md:py-12">
    <MainLayoutFooterCopyright />
    <MainLayoutFooterLinks />
  </footer>
);
