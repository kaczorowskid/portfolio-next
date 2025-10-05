import { ReactNode } from "react";
import { MainLayoutNavbar } from "./main-layout-navbar";
import { MainLayoutFooter } from "./main-layout-footer";

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
