
import QueryString from 'qs';
import { Op } from 'sequelize';

import { ICoach, QueryParams, initCoachs } from '@modules/coach/model';
import  CoachSchedule  from '@database/models/schedule';
import { convertHourToMinutes } from '@utils/index';
import { validateId } from '@utils/validate';
import Coach from '@database/models/coach';

class CoachService {

   /* Buscar Todos os coachs do banco de dados */
   async findAll(): Promise<ICoach[]> {
      const coaches = await Coach.findAll()
      console.info("[debug]:[findAll]: ", coaches);
      return coaches;
   };

   /* Buscar Coach com base nos horarios disponiveis */
   async getAvailableCoaches(filters?: QueryParams): Promise<ICoach[]>{
      const { subject, dayOfWeek, time } = filters;

      const where = subject ? { subject } : {};

      if (subject) {
         where.subject = subject;
      }

      let include = {
         model: CoachSchedule,
         where: {} as any,
         required: true,
       };

       if (dayOfWeek) {
         include.where.dayOfWeek = dayOfWeek;
       }

      if (time) {
         const timeInMinutes = convertHourToMinutes(time.toString());
         include.where.from = { [Op.lte]: timeInMinutes };
         include.where.to = { [Op.gte]: timeInMinutes };
      }

      const coaches = await Coach.findAll({ where, include, });

      return coaches;
   }

   /* Buscar Todos */
   async getAll(filters?: QueryString.ParsedQs): Promise<ICoach[]> {

      const week_day = filters.week_day as string;
      const subject = filters.subject as string;
      const time = filters.time as string;

      // Se nao tiver filtros, retorna todos
      if ((!filters.week_day) || (!filters.subject) || (!filters.time)) {
         // throw new Error("Missing filters to search classes");
         return initCoachs;
      }

      const timeInMinutes = convertHourToMinutes(time);

     return initCoachs;
   };
   
   // /* C - Create - Criar */
   // async create (body: ICoach): Promise<ICoach>  {
   //    const coach: ICoach = {
   //       id: Date.now(),
   //       name: body.name,
   //       email: body.email,
   //    };
   //    coachs.push(coach);
   //    return coach;
   // };

   //  /* R - Read - Buscar 1 Elemento */
   // async getCoachById (id: string): Promise<ICoach> {
   //    const parsedId = validateId(id);

   //    const coach = coachs.find((u) => u.id === parsedId);

   //    if (!coach) {
   //       throw new Error('Coach não encontrado');
   //    }
   //    return coach;
   // };

   // /* U - Update - Atualizar */
   // async update (id: string, coachBody: ICoach): Promise<Boolean> {

   //    // busca objeto Antigo a ser alterado com base no id
   //    const coachOldIndex = coachs.findIndex((c) => c.id === parseInt(id));

   //    if(coachOldIndex !== -1) {
   //       coachs[coachOldIndex] = coachBody;
   //       return true;
   //    }
   //    throw new Error("Coach not found");
   // };

   // /* D - Delete - Excluir */
   // async delete (id: string): Promise<Boolean> {

   //    // busca objeto Antigo a ser alterado com base no id
   //    const coachIndex = coachs.findIndex((u) => u.id === parseInt(id));

   //    if (coachIndex !== -1) {
   //       coachs.splice(coachIndex, 1);
   //       return true;
   //    } else {
   //       throw new Error("Coach not found");
   //    }
   // };
}

export default CoachService;
