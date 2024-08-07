import React, { useEffect, useMemo, useRef } from "react";
import styles from "./ImageScroller.module.css";

interface ImageScrollerProps {
  images: string[];
}

const ImageScroller: React.FC<ImageScrollerProps> = ({ images }) => {
  const marqueeItems = useMemo(() => {
    return images.concat(images);
  }, [images]);
  return (
    <div className="marquee">
      <div className="marquee-content scrollMarquee">
        {marqueeItems.map((imageSrc) => (
          <li key={imageSrc} className="marqueeItem">
            <img src={imageSrc} alt="" />
          </li>
        ))}
      </div>
      <div className="marquee-content scrollMarquee">
        {marqueeItems.map((imageSrc) => (
          <li key={imageSrc} className="marqueeItem">
            <img src={imageSrc} alt="" />
          </li>
        ))}
      </div>
    </div>
  );
};

export default ImageScroller;
