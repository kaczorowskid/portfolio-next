import { PageSection } from "@/components";
import { PortfolioItem } from "./portfolio-item";
import { getSortedPostsData } from "@/lib";

export const Portfolio = () => {
  const portfolios = getSortedPostsData();

  return (
    <PageSection
      title="portfolio"
      className="grid grid-cols-1 md:grid-cols-2 gap-10"
    >
      {portfolios.map((portfolio) => (
        <PortfolioItem portfolio={portfolio} />
      ))}
    </PageSection>
  );
};
