import './styles.css';
import { FormEvent, useState } from 'react';

import PageHeader from '@components/PageHeader';
import Select from '@components/Select';
import Input from '@components/Input';

import CoachItem, { Coach } from '@components/CoachItem';
import api from '@services/api';
import React from 'react';

function CoachList() {
  const [coaches, setCoaches] = useState([]);
  const [subject, setSubject ] = useState([]);
  const [subjectSelected, setSubjectSelected] = useState('');

  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function searchCoaches(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('coachs', {
      params: {
        subject,
        week_day,
        time,
      }
    });

    setCoaches(response.data);
  }

  const getAllCoachs = React.useCallback( async() => {
    const responseCoachs = await api.get('coachs',{});
    console.info(responseCoachs)
    setCoaches(responseCoachs.data);
  }, [] );

  const getAllSubjects = React.useCallback( async() => {
    const responseSubjects = await api.get('subjects',{});
    setSubject(responseSubjects.data);
  }, [] );

  React.useEffect(() => {
    getAllCoachs();
    getAllSubjects();
  },[getAllCoachs, getAllSubjects])

  return (
    <div id="page-coach-list" className="container">
      <PageHeader title="Estes são os coachs disponíveis.">
        <form id="search-coaches" onSubmit={searchCoaches}>
          <Select 
            name="subject" 
            label="Matéria" 
            value={subjectSelected}
            onChange={e => { setSubjectSelected(e.target.value) }}
            options={subject.map( (sub) => sub )}
          />

          <Select 
            name="week_day" 
            label="Dia da semana" 
            value={week_day}
            onChange={e => { setWeekDay(e.target.value) }}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />
          
          <Input 
            type="time" 
            name="time" 
            label="Hora" 
            value={time}
            onChange={e => { setTime(e.target.value) }}
          />

          <button type="submit">
            Buscar
          </button>
        </form>
      </PageHeader>

      <main>
        {coaches.map((coach: Coach) => {
          return <CoachItem key={coach.id} coach={coach} />;
        })}
      </main>
    </div>
  );
}

export default CoachList;