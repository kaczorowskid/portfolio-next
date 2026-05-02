"use client";

import { MainLayoutNavbarButton } from "./main-layout-navbar-button";
import { useMainLayoutNavbarContext } from "./main-layout-navbar-context";
import { MainLayoutNavbarMenu } from "./main-layout-navbar-menu";

export const MainLayoutNavbarContent = () => {
  const { isOpen, toggleMenu } = useMainLayoutNavbarContext();

  return (
    <>
      <MainLayoutNavbarButton isOpen={isOpen} toggleMenu={toggleMenu} />
      <MainLayoutNavbarMenu isOpen={isOpen} />
    </>
  );
};
