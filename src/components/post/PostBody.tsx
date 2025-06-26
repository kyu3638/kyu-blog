import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import fs from "fs";
import rehypePrettyCode from "rehype-pretty-code";
import "@/shared/styles/markdown.css";

type PostBodyProps = {
  content: string;
};

const PostBody = ({ content }: PostBodyProps) => {
  return (
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
  );
};

export default PostBody;

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
    return <h4 className="mt-4 text-lg font-semibold">{children}</h4>;
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
