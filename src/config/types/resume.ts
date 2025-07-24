import { FrontMatter } from "./post";

export type ProjectMatter = FrontMatter & {
  description: string;
  skillList: string[];
  start: string;
  end: string;
  link: string;
};

export type ProjectType = {
  projectMatter: ProjectMatter;
  content: string;
};
