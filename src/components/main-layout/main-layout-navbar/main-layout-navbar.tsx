import { MainLayoutNavbarContent } from "./main-layout-navbar-content";
import { MainLayoutNavbarProvider } from "./main-layout-navbar-context";

export const MainLayoutNavbar = () => (
  <MainLayoutNavbarProvider>
    <MainLayoutNavbarContent />
  </MainLayoutNavbarProvider>
);
