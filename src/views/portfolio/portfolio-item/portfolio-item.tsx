"use client";

import { CSSProperties } from "react";
import { PortfolioItemHeader } from "./portfolio-item-header";
import { PortfolioItemImage } from "./portfolio-item-image";
import { PortfolioItemWrapper } from "./portfolio-item-wrapper";

type PortfolioItemProps = {
  portfolio: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    color: string;
  };
};

export const PortfolioItem = ({
  portfolio: { color, description, image, subtitle, title },
}: PortfolioItemProps) => (
  <PortfolioItemWrapper color={color}>
    <PortfolioItemHeader
      title={title}
      subtitle={subtitle}
      description={description}
    />
    <PortfolioItemImage image={image} />
  </PortfolioItemWrapper>
);
