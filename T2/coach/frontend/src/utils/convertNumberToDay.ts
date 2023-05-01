export  function convertMinutesToHour(minutos: number) {
   const horas = Math.floor(minutos / 60);
   const min = minutos % 60;
   const textoHoras = (`00${horas}`).slice(-2);
   const textoMinutos = (`00${min}`).slice(-2);
 
   return `${textoHoras}:${textoMinutos}`;
 }

 export function applyMaskHour(time: string): string{
    return `${time}:00`;
 }

 export function convertNumberToDay(key: number): string {
  switch (key) {
    case 0:
      return "Sabado"
    case 1:
      return "Domingo"
    case 2:
      return "Segunda-Feira"
    case 3:
      return "Terca-Feira"
    case 4:
      return "Quarta-Feira"
    case 5:
      return "Quinta-Feira"
    case 6:
      return "Sexta-Feira"
    default:
      return "-"
      break;
  }
 }