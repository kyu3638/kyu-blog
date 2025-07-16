import { Project as ProjectType } from "@/config/types/resume";
import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="-mb-4 grid grid-cols-1 border-r border-l border-gray-300 pt-4 pb-4 text-sm lg:grid-cols-2 [&>*]:border-b [&>*:nth-child(-n+1)]:border-t lg:[&>*:nth-child(-n+2)]:border-t lg:[&>*:nth-child(odd)]:border-r">
      {children}
    </div>
  );
};

const Item = ({ title, description, skillList }: ProjectType) => {
  return (
    <div className="flex flex-col gap-y-1.5 border-gray-300 p-4">
      <h3 className="text-lg font-bold">{title}</h3>
      <div>{description}</div>
      <div className="flex flex-wrap gap-2">
        {skillList.map((skill) => {
          return (
            <span
              key={skill}
              className="font-fira-mono border border-gray-300 px-1.5 py-0.5 text-xs font-medium"
            >
              {skill}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export const Project = { Container, Item };
