import { FC, useState } from "react";
import { ITimeInterval } from "../../../typings/types";
import { historyData } from "../../helpers/history-events";
import "../../styles/history-slider.scss";
import { TimeInterval } from "./TimeInterval";
import { Wheel } from "./Wheel";
import { SliderPagination } from "./SliderPagination";
import { Slider } from "../UI/Slider";

export const HistorySlider: FC = () => {
  const [currentInterval, setCurrentInterval] = useState<ITimeInterval>(
    historyData[0]
  );

  const setCurrentId = (id: number) => {
    const interval = historyData.find((item) => item.id === id);
    if (!interval) throw new Error(`the interval with id=${id} was not found`);
    setCurrentInterval(interval);
  };

  return (
    <div className="history-slider">
      <h1>Исторические даты</h1>
      <div className="interval-wrapper">
        <TimeInterval
          startDate={currentInterval.years[0]}
          endDate={currentInterval.years[1]}
        />
        <Wheel
          currentId={currentInterval.id}
          items={historyData}
          setCurrentId={setCurrentId}
        />
      </div>
      <SliderPagination
        currentId={currentInterval.id}
        items={historyData}
        setCurrentId={setCurrentId}
      />
      <Slider
        items={currentInterval.events.map((event) => (
          <div className="history-event" key={event.id}>
            <h3>{event.year}</h3>
            <p>{event.body}</p>
          </div>
        ))}
      />
    </div>
  );
};
