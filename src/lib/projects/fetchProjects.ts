import type { Project, ProjectResponse } from "../../types/project";

const projectsUrl =
  "https://raw.githubusercontent.com/lasheendev/lasheen.dev/refs/heads/master/json/projects_v2.json";

export async function fetchProjects(): Promise<Project[]> {
  const response = await fetch(projectsUrl);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data: ProjectResponse = await response.json();
  return Object.values(data.projects);
}
