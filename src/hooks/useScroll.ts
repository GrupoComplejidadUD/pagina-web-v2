import { useEffect, useState } from "react";

export function useScroll(scrollLimit = 50) {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = function () {
      if (window.scrollY < scrollLimit) {
        if (!isTop) setIsTop(true);
      } else {
        if (isTop) setIsTop(false);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [isTop]);

  return isTop;
}
