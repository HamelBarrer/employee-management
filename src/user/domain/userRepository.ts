import { Employee, User, UserRole } from './user';

export interface UserRepository {
  listUserRoles(): Promise<UserRole[]>;
  saveUserRole(userRole: UserRole): Promise<UserRole>;
  readUser(userId: number): Promise<User | null>;
  listUsers(): Promise<User[]>;
  saveUser(user: User): Promise<User>;
  updateUser(userId: number, user: User): Promise<User>;
  listEmployee(): Promise<Employee[]>;
  readEmployee(employeeId: number): Promise<Employee | null>;
  createEmployee(employee: Employee): Promise<Employee>;
  updateEmployee(employeeId: number, employee: Employee): Promise<Employee>;
}
