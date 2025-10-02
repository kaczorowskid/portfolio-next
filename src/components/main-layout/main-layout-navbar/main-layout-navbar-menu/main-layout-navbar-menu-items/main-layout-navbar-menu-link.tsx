import { useMainLayoutNavbarContext } from "../../main-layout-navbar-context";

type MainLayoutNavbarMenuLinkProps = {
  name: string;
};

export const MainLayoutNavbarMenuLink = ({
  name,
}: MainLayoutNavbarMenuLinkProps) => {
  const { toogleMenu } = useMainLayoutNavbarContext();

  return (
    <button
      onClick={toogleMenu}
      className="text-3xl font-medium text-gray-400 hover:text-white transition-colors"
    >
      {name}
    </button>
  );
};
