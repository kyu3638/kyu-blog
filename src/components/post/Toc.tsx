import { TOCItem } from "@/config/types";
import Link from "next/link";

type TOCProps = { toc: TOCItem[] };

const Toc = ({ toc }: TOCProps) => {
  if (toc.length === 0) return null;

  return (
    <div className="border-b border-gray-300">
      <div className="mx-auto flex max-w-[1000px] flex-col p-4">
        {toc.map((item, index) => {
          return (
            <div key={`toc-${index}`} className={`pl-${item.indent * 4}`}>
              <Link
                className="font-fira-mono text-sm text-gray-700 hover:underline"
                href={item.link}
              >
                {item.text}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Toc;
