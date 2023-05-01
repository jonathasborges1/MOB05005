import "./styles.css";
import React from "react";

import convertMinutesToHour from "@utils/convertMinutesToHour";
import { applyMaskHour, convertNumberToDay } from "@utils/convertNumberToDay";

export interface ListDaysAndHoursProps {
  id: string;
  dayOfWeek: string;
  from: string;
  to: string;
  class_id: string;
}
interface DayHoursItemProps {
  listDaysHour: ListDaysAndHoursProps;
}

const ListDaysAndHours: React.FC<DayHoursItemProps> = ({ listDaysHour }) => {

  return (
    <div className="listdayhour" >
      <div className="dayhour">
        Disponível{" "}
        <span className="dayhourValue">
          {convertNumberToDay(parseInt(listDaysHour.dayOfWeek))}
        </span>
      </div>
      <div className="dayhour">
        Horário{" "}
        <span className="dayhourValue">
          {applyMaskHour(listDaysHour.from)}
        </span>{" "}
        até{" "}
        <span className="dayhourValue">
          {applyMaskHour(listDaysHour.to)}
        </span>
      </div>
    </div>
  );
};

export default ListDaysAndHours;
