import data from "../../../json/projects_v2.json";
import type { Project, ProjectCategory } from "../../types/project";

// Project data is bundled at build time, so every page is prerendered with
// its projects and previews of a branch show that branch's data.
export const projects = data.projects as unknown as Project[];

export const categories: {
  id: ProjectCategory;
  title: string;
  description: string;
}[] = [
  {
    id: "client",
    title: "Client work",
    description: "Built for clients through lasheen.dev.",
  },
  {
    id: "employment",
    title: "Full-time roles",
    description: "Apps I've built as part of my full-time jobs.",
  },
  {
    id: "personal",
    title: "Personal and open source",
    description: "My own apps, tools and open-source packages.",
  },
];
