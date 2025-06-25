import IconGithub from "@/shared/icons/IconGithub";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="z-10 flex h-[56px] w-full shrink-0 items-center border-b border-gray-300 px-4">
      <Link href={"/"}>
        <span className="font-fira-mono text-3xl font-bold">KYU</span>
      </Link>
      <div className="flex grow items-center justify-end gap-4">
        <Link href="https://github.com/kyu3638" target="_blank">
          <IconGithub />
        </Link>
      </div>
    </div>
  );
};

export default Header;
