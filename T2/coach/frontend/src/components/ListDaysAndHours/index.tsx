import "./styles.css";
import React from "react";

import convertMinutesToHour from "@utils/convertMinutesToHour";
import convertNumberToDay from "@utils/convertNumberToDay";
import api from "@services/api";

export interface ListDaysAndHour {
  id: string;
  week_day: string;
  from: string;
  to: string;
  class_id: string;
}

interface DayHoursItemProps {
  listDaysHour: ListDaysAndHour;
}

const ListDaysAndHours: React.FC<DayHoursItemProps> = ({ listDaysHour }) => {
  const coach_id = listDaysHour.id;
  const response = api.get("ListDaysAndHours", {
    params: { coach_id },
  });

  console.log(response);
  return (
    <div className="listdayhour" >
      <div className="dayhour">
        Disponível{" "}
        <span className="dayhourValue">
          {convertNumberToDay(parseInt(listDaysHour.week_day))}
        </span>
      </div>
      <div className="dayhour">
        Horário{" "}
        <span className="dayhourValue">
          {convertMinutesToHour(parseInt(listDaysHour.from))}
        </span>{" "}
        até{" "}
        <span className="dayhourValue">
          {convertMinutesToHour(parseInt(listDaysHour.to))}
        </span>
      </div>
    </div>
  );
};

export default ListDaysAndHours;
