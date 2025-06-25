import { getFrontMatter, getMDXPathList, getPostDetail } from "@/lib/post";
import dayjs from "dayjs";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import path from "path";
import PostBody from "@/components/post/PostBody";
import PostHeader from "@/components/post/PostHeader";

type PostDeatilPageProps = {
  params: Promise<{ category: string; fileName: string }>;
};

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const pathList = await getMDXPathList();

  const frontMatterList = pathList.map((path) => {
    return getFrontMatter(path);
  });

  return frontMatterList.map((frontMatter) => {
    return {
      category: frontMatter.category,
      fileName: frontMatter.fileName,
    };
  });
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
      <PostHeader writtenAt={frontMatter.writtenAt} title={frontMatter.title} />
      <article className="font-fira-mono p-4 leading-loose">
        {/* TODO : TOC */}
        <PostBody content={content} />
      </article>
    </div>
  );
};

export default PostDetailPage;
