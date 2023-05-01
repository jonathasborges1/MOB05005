import 'reflect-metadata';
import { injectable } from 'inversify';
import { Request, Response } from 'express';

import CoachService from '@modules/coach/service';
import { QueryParams } from '@modules/coach/model';



@injectable()
class CoachController {
   private readonly coachService: CoachService;

   /* Inicialização do Serviço */
   constructor() {
      this.coachService = new CoachService();
   }

  /* Buscar Todos */
  async findAll (req: Request, res: Response): Promise<void> {
   try {
      const { subject, dayOfWeek, time } = req.query;
      let coaches;

      if (!subject && !dayOfWeek && !time) {
         coaches = await this.coachService.findAll();
       } else {
         /* Filtro por parâmetros */
         const where: QueryParams = {};

         if (subject) {
            const subjectList = Array.isArray(subject) ? subject : [subject];
            where.subject = subjectList as string[];
         }

         if (dayOfWeek) {
            const dayOfWeekList = Array.isArray(dayOfWeek) ? dayOfWeek : [dayOfWeek];
            where.dayOfWeek = dayOfWeekList as string[];
         }

         if (time) {
            const timeList = Array.isArray(time) ? time : [time];
            where.time = timeList as string[];
         }

         coaches = await this.coachService.getAvailableCoaches(where);
       }

      res.status(200).json(coaches);
   } catch (error) {
      console.info("[Info]: ", error);
      res.status(500).json({ message: 'Erro ao buscar todos os coaches' });
   }
  };

   /* Buscar Todos */
   // async getAll (req: Request, res: Response): Promise<void> {
   //    try {
   //       const filters = req.query;
   //       if ((!filters.week_day) || (!filters.subject) || (!filters.time)) {
   //          const coaches = await this.coachService.findAll();
   //          res.status(200).json(coaches);
   //       }
   //       const coaches = await this.coachService.getAll(filters);
   //       res.status(200).json(coaches);
   //    } catch (error) {
   //       console.info("[Info]: ", error);
   //       res.status(500).json({ message: 'Erro ao buscar todos os coaches' });
   //    }
   // };

   // /* C - Create - Criar */
   // async create (req: Request, res: Response): Promise<void>  {
   //    try {
   //       const coach = req.body;
   //       const newCoach = await this.coachService.create(coach);
   //       res.status(200).json(newCoach);
   //    } catch (error) {
   //       res.status(500).json({ message: 'Erro ao criar coach' });
   //    }
   // };

   // /* R - Read - Buscar 1 Elemento */
   // async getCoachById (req: Request, res: Response): Promise<void> {
   //    try {
   //       const coach = await this.coachService.getCoachById(req.params.id);
   //       res.status(200).json(coach);
   //    } catch (error) {
   //       res.status(500).json({ message: `Erro ao buscar o coach: ${req.params.id}` })
   //    }
   // };

   // /* U - Update - Atualizar 1 elemento */
   // async update (req: Request, res: Response): Promise<void> {
   //    try {
   //       await this.coachService.update(req.params.id,req.body);
   //       res.status(200).send('Coach Atualizado com sucesso');
   //    } catch (error) {
   //       res.status(500).json({ message: `Erro ao Atualizar coach: ${req.params.id}` })
   //    }
   // };

   // /* D - Delete - Deletar 1 elemento */
   // async delete (req: Request, res: Response): Promise<void> {
   //    try {
   //       await this.coachService.delete(req.params.id);
   //       res.status(200).json({ message: `Coach com id ${req.params.id} excluído com sucesso` });
   //    } catch (error) {
   //       res.status(500).json({ message: `Erro ao Deletar coach: ${req.params.id}` })
   //    }
   // };
}

export default CoachController;
