import { FC, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type IntervalProps = {
  startDate: number;
  endDate: number;
};

export const TimeInterval: FC<IntervalProps> = ({ startDate, endDate }) => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".start-date",
        { innerText: (startDate - 50).toString() },
        {
          innerText: startDate.toString(),
          snap: { innerText: 1 },
        }
      );
      gsap.fromTo(
        ".end-date",
        { innerText: (endDate - 50).toString() },
        {
          innerText: endDate.toString(),
          snap: { innerText: 1 },
        }
      );
    },
    { dependencies: [startDate, endDate], scope: container }
  );

  return (
    <div className="time-interval" ref={container}>
      <h2 className="time-interval__date start-date">{startDate}</h2>
      <h2 className="time-interval__date end-date">{endDate}</h2>
    </div>
  );
};
