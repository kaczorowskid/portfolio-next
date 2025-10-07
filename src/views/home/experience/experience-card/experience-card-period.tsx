import { Badge } from "@/components";

type ExperienceCardPeriodProps = {
  period: string;
};

export const ExperienceCardPeriod = ({ period }: ExperienceCardPeriodProps) => (
  <Badge>{period}</Badge>
);
