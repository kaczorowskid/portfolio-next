import { List } from "@/components";

type ProjectsDetailsItemTechnologiesProps = {
  technologies: string[];
};

export const ProjectsDetailsItemTechnologies = ({
  technologies,
}: ProjectsDetailsItemTechnologiesProps) => (
  <>
    <p className="pt-10 text-2xl">Technologies I used:</p>
    <List className="px-6 text-2xl my-10 gap-y-6 grid grid-cols-2 [&>*:nth-child(odd)]:justify-self-start [&>*:nth-child(even)]:justify-self-end">
      {technologies.map((technology, index) => (
        <List.Item key={index} size="medium">
          {technology}
        </List.Item>
      ))}
    </List>
  </>
);
