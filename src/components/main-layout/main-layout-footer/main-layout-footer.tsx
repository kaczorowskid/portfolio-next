import { MainLayoutFooterSocials } from "./main-layout-footer-socials";
import { MainLayoutFooterCopyright } from "./main-layout-footer-copyright";

export const MainLayoutFooter = () => (
  <footer className="bg-black">
    <div className="flex flex-col md:flex-row justify-between items-center container mx-auto px-7 py-16">
      <MainLayoutFooterSocials />
      <MainLayoutFooterCopyright />
    </div>
  </footer>
);
