import { FrontMatter } from "./post";

export type ProjectMatter = FrontMatter & {
  description: string;
  skillList: string[];
};

export type ProjectType = {
  projectMatter: ProjectMatter;
  content: string;
};
