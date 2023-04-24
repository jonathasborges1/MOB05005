import "./styles.css";
import React, { useState } from "react";

import whatsappIcon from "@assets/images/icons/whatsapp.svg";
import ListDaysAndHours from "@components/ListDaysAndHours";
import api from "@services/api";

export interface Coach {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export interface ListDaysAndHours {
  id: string;
  week_day: string;
  from: string;
  to: string;
  class_id: string;
}

interface CoachItemProps {
  coach: Coach;
}

const CoachItem: React.FC<CoachItemProps> = ({ coach }) => {
  function createNewConnection() {
    api.post("connections", {
      coach_id: coach.id,
    });
  }

  const [listDayHour, setCoaches] = useState([]);
  listDays(coach.id);
  async function listDays(coach_id: number) {
    const response = await api.get("ListDaysAndHours", {
      params: { coach_id },
    });

    setCoaches(response.data);
  }

  return (
    <article className="coach-item">
      <header>
        <img src={coach.avatar} alt={coach.name} />
        <div>
          <strong>{coach.name}</strong>
          <span>{coach.subject}</span>
        </div>
      </header>
      <p>{coach.bio}</p>
      <div className="cards-list">
        <hr></hr>
        {listDayHour.map((listDays: ListDaysAndHours) => {
          return <ListDaysAndHours listDaysHour={listDays} />;
        })}
      </div>
      <footer>
        <p>
          Preço/Hora
          <strong>R$ {coach.cost}</strong>
        </p>

        <a
          target="_blank"
          rel="noreferrer"
          onClick={createNewConnection}
          href={`https://wa.me/${coach.whatsapp}`}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default CoachItem;
