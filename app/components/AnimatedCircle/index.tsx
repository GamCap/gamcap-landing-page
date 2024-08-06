import React, { useEffect, useRef, useState } from "react";

interface AnimatedCircleProps {
  radiusX: number;
  radiusY: number;
  speed: number;
  className: string;
  initialXDivider: number;
  initialYDivider: number;
  tiltAngle?: number;
  minScale?: number;
  maxScale?: number;
  scaleSpeed?: number;
  parent: React.RefObject<HTMLDivElement>;
}

const AnimatedCircle: React.FC<AnimatedCircleProps> = ({
  radiusX,
  radiusY,
  speed,
  className,
  initialXDivider,
  initialYDivider,
  tiltAngle = 0,
  minScale = 1,
  maxScale = 1,
  scaleSpeed = 0.005,
  parent,
}) => {
  const circleRef = useRef<HTMLDivElement>(null);
  const [center, setCenter] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateCenter = () => {
      setCenter({
        x: parent.current?.offsetWidth
          ? parent.current.offsetWidth / initialXDivider
          : window.innerWidth / initialXDivider,
        y: parent.current?.offsetHeight
          ? parent.current.offsetHeight / initialYDivider
          : window.innerHeight / initialYDivider,
      });
    };

    updateCenter();
    window.addEventListener("resize", updateCenter);
    return () => window.removeEventListener("resize", updateCenter);
  }, [initialXDivider, initialYDivider, parent]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const circle = circleRef.current;
    let angle = 0;
    let scale = minScale;
    let scaleDirection = 1;

    const animate = () => {
      if (circle) {
        angle = (angle + speed) % (2 * Math.PI);
        const x = radiusX * Math.cos(angle);
        const y = radiusY * Math.sin(angle);

        const radians = (tiltAngle * Math.PI) / 180;
        const rotatedX = x * Math.cos(radians) - y * Math.sin(radians);
        const rotatedY = x * Math.sin(radians) + y * Math.cos(radians);

        scale += scaleSpeed * scaleDirection;
        if (scale >= maxScale || scale <= minScale) {
          scaleDirection *= -1;
        }

        circle.style.transform = `translate3d(${rotatedX}px, ${rotatedY}px, 0) scale(${scale})`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, [radiusX, radiusY, speed, tiltAngle, minScale, maxScale, scaleSpeed]);

  return (
    <div
      ref={circleRef}
      className={`absolute rounded-full ${className}`}
      style={{
        top: center.y,
        left: center.x,
      }}
    ></div>
  );
};

export { AnimatedCircle };
