import type { ReactNode } from "react";
import { MainLayoutFooter } from "./main-layout-footer";
import { MainLayoutNavbar } from "./main-layout-navbar";
import { MainLayoutBar } from "./main-layout-bar";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => (
  <>
    <MainLayoutBar />
    <MainLayoutNavbar />
    <main>{children}</main>
    <MainLayoutFooter />
  </>
);
