export interface ICoach {
   id: number;
   name: string;
   email: string
}

export let coachs: ICoach[] = [
   { id: 1, name: 'Alice', email: 'alice@example.com' },
   { id: 2, name: 'Bob', email: 'bob@example.com' },
   { id: 3, name: 'Charlie', email: 'charlie@example.com' },
 ];