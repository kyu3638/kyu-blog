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
      const originalOnClick = (children.props as any).onClick;
      if (originalOnClick) {
        originalOnClick(e);
      }
      // 모달 열기
      modal.add(render);
    },
    style: {
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
  const modal = useModalContext();
  return (
    <div className="max-h-[70dvh] w-full max-w-[768px] border border-gray-400 bg-white">
      {children}
    </div>
  );
};

const Header = ({ children }: { children: ReactNode }) => {
  const modal = useModalContext();

  return (
    <div className="relative p-4">
      {children}
      <div className="absolute top-4 right-4" onClick={modal.remove}>
        <CloseIcon />
      </div>
    </div>
  );
};

const Body = ({ children }: { children: ReactNode }) => {
  return <div className="px-4 pb-4">{children}</div>;
};

const Footer = ({ children }: { children: ReactNode }) => {
  return <div className="px-4 pb-4">{children}</div>;
};

// export {
//   ModalTrigger,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
// };
export { Trigger, Overlay, Content, Header, Body, Footer };
