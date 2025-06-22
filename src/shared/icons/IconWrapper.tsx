import React, { ReactNode } from "react";

type IconWrapperProps = {
  children: ReactNode;
};

const IconWrapper = ({ children }: IconWrapperProps) => {
  return (
    <div className="p-1 hover:bg-gray-300/50 rounded-md cursor-pointer">
      {children}
    </div>
  );
};

export default IconWrapper;
