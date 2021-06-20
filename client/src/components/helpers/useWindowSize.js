import React from "react";

export default function useWindowSize() {
  const  viewport= typeof window !== "undefined";
  const [windowSize, setWindowSize] = React.useState({
    width: viewport ? 1200 : window.innerWidth,
    height: viewport ? 800 : window.innerHeight,
  });

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  React.useEffect(() => {
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowSize;
}