"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type MainLayoutNavbarContextProps = {
  isOpen: boolean;
  toogleMenu: () => void;
};

const MainLayoutNavbarContext =
  createContext<MainLayoutNavbarContextProps | null>(null);

type MainLayoutNavbarProviderProps = {
  children: ReactNode;
};

export const MainLayoutNavbarProvider = ({
  children,
}: MainLayoutNavbarProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toogleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <MainLayoutNavbarContext.Provider value={{ isOpen, toogleMenu }}>
      {children}
    </MainLayoutNavbarContext.Provider>
  );
};

export const useMainLayoutNavbarContext = () => {
  const context = useContext(MainLayoutNavbarContext);

  if (!context) {
    throw new Error("Missing MainLayoutNavbarContext.Provider in the tree!");
  }

  return context;
};
