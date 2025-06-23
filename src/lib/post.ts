import { glob } from "glob";
import fs from "fs";
import matter from "gray-matter";

type FrontMatter = {
  title: string;
  writtenAt: Date;
  fileName: string;
  category: string;
};

/**
 * MDX 파일 경로를 조회하는 함수입니다.
 *
 * @param category (optional) - 지정하지 않으면 모든 카테고리의 MDX 파일을 조회합니다.
 * @returns Promise<string[]> - MDX 파일 경로를 배열로 반환합니다.
 */
export const getMDXPathList = async (category?: string) => {
  const directory = category ? `${category}/` : "";
  const pattern = `${process.cwd()}/src/contents/${directory}**/*.mdx`;
  const mdxFileList = await glob(pattern);
  return mdxFileList;
};

/**
 * MDX 파일을 파싱하여 FrontMatter와 content, TOC를 반환합니다.
 * @param filePath - MDX 파일의 경로
 * @returns
 */
export const parseMDXFile = (filePath: string) => {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    frontMatter: data as FrontMatter,
    content,
    toc: "", // not implemented yet
  };
};

/**
 * MDX 파일의 FrontMatter를 반환합니다.
 * @param filePath - MDX 파일의 경로
 * @returns
 */
export const getFrontMatter = (filePath: string) => {
  const { frontMatter } = parseMDXFile(filePath);

  return frontMatter;
};

/**
 * MDX 파일의 모든 정보를 반환합니다.
 * - FrontMatter
 * - content
 * - TOC
 * @param filePath - MDX 파일의 경로
 * @returns
 */
export const getPostDetail = (filePath: string) => {
  return parseMDXFile(filePath);
};
