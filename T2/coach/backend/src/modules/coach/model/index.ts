export interface ICoach {
   id: number;
   avatar?: string;
   bio?: string;
   cost?: number;
   name: string;
   subject?: string
   whatsapp?: string;
   email?: string;
}

export const coachs: ICoach[] = [
   {
      id: 1,
      avatar: "https://www.gravatar.com/avatar/9425665a85f0824de038bd646efe5024",
      bio: "Eu sou um coach experiente em Desenvolviento de Software e gestão de equipes.",
      cost: 85,
      name: "Jonathas Borges",
      subject: "Tech Lead",
      whatsapp: "5592988410440"
   },
   {
      id: 2,
      avatar: "https://www.example.com/avatar2",
      bio: "Eu ajudo jovens a desenvolverem habilidades para entrar no mercado de trabalho.",
      cost: 30,
      name: "Ana Souza",
      subject: "Carreira",
      whatsapp: "(21) 99999-9999"
   },
   {
      id: 3,
      avatar: "https://www.example.com/avatar3",
      bio: "Eu ajudo pessoas a melhorarem a saúde física e mental por meio do esporte.",
      cost: 80,
      name: "Pedro Santos",
      subject: "Saúde",
      whatsapp: "(31) 99999-9999"
   }
];

