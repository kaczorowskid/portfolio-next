import { ReactNode } from "react";
import { MainLayoutNavbar } from "./main-layout-navbar";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => (
  <>
    <MainLayoutNavbar />
    <main>{children}</main>
  </>
);
