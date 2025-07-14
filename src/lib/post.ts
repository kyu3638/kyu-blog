import { glob } from "glob";
import fs from "fs";
import matter from "gray-matter";
import { FrontMatter, TOCItem } from "@/config/types";

export const getMDXPathList = async (category?: string) => {
  const directory = category ? `${category}/` : "";
  const pattern = `${process.cwd()}/src/contents/${directory}**/*.mdx`;
  const mdxFileList = await glob(pattern);
  return mdxFileList;
};

export const getFrontMatter = (filePath: string) => {
  const { frontMatter } = parseMDXFile(filePath);

  return frontMatter;
};

export const getPostDetail = (filePath: string) => {
  return parseMDXFile(filePath);
};

export const parseMDXFile = (filePath: string) => {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const toc = parseToc(content);

  return {
    frontMatter: data as FrontMatter,
    content,
    toc: toc,
  };
};

export const parseToc = (content: string): TOCItem[] => {
  const regex = /^(#|##|###) (.*$)/gim;
  const headingList = content.match(regex);

  return (
    headingList?.map((heading: string) => ({
      text: heading.replace("##", "").replace("#", ""),
      link:
        "#" +
        heading
          .replace(/^#+\s*/, "") // 앞의 모든 # 제거
          .replace(/[\[\]:!@#$/%^&*()+=,.?]/g, "") // 특수문자 제거 (? 포함)
          .replace(/\s+/g, "-") // 연속된 공백을 하이픈으로
          .toLowerCase()
          .replace(/^-+|-+$/g, ""), // 앞뒤 하이픈 제거
      indent: (heading.match(/#/g)?.length || 2) - 1,
    })) || []
  );
};
