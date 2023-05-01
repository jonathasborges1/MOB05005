export function validateId(id: string) : number {
   const parsedId = parseInt(id);
   if (isNaN(parsedId)) {
      throw new Error('ID inválido')
   }
   return parsedId;
}

export function validateUUID(id: string): boolean {
   const uuidv4Pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
   return uuidv4Pattern.test(id);
 }
  