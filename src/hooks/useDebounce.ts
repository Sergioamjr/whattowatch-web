import { useEffect, useRef, useState } from "react";
import { FixMeLater } from "types/common";

const delayToFetch = 1000;

type Params = {
  toWatch: (string | number)[];
  fn: (s: FixMeLater) => void;
  callAtfirstRender?: boolean;
};

export const useDebounce = ({
  toWatch,
  fn,
  callAtfirstRender = false,
}: Params): void => {
  const [ignoreCall, setIgnoreCall] = useState(!callAtfirstRender);
  const fetchRef = useRef<number>(null);

  useEffect(() => {
    if (ignoreCall) {
      return setIgnoreCall(false);
    }
    clearTimeout(fetchRef.current);
    fetchRef.current = window.setTimeout(fn, delayToFetch);
    return () => clearTimeout(fetchRef.current);
  }, toWatch);
};
