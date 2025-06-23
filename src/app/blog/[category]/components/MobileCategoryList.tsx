"use client";

import IconHamburger from "@/shared/icons/IconHamburger";
import { cn } from "@/shared/utils/cn";
import { useState } from "react";
import CategoryItem from "./CategoryItem";

type MobileCategoryListProps = {
  categoryList: string[];
  currentCategory: string;
};

const MobileCategoryList = ({
  categoryList,
  currentCategory,
}: MobileCategoryListProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="relative flex border-b border-gray-300 p-2 lg:hidden">
        <IconHamburger onClick={() => setIsMenuOpen((prev) => !prev)} />
        <div
          className={cn(
            "absolute top-[calc(100%+1px)] left-0 h-[calc(100dvh-100%-56px)] w-[250px] border-x border-gray-300 bg-gray-100 transition-transform duration-300 ease-in-out",
            isMenuOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          {categoryList.map((category) => {
            return (
              <CategoryItem
                key={category}
                categoryName={category}
                currentCategory={currentCategory}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MobileCategoryList;
