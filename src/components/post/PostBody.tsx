import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import fs from "fs";
import rehypePrettyCode from "rehype-pretty-code";
import "@/shared/styles/markdown.css";
import rehypeSlug from "rehype-slug";

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
            rehypeSlug,
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
  h1: ({ children, id }) => {
    return (
      <h1 id={id} className="mt-4 text-3xl font-semibold">
        {children}
      </h1>
    );
  },
  h2: ({ children, id }) => {
    return (
      <h2 id={id} className="mt-4 text-2xl font-semibold">
        {children}
      </h2>
    );
  },
  h3: ({ children, id }) => {
    return (
      <h3 id={id} className="mt-4 text-xl font-semibold">
        {children}
      </h3>
    );
  },
  h4: ({ children, id }) => {
    return (
      <h4 id={id} className="mt-4 text-lg font-semibold">
        {children}
      </h4>
    );
  },
  a: ({ href, children }) => {
    return (
      <a href={href} target="_blank" className="text-blue-600 hover:underline">
        {children}
      </a>
    );
  },
  ol: ({ children }) => {
    return (
      <ol className="flex list-decimal flex-col gap-y-2 pl-8 leading-loose">
        {children}
      </ol>
    );
  },
  ul: ({ children }) => {
    return (
      <ul className="flex list-disc flex-col gap-y-2 pl-8 leading-loose">
        {children}
      </ul>
    );
  },
  hr: () => {
    return <hr className="my-2 border-gray-400" />;
  },
  p: ({ children }) => {
    return <p className="my-2 leading-loose break-keep">{children}</p>;
  },
  blockquote: ({ children }) => {
    return (
      <blockquote className="my-3 rounded-md border border-gray-300 bg-blue-100 p-2">
        {children}
      </blockquote>
    );
  },
  img: ({ src, alt, ...rest }) => {
    return <img src={src} alt={alt} className="pt-4" {...rest} />;
  },
};
