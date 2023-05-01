
export interface ICoachSchedule {
   coachId: string;
   dayOfWeek: string; // 0 a 6 -> Segunda a domingo
   from: string ; // Horario inicio -> 8:00
   to: string; // Horario fim -> 9:00
}

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