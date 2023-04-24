import { Request, Response } from 'express';
import CoachService from 'service/coach';

class CoachController {
   private coachService: CoachService;

   /* Inicialização do Serviço */
   constructor() {
      this.coachService = new CoachService();
   }

   /* Buscar Todos */
   async getAll(req: Request, res: Response): Promise<void> {
      try {
         const coach = await this.coachService.getAll();
         res.status(200).json(coach);
      } catch (error) {
         res.status(500).json({ message: 'Erro ao buscar todos os coaches' });
      }
   };

   /* C - Create - Criar */
   async create (req: Request, res: Response): Promise<void>  {
      try {
         const coach = req.body;
         const newCoach = await this.coachService.create(coach);
         res.status(200).json(newCoach);
      } catch (error) {
         res.status(500).json({ message: 'Erro ao criar coach' });
      }
   };

   /* R - Read - Buscar 1 Elemento */
   async getCoachById (req: Request, res: Response): Promise<void> {
      try {
         const coach = await this.coachService.getCoachById(req.params.id);
         res.status(200).json(coach);
      } catch (error) {
         res.status(500).json({ message: `Erro ao buscar o coach: ${req.params.id}` })
      }
   };

   /* U - Update - Atualizar 1 elemento */
   async update (req: Request, res: Response): Promise<void> {
      try {
         await this.coachService.update(req.params.id,req.body);
         res.status(200).send('Coach Atualizado com sucesso');
      } catch (error) {
         res.status(500).json({ message: `Erro ao Atualizar coach: ${req.params.id}` })
      }
   };

   /* D - Delete - Deletar 1 elemento */
   async delete (req: Request, res: Response): Promise<void> {
      try {
         await this.coachService.delete(req.params.id);
         res.status(200).json({ message: `Coach com id ${req.params.id} excluído com sucesso` });
      } catch (error) {
         res.status(500).json({ message: `Erro ao Deletar coach: ${req.params.id}` })
      }
   };
}

export default CoachController;
