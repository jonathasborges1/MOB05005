import "./styles.css";
import React, { useEffect, useState } from "react";

import whatsappIcon from "@assets/images/icons/whatsapp.svg";
import ListDaysAndHours, { ListDaysAndHoursProps } from "@components/ListDaysAndHours";
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

interface CoachItemProps {
  coach: Coach;
}

const CoachItem: React.FC<CoachItemProps> = ({ coach }) => {
  const [listDayHourCoaches, setListDayHourCoaches] = useState<ListDaysAndHoursProps[]>([]);

  async function listDays(coachid: number) {
    const response = await api.get("schedule", { // ListDaysAndHours
      params: { coachid },
    });

    setListDayHourCoaches(response.data as ListDaysAndHoursProps[]);
  }

  useEffect(() => {
    listDays(coach.id);
  }, []);


  function createNewConnection() {
    api.post("connections", {
      coach_id: coach.id,
    });
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
        {listDayHourCoaches.map((listDays: ListDaysAndHoursProps, index: number) => {
          return <ListDaysAndHours key={index} listDaysHour={listDays} />;
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
