"use client";
import { motion } from "framer-motion";
import { Fragment, useEffect, useMemo, useState } from "react";
import Github from "../Icons/GitHub";
import Globe from "../Icons/Globe";
import ExpandRight from "../Icons/ExpandRight";
import Donut from "../Icons/donut";

interface CardProps {
  title?: string;
  desc?: string;
  donut?: boolean;
  github?: string;
  live?: string;
  titleLogo?: React.ReactNode;
}

interface SliderProps {
  data: CardProps[];
  activeSlide: number;
  setActiveSlide: (index: number) => void;
}

export default function Slider({
  activeSlide,
  setActiveSlide,
  data,
}: SliderProps) {
  const next = () => setActiveSlide((activeSlide + 1) % data.length);
  const prev = () =>
    setActiveSlide((activeSlide - 1 + data.length) % data.length);
  const [translateX, setTranslateX] = useState(360);

  const updateTranslateX = () => {
    if (window === undefined) return;
    const width = window.innerWidth;
    if (width < 768) setTranslateX(180);
    else if (width < 1024) setTranslateX(360);
    else if (width < 1280) setTranslateX(480);
    else if (width < 1536) setTranslateX(540);
    else setTranslateX(600);
  };

  useEffect(() => {
    updateTranslateX();
    window.addEventListener("resize", updateTranslateX);
    return () => window.removeEventListener("resize", updateTranslateX);
  }, []);

  const getStyles = useMemo(
    () => (index: number) => {
      const totalSlides = data.length;
      const leftIndex = (activeSlide - 1 + totalSlides) % totalSlides;
      const rightIndex = (activeSlide + 1) % totalSlides;
      const behindIndex = (activeSlide + 2) % totalSlides;

      if (activeSlide === index)
        return {
          opacity: 1,
          transform: `translateX(0px) translateZ(0px) rotateY(0deg)`,
          zIndex: 10,
        };
      else if (leftIndex === index)
        return {
          opacity: 1,
          transform: `translateX(-${translateX}px) translateZ(-400px) rotateY(35deg)`,
          zIndex: 9,
        };
      else if (rightIndex === index)
        return {
          opacity: 1,
          transform: `translateX(${translateX}px) translateZ(-400px) rotateY(-35deg)`,
          zIndex: 9,
        };
      else if (behindIndex === index)
        return {
          opacity: 1,
          transform: `translateX(0px) translateZ(-500px) rotateY(0deg)`,
          zIndex: 8,
        };
      else
        return {
          opacity: 0,
          transform: `translateX(${
            translateX * 2
          }px) translateZ(-500px) rotateY(-35deg)`,
          zIndex: 7,
        };
    },
    [activeSlide, translateX, data]
  );

  return (
    <>
      {/* carousel */}
      <div className="slideC">
        {data.map((item, i) => (
          <Fragment key={i}>
            <motion.div
              initial={{
                opacity: 0,
                transform: getStyles(i)?.transform + " translateY(100%)",
              }}
              animate={{
                opacity: 1,
                transform: getStyles(i)?.transform + " translateY(0%)",
              }}
              transition={{
                duration: 0.5,
              }}
              className={`slide ${activeSlide === i ? "active" : ""} `}
              style={{
                ...getStyles(i),
              }}
            >
              <SliderContent {...item} />
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                transform: getStyles(i)?.transform + " translateY(100%)",
              }}
              animate={{
                opacity: 0.25,
                transform: getStyles(i)?.transform + " translateY(0%)",
              }}
              transition={{
                duration: 0.5,
              }}
              className={`reflection ${activeSlide === i ? "active" : ""} `}
              style={{
                ...getStyles(i),
              }}
            />
          </Fragment>
        ))}
      </div>
      {/* carousel */}

      <div className="btns">
        <button onClick={prev}>
          <ExpandRight className="rotate-180" />
        </button>
        <button onClick={next}>
          <ExpandRight />
        </button>
      </div>
    </>
  );
}

const SliderContent = (props: CardProps) => {
  return (
    <div className={`sliderContent`}>
      <div className="flex flex-row gap-4">
        {props.titleLogo}
        <p className=" text-[14px]">{props.title}</p>
      </div>
      <p className=" text-[12px]">{props.desc}</p>
      <div className="flex flex-row items-end justify-end gap-4 w-full grow">
        {props.live && (
          <a
            href={props.live}
            target="_blank"
            rel="noreferrer"
            title="Go to Live Site"
          >
            <Globe className="w-5 h-5" />
          </a>
        )}
        {props.github && (
          <a
            href={props.github}
            target="_blank"
            rel="noreferrer"
            title="See on GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        )}
      </div>
      {props.donut && <Donut className="sliderDonut" />}
    </div>
  );
};
