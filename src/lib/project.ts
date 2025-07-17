import { ProjectMatter } from "@/config/types/resume";
import fs from "fs";
import { glob } from "glob";
import matter from "gray-matter";

export const getProjectPathList = async () => {
  const pathPattern = `${process.cwd()}/src/contents/projects/*.mdx`;
  const filePathList = await glob(pathPattern);
  return filePathList;
};

export const parseProject = (filePath: string) => {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return { projectMatter: data as ProjectMatter, content };
};

export const getProjectList = async () => {
  const projectPathList = await getProjectPathList();

  const projectList = projectPathList.map((path) => {
    return parseProject(path);
  });

  return projectList;
};
