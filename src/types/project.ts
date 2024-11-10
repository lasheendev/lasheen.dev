export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  role: string;
  client: string;
  date: string;
  tags: string[];
  backgroundImageSource?: string;
  order: number;
  credits: string;
  access: ProjectAccess[];
}

export interface ProjectAccess {
  color: string;
  url: string;
  icon: string;
}

export interface ProjectResponse {
  projects: Project[];
}
