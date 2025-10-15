import { PortfolioItem } from "./portfolio-item";
import { getSortedPostsData } from "@/lib";
import { PortfolioWrapper } from "./portfolio-wrapper";

export const Portfolio = () => {
  const portfolios = getSortedPostsData();

  return (
    <PortfolioWrapper>
      {portfolios.map((portfolio, index) => (
        <PortfolioItem key={index} portfolio={portfolio} />
      ))}
    </PortfolioWrapper>
  );
};
