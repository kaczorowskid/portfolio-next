import { useMainLayoutNavbarContext } from "../../main-layout-navbar-context";

type MainLayoutNavbarMenuLinkProps = {
  item: {
    name: string;
    section: string;
  };
};

export const MainLayoutNavbarMenuLink = ({
  item: { name, section },
}: MainLayoutNavbarMenuLinkProps) => {
  const { toogleMenu } = useMainLayoutNavbarContext();

  const handleScrollToSection = () => {
    const targetElement = document.getElementById(section);
    targetElement?.scrollIntoView({ behavior: "smooth" });

    toogleMenu();
  };

  return (
    <button
      onClick={handleScrollToSection}
      className="text-3xl cursor-pointer font-medium text-gray-400 hover:text-white transition-colors"
    >
      {name}
    </button>
  );
};
