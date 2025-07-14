export type FrontMatter = {
  title: string;
  writtenAt: Date;
  fileName: string;
  category: string;
};

export type TOCItem = {
  text: string;
  link: string;
  indent: number;
};
