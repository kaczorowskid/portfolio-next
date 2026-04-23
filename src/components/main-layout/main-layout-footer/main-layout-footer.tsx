import { MainLayoutFooterCopyright } from "./main-layout-footer-copyright";

export const MainLayoutFooter = () => (
  <footer className="bg-black flex flex-col gap-2 sm:flex-row justify-center items-center mx-auto px-16 py-10 md:py-12">
    <MainLayoutFooterCopyright />
  </footer>
);
