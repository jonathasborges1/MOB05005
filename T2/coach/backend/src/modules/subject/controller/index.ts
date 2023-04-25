import 'reflect-metadata';
import { injectable } from 'inversify';
import { Request, Response } from 'express';

import SubjectService from '@modules/subject/service';

@injectable()
class SubjectController {
   private readonly subjectService: SubjectService;

   /* Inicialização do Serviço */
   constructor() {
      this.subjectService = new SubjectService();
   }

   /* Buscar Todos */
   async getAll (req: Request, res: Response): Promise<void> {
      try {
         const subject = await this.subjectService.getAll();
         res.status(200).json(subject);
      } catch (error) {
         res.status(500).json({ message: 'Erro ao buscar todos os subjects' });
      }
   };

}

export default SubjectController;