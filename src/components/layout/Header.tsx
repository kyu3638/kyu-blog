"use client";

import IconGithub from "@/shared/icons/IconGithub";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/shared/utils/cn";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="z-10 flex h-[56px] w-full shrink-0 items-center border-b border-gray-300 px-4">
      <Link href={"/"}>
        <span className="font-fira-mono text-3xl font-bold">KYU</span>
      </Link>
      <div className="font-fira-mono flex grow items-center gap-4 p-16 text-xl">
        <Link
          href="/blog/all"
          className={`${cn(pathname.startsWith("/blog") ? "text-gray-800" : "text-gray-500")} font-medium`}
        >
          BLOG
        </Link>
        <Link
          href="/resume"
          className={`${cn(pathname.startsWith("/resume") ? "text-gray-800" : "text-gray-500")} font-medium`}
        >
          RESUME
        </Link>
      </div>
      <div className="flex items-center justify-end gap-4">
        <Link href="https://github.com/kyu3638" target="_blank">
          <IconGithub />
        </Link>
      </div>
    </div>
  );
};

export default Header;
