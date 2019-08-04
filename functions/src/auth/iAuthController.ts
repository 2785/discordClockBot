export enum Role {
  USER = "user"
}

export interface User {
    
}

export interface IAuthController {
  hasRole(role: Role): Promise<User>;
}
