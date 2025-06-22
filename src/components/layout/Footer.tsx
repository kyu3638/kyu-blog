import GithubIcon from "@/shared/icons/IconGithub";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex h-[120px] w-full flex-col items-center justify-center gap-2 border-t border-gray-300">
      <Link href="https://github.com/kyu3638" target="_blank">
        <GithubIcon />
      </Link>
      <span className="text-center">
        Copyright {currentYear} kyu3638. All rights reserved.
      </span>
    </div>
  );
};

export default Footer;
