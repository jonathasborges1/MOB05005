import { Request, Response } from 'express';
import { allSubjects } from 'model/subject';

class CoachController {

   /* Buscar Todos */
   async getAll (req: Request, res: Response): Promise<void> {
      res.json(allSubjects);
   };

}

export default new CoachController();