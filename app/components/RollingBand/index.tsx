import React, { useEffect, useRef } from "react";
import styles from "./ImageScroller.module.css";

interface ImageScrollerProps {
  images: string[];
}

const ImageScroller: React.FC<ImageScrollerProps> = ({ images }) => {
  return (
    <div className="group relative flex overflow-x-hidden border-y border-stroke bg-background-secondary">
      <ul className="marqueeContainer">
        {(images ?? []).map((imageSrc) => (
          <li key={imageSrc} className="marqueeItem">
            <img src={imageSrc} alt="" />
          </li>
        ))}
      </ul>
      <ul className="marqueeReverseContainer">
        {(images ?? []).map((imageSrc) => (
          <li key={imageSrc} className="marqueeItem">
            <img src={imageSrc} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageScroller;
