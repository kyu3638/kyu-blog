import { getPostDetail } from "@/lib/post";
import dayjs from "dayjs";
import { MDXRemote } from "next-mdx-remote/rsc";
import path from "path";
import React from "react";

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
      <div>
        <MDXRemote source={content} />
      </div>
    </div>
  );
};

export default PostDetailPage;
