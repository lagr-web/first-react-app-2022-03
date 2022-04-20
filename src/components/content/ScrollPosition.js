import { useEffect, useState } from "react";

const ScrollPosition = () => {
    
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {

    const getPos = () => {

      const position = window.pageYOffset;
      setScrollPosition(position);

      console.log(position);
    };

    window.addEventListener("scroll", getPos);

    return () => {
      window.removeEventListener("scroll", getPos);
    };
  }, [scrollPosition]);

  return scrollPosition;
};

export default ScrollPosition;
