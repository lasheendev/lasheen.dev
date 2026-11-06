export type ProjectCategory = "client" | "employment" | "personal";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription?: string;
  date: string;
  category: ProjectCategory;
  // Company name, for employment projects.
  employer?: string;
  // "discontinued" means the app is no longer in the stores; "unreleased"
  // means it never shipped.
  status?: "live" | "discontinued" | "unreleased";
  tags: string[];
  backgroundImageSource?: string;
  access: ProjectAccess[];
}

export interface ProjectAccess {
  id: string;
  color: string;
  url: string;
  icon: string;
}

export interface ProjectResponse {
  projects: Project[];
}
