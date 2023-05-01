
export interface ICoach {
   id: string;
   avatar?: string;
   bio?: string;
   cost?: string; // Valor por Hora $$ -> R$100
   name: string;
   subject?: string; // Materia/Disciplina -> Matematica
   whatsapp?: string;
   email?: string;
}

export interface ICoachSchedule {
   coachId: string;
   dayOfWeek: string; // 0 a 6 -> Segunda a domingo
   from: string ; // Horario inicio -> 8:00
   to: string; // Horario fim -> 9:00
}

/* Tipos das propriedades aceitas na query string */
export interface QueryParams {
   subject?: string | string[];
   dayOfWeek?: string | string[];
   time?: string | string[];
 };

export const initCoachs: ICoach[] = [
   {
      id: "cc7978f7-63e0-4189-b7ec-4db44eda6eac",
      avatar: "https://www.gravatar.com/avatar/9425665a85f0824de038bd646efe5024",
      bio: "Eu sou um coach experiente em Desenvolviento de Software e gestão de equipes.",
      cost: "85",
      name: "Jonathas Borges",
      subject: "Tech Lead",
      whatsapp: "5592988410440"
   },
   {
      id: "92e9ebfd-8f91-4504-a10b-c1ec46a6d739",
      avatar: "https://www.example.com/avatar2",
      bio: "Eu ajudo jovens a desenvolverem habilidades para entrar no mercado de trabalho.",
      cost: "30",
      name: "Ana Souza",
      subject: "Carreira",
      whatsapp: "(21) 99999-9999"
   },
   {
      id: "4f289bdd-1c3b-48e5-9817-ed97f6ce1638",
      avatar: "https://www.example.com/avatar3",
      bio: "Eu ajudo pessoas a melhorarem a saúde física e mental por meio do esporte.",
      cost: "80",
      name: "Pedro Santos",
      subject: "Saúde",
      whatsapp: "(31) 99999-9999"
   }
];

export const initSchedules: ICoachSchedule[] = [
   {
      coachId: "cc7978f7-63e0-4189-b7ec-4db44eda6eac",
      dayOfWeek: "1",
      from: "8",
      to: "10"
   },
   {
      coachId: "cc7978f7-63e0-4189-b7ec-4db44eda6eac",
      dayOfWeek: "1",
      from: "12",
      to: "14"
   },
   {
      coachId: "92e9ebfd-8f91-4504-a10b-c1ec46a6d739",
      dayOfWeek: "1",
      from: "16",
      to: "18"
   },
   {
      coachId: "92e9ebfd-8f91-4504-a10b-c1ec46a6d739",
      dayOfWeek: "2",
      from: "16",
      to: "18"
   },
]
