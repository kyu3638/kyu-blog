import React from "react";
import IconWrapper from "./IconWrapper";
import { IconProps } from "./types";

const IconDarkMode = ({ size = 24, title, ...props }: IconProps) => {
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
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    </IconWrapper>
  );
};

export default IconDarkMode;
