import type { ReactNode } from "react";
import { MainLayoutFooter } from "./main-layout-footer";
import { MainLayoutNavbar } from "./main-layout-navbar";
import { MainLayoutBar } from "./main-layout-bar";
import { env } from "@/shared";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const isOpenToNewRoles = env.NEXT_PUBLIC_OPEN_TO_NEW_ROLES === "yes";

  return (
    <>
      {isOpenToNewRoles && <MainLayoutBar />}
      <MainLayoutNavbar />
      <main>{children}</main>
      <MainLayoutFooter />
    </>
  );
};
