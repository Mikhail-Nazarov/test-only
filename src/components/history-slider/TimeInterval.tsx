import { FC } from "react";

type IntervalProps = {
    startDate: number;
    endDate: number;
}

export const TimeInterval: FC<IntervalProps> = ({startDate, endDate}) => {
    return <div className="time-interval">
        <h2 className="time-interval__date start-date">{startDate}</h2>
        <h2 className="time-interval__date end-date">{endDate}</h2>
    </div>
}