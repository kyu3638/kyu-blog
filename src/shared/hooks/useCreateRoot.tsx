"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const useCreateRoot = (rootId: string) => {
  const [root, setRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let element = document.getElementById(rootId);
    if (!element) {
      element = document.createElement("div");
      element.id = rootId;

      document.body.appendChild(element);
    }

    setRoot(element);

    return () => {
      const removeRoot = document.getElementById(rootId);
      if (removeRoot && removeRoot.parentNode) {
        removeRoot.parentNode.removeChild(removeRoot);
      }
      setRoot(null);
    };
  }, [rootId]);

  return root;
};

export default useCreateRoot;
