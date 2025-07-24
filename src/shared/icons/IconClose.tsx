import IconWrapper from "./IconWrapper";
import { IconProps } from "./types";

const CloseIcon = ({ size = 24, title, ...props }: IconProps) => {
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
        className="lucide lucide-x-icon lucide-x"
        {...props}
      >
        <title>{title ?? ""}</title>
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </IconWrapper>
  );
};

export default CloseIcon;
