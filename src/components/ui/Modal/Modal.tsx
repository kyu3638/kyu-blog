"use client";

import { cloneElement, isValidElement, ReactNode, useEffect } from "react";
import useModalContext from "./useModalContext";
import CloseIcon from "@/shared/icons/IconClose";

const Trigger = <T extends React.ReactElement>({
  children,
  render,
}: {
  children: T;
  render: ReactNode;
}) => {
  const modal = useModalContext();

  if (!isValidElement(children)) {
    throw new Error("Trigger children must be a valid React element");
  }

  return cloneElement(children, {
    onClick: (e: React.MouseEvent) => {
      // 기존 onClick 호출 (있다면)
      // @ts-ignore
      const originalOnClick = (children.props as any).onClick;
      if (originalOnClick) {
        originalOnClick(e);
      }
      // 모달 열기
      modal.add(render);
    },
    style: {
      // @ts-ignore
      ...(children.props as any).style,
      cursor: "pointer",
    },
  } as Partial<T["props"]>);
};

const Overlay = ({ children }: { children: ReactNode }) => {
  const modal = useModalContext();

  useEffect(() => {
    if (modal.isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [modal.isOpen]);

  if (!modal.isOpen) return null;

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-gray-200/20">
      {children}
    </div>
  );
};

const Content = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex max-h-[90dvh] min-h-0 w-full flex-col border border-gray-400 bg-white lg:max-w-[600px]">
      {children}
    </div>
  );
};

const Header = ({ children }: { children: ReactNode }) => {
  const modal = useModalContext();

  return (
    <div className="relative p-4 lg:p-6">
      {children}
      <div className="absolute top-4 right-4" onClick={modal.remove}>
        <CloseIcon />
      </div>
    </div>
  );
};

const Body = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-h-[80dvh] flex-1 overflow-y-auto px-4 pb-4 lg:px-6 lg:pb-6">
      {children}
    </div>
  );
};

const Footer = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="px-4 pb-4 lg:px-6 lg:pb-6">{children && children}</div>
  );
};

export { Trigger, Overlay, Content, Header, Body, Footer };
