import { FC, useState } from "react";
import { ITimeInterval } from "../../../typings/types";
import { historyData } from "../../helpers/history-events";
import '../../styles/history-slider.scss'
import { TimeInterval } from "./TimeInterval";
import { Wheel } from "./Wheel";

export const HistorySlider: FC = () => {
    const [currentInterval, setCurrentInterval] = useState<ITimeInterval>(historyData[0]);
    return (
        <div className="history-slider">
            <div className="interval-wrapper">
                {/* <TimeInterval startDate={currentInterval.years[0]} endDate={currentInterval.years[1]}/> */}
                <Wheel currentId={currentInterval.id} items={historyData}/>
            </div>
        </div>
    )
}