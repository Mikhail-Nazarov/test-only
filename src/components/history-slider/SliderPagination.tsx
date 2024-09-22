import { FC, useEffect, useState } from "react";
import LeftArrow from "../../svg/arrow-left.svg";

type PaginationProps = {
  items: {
    id: number;
    category: string;
  }[];
  currentId: number;
  setCurrentId: (val: number) => void;
};

export const SliderPagination: FC<PaginationProps> = ({
  items,
  currentId,
  setCurrentId,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === currentId) {
        setCurrentIndex(i);
        return;
      }
    }
    throw new Error("Current index not found");
  }, [currentId]);

  const numberToString = (val: number) => {
    if (val < 10) return "0" + val;
    return val.toString();
  };

  return (
    <div className="slider-pagination">
      <div>
        <span>{`${numberToString(currentIndex + 1)}/${numberToString(
          items.length
        )}`}</span>
        <div className="buttons">
          <button
            onClick={() => setCurrentId(items[currentIndex - 1].id)}
            disabled={currentIndex <= 0}
          >
            <LeftArrow />
          </button>
          <button
            onClick={() => setCurrentId(items[currentIndex + 1].id)}
            disabled={currentIndex >= items.length - 1}
            className="right"
          >
            <LeftArrow />
          </button>
        </div>
      </div>
      <div className="points">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`point${currentId === item.id ? " active" : ""}`}
            onClick={() => setCurrentId(item.id)}
          ></div>
        ))}
      </div>
    </div>
  );
};
