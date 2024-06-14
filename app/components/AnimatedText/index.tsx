"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

interface AnimatedTextProps {
  words: string[];
  interval?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  words,
  interval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (words.length + 1));
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval]);

  useEffect(() => {
    console.log(currentIndex, words.length);
    if (currentIndex === words.length) {
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000); // Duration of the transition to make it seamless
    }
  }, [currentIndex, words.length]);

  useEffect(() => {
    if (!isAnimating) {
      setCurrentIndex(0);
    }
  }, [isAnimating]);

  useLayoutEffect(() => {
    if (parentRef.current && childRef.current) {
      parentRef.current.style.width = `${childRef.current.offsetWidth}px`;
    }
  }, [currentIndex, words]);

  return (
    <div className="relative h-[126px] overflow-hidden" ref={parentRef}>
      <div
        ref={childRef}
        className={`absolute  duration-1000 ease-in-out h-[126px] ${
          isAnimating ? "transition-transform" : "transition-none"
        }`}
        style={{
          transform: `translateY(-${currentIndex * 100}%)`,
        }}
      >
        {[...words, words[0]].map((word, index) => (
          <div
            key={index}
            className={`h-[126px] text-[100px] text-accent-mainGreen flex items-start justify-start  duration-1000 ease-in-out whitespace-nowrap ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            } ${!isAnimating ? "transition-none" : "transition-opacity"}`}
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedText;
