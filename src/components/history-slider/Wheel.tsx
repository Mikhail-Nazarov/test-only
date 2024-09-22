import { FC, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Circle from "../../svg/circle.svg";
import MotionPathPlugin from "gsap/MotionPathPlugin";

const RADIUS = 265;

type WheelProps = {
  items: {
    id: number;
    category: string;
  }[];
  currentId: number;
  setCurrentId: (val: number) => void;
};

export const Wheel: FC<WheelProps> = ({ items, currentId, setCurrentId }) => {
  const degStep = 360 / items.length;
  const container = useRef(null);
  const q = gsap.utils.selector(container);

  useEffect(() => {
    const rotateDeg = getRotateDeg();
    q(".date-mark").forEach((mark, index) => {
      mark.style.transform = `translate(${getPointCoord(
        index,
        true,
        rotateDeg
      )}px, ${getPointCoord(index, false, rotateDeg)}px)`;
    });
  }, []);

  useGSAP(
    () => {
      gsap.registerPlugin(MotionPathPlugin);
      const rotateDeg = getRotateDeg();
      q(".date-mark").forEach((mark, index) => {
        gsap.to(mark, {
          x: getPointCoord(index, true, rotateDeg),
          y: getPointCoord(index, false, rotateDeg),
        });
      });
    },
    { dependencies: [currentId], scope: container }
  );

  const getPointCoord = (index: number, isX: boolean, rotate: number) => {
    const func = isX ? Math.cos : Math.sin;
    const radian = ((degStep * index - rotate) * Math.PI) / 180;

    return RADIUS + RADIUS * func(radian) - 28;
  };

  const getRotateDeg = () => {
    let index = 0;
    items.forEach((item, idx) => {
      if (item.id === currentId) index = idx;
    });

    return 60 + degStep * index;
  };

  return (
    <div
      ref={container}
      className="circle"
      style={{
        width: `${RADIUS * 2}px`,
        height: `${RADIUS * 2}px`,
      }}
    >
      <Circle def />
      {items.map((item, index) => (
        <div
          onClick={() => setCurrentId(item.id)}
          key={item.id}
          className={"date-mark" + (item.id === currentId ? " active" : "")}
        >
          <div className="point"></div>
          <span>{index + 1}</span>
          <label>{item.category}</label>
        </div>
      ))}
    </div>
  );
};
