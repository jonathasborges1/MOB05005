import { ISubject, subjects } from "@modules/subject/model";

class SubjectService {
   
   /* Buscar Todos */
   async getAll(): Promise<ISubject[]> {
      console.log("coachs: ", subjects)
      return subjects;
   };
}

export default SubjectService;