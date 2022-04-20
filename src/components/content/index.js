import React, { useEffect, useState } from "react";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";

const windowDims = () => ({
  height: window.innerHeight,
  width: window.innerWidth
});

const Content = ({ item, ms }) => {

  const [dimensions, setDimensions] = useState(windowDims());

  
  useEffect(() => {

    const handleResize = () => {

      setDimensions(windowDims());
     
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    
  }, []);

  const breakpoint = 620;
  return dimensions.width < breakpoint ? <MobileView /> : <DesktopView item ={item} ms={ms} />;
};

export default Content;
