import dayjs from "dayjs";
import Link from "next/link";
import { getFrontMatter, getMDXPathList } from "@/lib/post";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { category: currentCategory } = await params;

  const list = await getMDXPathList(
    currentCategory === "all" ? "" : currentCategory,
  );

  const frontMatterList = list.map((path) => {
    return getFrontMatter(path);
  });

  return (
    <section>
      {frontMatterList.map((frontMatter, index) => {
        return (
          <Link
            key={frontMatter.fileName}
            href={`/blog/${frontMatter.category}/${frontMatter.fileName}`}
          >
            <div className="flex cursor-pointer flex-col gap-2 border-b border-gray-300 p-4 hover:bg-gray-200 active:bg-gray-300 lg:flex-row lg:items-center lg:gap-4">
              <div className="font-fira-mono text-lg">
                {dayjs(frontMatter.writtenAt).format("YYYY.MM.DD")}
              </div>
              <div className="font-fira-mono grow text-2xl font-medium">
                {frontMatter.title}
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default CategoryPage;
