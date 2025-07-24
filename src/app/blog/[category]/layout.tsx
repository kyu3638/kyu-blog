import React, { ReactNode } from "react";
import fs from "fs";
import path from "path";
import MobileCategoryList from "@/components/post/MobileCategoryList";
import DesktopCategoryList from "@/components/post/DesktopCategoryList";

type CategoryLayoutProps = {
  children: ReactNode;
  params: Promise<{ category: string }>;
};

const CategoryLayout = async ({ children, params }: CategoryLayoutProps) => {
  const { category: currentCategory } = await params;

  const directory = path.join(process.cwd(), "src", "contents", "posts");
  const categoryList = fs.readdirSync(directory);

  return (
    <>
      {/* Mobile */}
      <MobileCategoryList
        categoryList={["all", ...categoryList]}
        currentCategory={currentCategory}
      />
      {/* Desktop */}
      <DesktopCategoryList
        categoryList={categoryList}
        currentCategory={currentCategory}
      >
        {children}
      </DesktopCategoryList>
    </>
  );
};

export default CategoryLayout;
