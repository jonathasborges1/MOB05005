import CoachSchedule from "@database/models/schedule";
import { ICoachSchedule } from "@modules/schedule/model";
import { validateUUID } from "@utils/validate";

class ScheduleService {
   /* R - Read - Buscar 1 Elemento */
   async getCoachScheduleById (coachId: string): Promise<ICoachSchedule[]> {
      const validateId = validateUUID(coachId);
      console.log("getCoachScheduleById -> validateId -> " , validateId)
      if(!validateId){
         throw new Error("UUID invalido");
      }
      const scheduleCoach = await CoachSchedule.findAll(
         {
            where: {
              coachId: coachId,
            },
         }
      );

      console.log("getCoachScheduleById -> scheduleCoach -> " , scheduleCoach)

      if (!scheduleCoach) {
         throw new Error('Coach não encontrado');
      }

      return scheduleCoach;
   };
}

export default ScheduleService;