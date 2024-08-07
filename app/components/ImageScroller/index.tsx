import { useMemo } from "react";

interface ImageScrollerProps {
  images: string[];
}

const ImageScroller: React.FC<ImageScrollerProps> = ({ images }) => {
  const marqueeItems = useMemo(() => {
    return images.concat(images);
  }, [images]);
  return (
    <div className="border-y border-stroke flex flex-row h-full">
      <div className="whitespace-nowrap flex items-center justify-center px-4 h-14 lg:h-16 border-r border-stroke shadow-sm text-[14px] lg:-text[16px]">
        Trusted by
      </div>
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
    </div>
  );
};

export default ImageScroller;
