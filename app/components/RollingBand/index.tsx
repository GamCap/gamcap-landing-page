import React, { useEffect, useRef } from "react";
import styles from "./ImageScroller.module.css";

interface ImageScrollerProps {
  images: string[];
}

const ImageScroller: React.FC<ImageScrollerProps> = ({ images }) => {
  return (
    <div className="group relative flex overflow-x-hidden border-y border-stroke bg-background-secondary">
      <ul className="animate-marquee py-2 md:py-4 lg:py-6 whitespace-nowrap group-hover:pause-animation flex">
        {(images ?? []).map((imageSrc) => (
          <li
            key={imageSrc}
            className="inline-block px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12"
          >
            <img
              src={imageSrc}
              alt=""
              className="h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 2xl:h-16 w-auto brightness-0 invert"
            />
          </li>
        ))}
      </ul>
      <ul className="animate-marquee-reverse py-2 md:py-4 lg:py-6 whitespace-nowrap group-hover:pause-animation absolute top-0 flex">
        {(images ?? []).map((imageSrc) => (
          <li
            key={imageSrc}
            className="inline-block px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12"
          >
            <img
              src={imageSrc}
              alt=""
              className="h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 2xl:h-16 w-auto brightness-0 invert"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageScroller;
