import { useEffect, useState } from "react";
export default (el: HTMLElement): boolean => {
  const [isVisible, setIsVisible] = useState(false);
  const fn = ([entry]) => {
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const watch = new IntersectionObserver(fn);
    if (el) {
      if (el) {
        watch.observe(el);
      }
      return () => watch.unobserve(el);
    }
  }, [el]);

  return isVisible;
};
