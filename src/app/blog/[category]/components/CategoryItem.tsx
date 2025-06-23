import { cn } from "@/shared/utils/cn";
import Link from "next/link";
import React from "react";

type CategoryItemProps = {
  categoryName: string;
  currentCategory: string;
};

const CategoryItem = ({ categoryName, currentCategory }: CategoryItemProps) => {
  return (
    <Link href={`/blog/${categoryName}`}>
      <div
        className={cn(
          "font-fira-mono cursor-pointer border-b border-gray-300 p-4 text-xl font-medium hover:bg-gray-200 hover:font-bold",
          currentCategory === categoryName ? "bg-gray-200 font-bold" : "",
        )}
      >
        {categoryName.toUpperCase()}
      </div>
    </Link>
  );
};

export default CategoryItem;
