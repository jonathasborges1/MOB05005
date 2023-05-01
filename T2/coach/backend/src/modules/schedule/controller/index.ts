import 'reflect-metadata';
import { injectable } from 'inversify';
import { Request, Response } from 'express';

import ScheduleService from '@modules/schedule/service';

@injectable()
class ScheduleController {
   private readonly scheduleService: ScheduleService;

   /* Inicialização do Serviço */
   constructor() {
      this.scheduleService = new ScheduleService();
   }
   
   /* Buscar por ID */
   async findById (req: Request, res: Response): Promise<void> {
      try {
         const { coachid } = req.query;
         console.log("schedule - findById - ", coachid);
         if(coachid){
            const schedules = await this.scheduleService.getCoachScheduleById(coachid as string);
            res.status(200).json(schedules);
         }else{
            throw new Error("Ausencia de id no paramatro da requisicao");
         }
      
      } catch (error) {
         console.info("[Info]: ", error);
         res.status(500).json({ message: 'Erro ao buscar todos os schedules' });
      }
   };
}

export default ScheduleController;