import { useEffect, useState } from "react";

export default function useWindowSize() {
  interface windowInter {
    width: number;
    height: number;
  }

  const [windowSize, setWindowSize] = useState<windowInter>({
    width: 400,
    height: 700,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
