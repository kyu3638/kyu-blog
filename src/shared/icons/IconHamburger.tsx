import React from "react";
import IconWrapper from "./IconWrapper";
import { IconProps } from "./types";

const IconHamburger = ({ size = 24, title, ...props }: IconProps) => {
  return (
    <IconWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <title>{title ?? ""}</title>
        <path d="M4 12h16" />
        <path d="M4 18h16" />
        <path d="M4 6h16" />
      </svg>
    </IconWrapper>
  );
};

export default IconHamburger;
