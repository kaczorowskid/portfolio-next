import type { ReactNode } from "react";
import { MainLayoutFooter } from "./main-layout-footer";
import { MainLayoutNavbar } from "./main-layout-navbar";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => (
  <>
    <MainLayoutNavbar />
    <main>{children}</main>
    <MainLayoutFooter />
  </>
);
