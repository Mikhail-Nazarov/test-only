import { FC } from "react";

const RADIUS = 265;

type WheelProps = {
  items: {
    id: number;
    category: string;
  }[];
  currentId: number;
};

export const Wheel: FC<WheelProps> = ({ items, currentId }) => {
  const degStep = 360 / items.length;

  const getPointCoord = (index: number, isX: boolean) => {
    const func = isX ? Math.cos : Math.sin;
    const radian = degStep * index * Math.PI / 180;
    return RADIUS + RADIUS * func(radian) - 5;
  }

  return <div className="circle" style={{width: `${RADIUS * 2 }px`, height: `${RADIUS * 2 }px`}}>
    {items.map((item, index) => 
        <div key={item.id} className="point" style={{left: `${getPointCoord(index, true)}px`, top: `${getPointCoord(index, false)}px`}}></div>
    )}
  </div>;
};
