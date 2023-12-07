import { Employee, User, UserRole } from '../domain/user';

export interface IUserService {
  getUserRoles(): Promise<UserRole[]>;
  createUserRole(userRole: UserRole): Promise<UserRole>;
  getUser(userId: number): Promise<User | null>;
  getUsers(): Promise<User[]>;
  createUser(user: User): Promise<User>;
  updatedUser(userId: number, user: User): Promise<User>;
  getEmployee(employeeId: number): Promise<Employee | null>;
  getEmployees(): Promise<Employee[]>;
  createEmployee(employee: Employee): Promise<Employee>;
  updatedEmployee(employeeId: number, employee: Employee): Promise<Employee>;
}
