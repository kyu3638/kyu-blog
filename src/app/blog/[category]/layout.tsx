import React, { ReactNode } from "react";
import fs from "fs";
import path from "path";
import MobileCategoryList from "./components/MobileCategoryList";
import CategoryItem from "./components/CategoryItem";
import Divider from "@/components/ui/Divider";

type CategoryLayoutProps = {
  children: ReactNode;
  params: Promise<{ category: string }>;
};

const CategoryLayout = async ({ children, params }: CategoryLayoutProps) => {
  const { category: currentCategory } = await params;

  const directory = path.join(process.cwd(), "src", "contents");
  const categoryList = fs.readdirSync(directory);

  return (
    <>
      {/* Mobile */}
      <MobileCategoryList
        categoryList={["all", ...categoryList]}
        currentCategory={currentCategory}
      />
      {/* PC */}
      <div className="h-full min-h-0 lg:grid lg:grid-cols-[250px_37px_1fr_37px]">
        <section className="max-lg:hidden">
          {["all", ...categoryList].map((category) => {
            return (
              <CategoryItem
                key={category}
                categoryName={category}
                currentCategory={currentCategory}
              />
            );
          })}
        </section>
        <Divider />
        {children}
        <Divider />
      </div>
    </>
  );
};

export default CategoryLayout;
