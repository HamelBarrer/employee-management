import { User, UserRole } from '../domain/user';

export interface IUserService {
  getUserRoles(): Promise<UserRole[]>;
  createUserRole(userRole: UserRole): Promise<UserRole>;
  getUser(userId: number): Promise<User | null>;
  getUsers(): Promise<User[]>;
  createUser(user: User): Promise<User>;
  updatedUser(userId: number, user: User): Promise<User>;
}
