import { getPostDetail } from "@/lib/post";
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

  const post = getPostDetail(filePath);

  return <div>PostDetailPage</div>;
};

export default PostDetailPage;
