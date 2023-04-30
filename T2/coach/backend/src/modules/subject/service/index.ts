import { ISubject, subjects } from "@modules/subject/model";

class SubjectService {
   
   /* Buscar Todos */
   async getAll(): Promise<ISubject[]> {
      console.info("[Info]:[coachs]: ", subjects)
      return subjects;
   };
}

export default SubjectService;