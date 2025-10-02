type MainLayoutNavbarButtonProps = {
  isOpen: boolean;
  toogleMenu: () => void;
};

export const MainLayoutNavbarButton = ({
  isOpen,
  toogleMenu,
}: MainLayoutNavbarButtonProps) => {
  return (
    <button
      className="fixed top-10 right-10 w-16 h-16 bg-white mix-blend-difference rounded-full flex justify-center items-center font-bold z-50 flex-col cursor-pointer transition-all duration-500"
      onClick={toogleMenu}
    >
      <div
        className={`h-1 w-6 my-0.5 rounded-full bg-black  transition ease transform duration-300 ${
          isOpen && "rotate-45 translate-y-2"
        } `}
      />
      <div
        className={`h-1 w-6 my-0.5 rounded-full bg-black transition ease transform duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`h-1 w-6 my-0.5 rounded-full bg-black transition ease transform duration-300 ${
          isOpen && "-rotate-45 -translate-y-2"
        }`}
      />
    </button>
  );
};
