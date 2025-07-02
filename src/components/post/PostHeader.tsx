import dayjs from "dayjs";

type PostHeaderProps = {
  writtenAt: Date;
  title: string;
};

const PostHeader = ({ writtenAt, title }: PostHeaderProps) => {
  return (
    <div className="border-b border-gray-300 p-4">
      <div className="mx-auto max-w-[1000px] px-4">
        <time className="font-fira-mono inline-block pb-2 font-medium">
          {dayjs(writtenAt).format("YYYY.MM.DD")}
        </time>
        <h1 className="font-fira-mono text-3xl font-bold">{title}</h1>
      </div>
    </div>
  );
};

export default PostHeader;
