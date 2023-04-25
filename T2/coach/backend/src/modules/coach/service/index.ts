
import { ICoach, coachs } from '@modules/coach/model';
import { validateId } from '@utils/validate';

class CoachService {

   /* Buscar Todos */
   async getAll(): Promise<ICoach[]> {
     return coachs;
   };
   
   /* C - Create - Criar */
   async create (body: ICoach): Promise<ICoach>  {
      const coach: ICoach = {
         id: Date.now(),
         name: body.name,
         email: body.email,
      };
      coachs.push(coach);
      return coach;
   };

    /* R - Read - Buscar 1 Elemento */
   async getCoachById (id: string): Promise<ICoach> {
      const parsedId = validateId(id);

      const coach = coachs.find((u) => u.id === parsedId);

      if (!coach) {
         throw new Error('Coach não encontrado');
      }
      return coach;
   };

   /* U - Update - Atualizar */
   async update (id: string, coachBody: ICoach): Promise<Boolean> {

      // busca objeto Antigo a ser alterado com base no id
      const coachOldIndex = coachs.findIndex((c) => c.id === parseInt(id));

      if(coachOldIndex !== -1) {
         coachs[coachOldIndex] = coachBody;
         return true;
      }
      throw new Error("Coach not found");
   };

   /* D - Delete - Excluir */
   async delete (id: string): Promise<Boolean> {

      // busca objeto Antigo a ser alterado com base no id
      const coachIndex = coachs.findIndex((u) => u.id === parseInt(id));

      if (coachIndex !== -1) {
         coachs.splice(coachIndex, 1);
         return true;
      } else {
         throw new Error("Coach not found");
      }
   };
}

export default CoachService;
