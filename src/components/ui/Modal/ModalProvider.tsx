"use client";

import useCreateRoot from "@/shared/hooks/useCreateRoot";
import { createContext, Fragment, ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ModalType = {
  isOpen: boolean;
  add: (component: ReactNode) => void;
  remove: () => void;
  removeAll: () => void;
};

const ModalContext = createContext<ModalType | null>(null);

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalList, setModalList] = useState<ReactNode[]>([]);

  const modalRoot = useCreateRoot("modal-root");

  const isOpen = !!modalList.length;

  const add = (component: ReactNode) => {
    setModalList((prev) => [...prev, component]);
  };

  const remove = () => {
    setModalList((prev) => {
      const removed = prev.slice(0, -1);
      return removed;
    });
  };

  const removeAll = () => {
    setModalList([]);
  };

  useEffect(() => {
    const removeByEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") remove();
    };

    const handlePopState = () => {
      if (modalList.length > 0) {
        remove();
      }
    };

    if (modalList.length > 0) {
      window.history.pushState(null, "", window.location.href);
    }

    window.addEventListener("keydown", removeByEsc);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("keydown", removeByEsc);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [modalList.length]);

  return (
    <ModalContext.Provider value={{ isOpen, add, remove, removeAll }}>
      {children}
      {modalRoot &&
        createPortal(
          <>
            {modalList.map((modal, index) => (
              <Fragment key={`modal-${index}`}>{modal}</Fragment>
            ))}
          </>,
          modalRoot,
        )}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
