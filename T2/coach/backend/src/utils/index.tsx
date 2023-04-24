export function validateId(id: string) : number {
   const parsedId = parseInt(id);
   if (isNaN(parsedId)) {
      throw new Error('ID inválido')
   }
   return parsedId;
}

  