"use client";
import { Fragment, useEffect, useMemo, useState } from "react";
import Github from "../Icons/GitHub";
import Globe from "../Icons/Globe";
import ExpandRight from "../Icons/ExpandRight";
import Donut from "../Icons/donut";
import cn from "classnames";

interface CardProps {
  title?: string;
  desc?: string;
  donut?: boolean;
  github?: string;
  live?: string;
  titleLogo?: React.ReactNode;
  id?: string;
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
  const setTranslateXSafely = (value: number) => {
    //check if new value is not equal to current value
    if (value !== translateX) setTranslateX(value);
  };

  const updateTranslateX = () => {
    const width = window.innerWidth;
    setTranslateXSafely(
      width < 768
        ? 180
        : width < 1024
        ? 360
        : width < 1280
        ? 480
        : width < 1536
        ? 540
        : 600
    );
  };

  useEffect(() => {
    updateTranslateX();
    window.addEventListener("resize", updateTranslateX);
    return () => window.removeEventListener("resize", updateTranslateX);
  }, []);

  const getStyles = useMemo(() => {
    return (index: number) => {
      const totalSlides = data.length;
      const leftIndex = (activeSlide - 1 + totalSlides) % totalSlides;
      const rightIndex = (activeSlide + 1) % totalSlides;
      const behindIndex = (activeSlide + 2) % totalSlides;

      if (activeSlide === index) {
        return {
          transform: `translate3d(0px, 0px, 0px) rotateY(0deg)`,
          zIndex: 10,
        };
      } else if (leftIndex === index) {
        return {
          transform: `translate3d(-${translateX}px, 0px, -400px) rotateY(35deg)`,
          zIndex: 9,
        };
      } else if (rightIndex === index) {
        return {
          transform: `translate3d(${translateX}px, 0px, -400px) rotateY(-35deg)`,
          zIndex: 9,
        };
      } else if (behindIndex === index) {
        return {
          transform: `translate3d(0px, 0px, -500px) rotateY(0deg)`,
          zIndex: 8,
        };
      } else {
        return {
          transform: `translate3d(${
            translateX * 2
          }px, 0px, -500px) rotateY(-35deg)`,
          zIndex: 7,
        };
      }
    };
  }, [activeSlide, translateX, data]);

  return (
    <>
      {/* carousel */}
      <div className="slideC">
        {data.map((item, i) => (
          <Fragment key={i}>
            <div
              className={`slide ${activeSlide === i ? "active" : ""} `}
              style={{
                ...getStyles(i),
              }}
            >
              <SliderContent {...item} />
            </div>
            <div
              className={cn(
                {
                  active: activeSlide === i,
                },
                "reflection"
              )}
              style={{
                ...getStyles(i),
              }}
            />
          </Fragment>
        ))}
      </div>
      {/* carousel */}

      <div className="btns">
        <button onClick={prev} id="ga-portfolio-prev">
          <ExpandRight className="rotate-180" />
        </button>
        <button onClick={next} id="ga-portfolio-next">
          <ExpandRight />
        </button>
      </div>
    </>
  );
}

const SliderContent = (props: CardProps) => {
  return (
    <div className={`sliderContent `}>
      <div className="flex flex-row gap-4 w-full items-center justify-center lg:justify-start">
        <div className="">{props.titleLogo}</div>
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
            id={props.id ? props.id + "-live" : ""}
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
            id={props.id ? props.id + "-github" : ""}
          >
            <Github className="w-5 h-5" />
          </a>
        )}
      </div>
      {props.donut && <Donut className="sliderDonut" />}
    </div>
  );
};
