// user.model.ts
export interface User {
    userId?: number;  // userId peut être undefined lors de la création (auto-incrément côté serveur)
    name: string;
    lastName: string;
    age: number;
    email : string;
    password : string;
  }
  