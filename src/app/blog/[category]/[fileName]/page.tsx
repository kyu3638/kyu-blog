import { getPostDetail } from "@/lib/post";
import dayjs from "dayjs";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import path from "path";
import React, { ComponentProps } from "react";
import "@/shared/styles/markdown.css";
import rehypePrettyCode from "rehype-pretty-code";
import fs from "fs";

type PostDeatilPageProps = {
  params: Promise<{ category: string; fileName: string }>;
};

const PostDetailPage = async ({ params }: PostDeatilPageProps) => {
  const { category, fileName } = await params;

  const filePath = path.join(
    process.cwd(),
    "src/contents",
    category,
    `${fileName}.mdx`,
  );

  const { frontMatter, content, toc } = getPostDetail(filePath);

  return (
    <div>
      <div className="mt-4 border-b border-gray-300 p-4">
        <time className="font-fira-mono inline-block pb-2 font-medium">
          {dayjs(frontMatter.writtenAt).format("YYYY.MM.DD")}
        </time>
        <h1 className="font-fira-mono text-3xl font-bold">
          {frontMatter.title}
        </h1>
      </div>
      {/* TOC */}
      <article className="font-fira-mono p-4 leading-loose">
        <MDXRemote
          source={content}
          components={components}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [
                  rehypePrettyCode,
                  {
                    theme: JSON.parse(
                      fs.readFileSync(
                        "src/app/github-light-high-contrast.json",
                        "utf-8",
                      ),
                    ),
                  },
                ],
              ],
            },
          }}
        />
      </article>
    </div>
  );
};

export default PostDetailPage;

const components: MDXRemoteProps["components"] = {
  h1: ({ children }) => {
    return <h1 className="mt-4 text-3xl font-semibold">{children}</h1>;
  },
  h2: ({ children }) => {
    return <h2 className="mt-4 text-2xl font-semibold">{children}</h2>;
  },
  h3: ({ children }) => {
    return <h3 className="mt-4 text-xl font-semibold">{children}</h3>;
  },
  h4: ({ children }) => {
    return <h4 className="text-lg font-semibold">{children}</h4>;
  },
  a: ({ href, children }) => {
    return (
      <a href={href} target="_blank" className="text-blue-600 hover:underline">
        {children}
      </a>
    );
  },
  ol: ({ children }) => {
    return <ol className="mt-2 list-decimal pl-8">{children}</ol>;
  },
  ul: ({ children }) => {
    return <ul className="mt-2 list-disc pl-8">{children}</ul>;
  },
  hr: () => {
    return <hr className="border-gray-400" />;
  },
  p: ({ children }) => {
    return <p className="mt-4">{children}</p>;
  },
};
