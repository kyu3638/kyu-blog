import { ReactNode } from "react";
import CategoryItem from "./CategoryItem";
import Divider from "../ui/Divider";

const DesktopCategoryList = ({
  children,
  categoryList,
  currentCategory,
}: {
  children: ReactNode;
  categoryList: string[];
  currentCategory: string;
}) => {
  return (
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
  );
};

export default DesktopCategoryList;
