import { Request, Response } from 'express';
import { ICoach, coachs } from 'model/coachModel';

class CoachController {

   /* Buscar Todos */
   async getAllCoach (req: Request, res: Response): Promise<void> {
      res.json(coachs);
   };

   /* C - Create - Criar */
   async createCoach (req: Request, res: Response): Promise<void>  {
      const coach: ICoach = {
         id: Date.now(),
         name: req.body.name,
         email: req.body.email,
      };
      coachs.push(coach);
      res.status(201).json(coach);
   };

   /* R - Read - Buscar 1 Elemento */
   async getCoachById (req: Request, res: Response): Promise<void> {
      const coach = coachs.find((u) => u.id === parseInt(req.params.id));
      if (coach) {
         res.json(coach);
      } else {
         res.status(404).send('Coach not found');
      }
   };

   /* U - Update - Atualizar */
   async updateCoach (req: Request, res: Response): Promise<void> {
      const id = parseInt(req.params.id);
      const coach: ICoach = {
         id: id,
         name: req.body.name,
         email: req.body.email,
      };
      const index = coachs.findIndex((u) => u.id === id);
      if (index !== -1) {
         coachs[index] = coach;
         res.json(coach);
      } else {
         res.status(404).send('Coach not found');
      }
   };

   /* D - Delete - Excluir */
   async deleteCoach (req: Request, res: Response): Promise<void> {
      const id = parseInt(req.params.id);
      const index = coachs.findIndex((u) => u.id === id);
      if (index !== -1) {
         coachs.splice(index, 1);
         res.send('User deleted successfully');
      } else {
         res.status(404).send('Coach not found');
      }
   };
}

export default new CoachController();




//   async index(req: Request, res: Response) {
//     return res.json({ message: 'Listagem de usuários' });
//   }
//   async create(req: Request, res: Response) {
//     const { name, email } = req.body;
//     return res.json({ message: `Usuário ${name} criado com sucesso` });
//   }

//   async update(req: Request, res: Response) {
//     const { id } = req.params;
//     const { name, email } = req.body;
//     return res.json({ message: `Usuário ${id} atualizado com sucesso` });
//   }

//   async delete(req: Request, res: Response) {
//     const { id } = req.params;
//     return res.json({ message: `Usuário ${id} deletado com sucesso` });
//   }