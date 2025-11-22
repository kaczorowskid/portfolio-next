import { MainLayoutFooterSocials } from "./main-layout-footer-socials";
import { MainLayoutFooterCopyright } from "./main-layout-footer-copyright";

export const MainLayoutFooter = () => (
  <footer className="bg-black">
    <div className="flex flex-col gap-2 sm:flex-row justify-between items-center mx-auto px-7 py-10 md:py-16">
      <MainLayoutFooterSocials />
      <MainLayoutFooterCopyright />
    </div>
  </footer>
);
