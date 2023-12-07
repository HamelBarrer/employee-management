import { Employee, LeadToEmployee, User, UserRole } from '../domain/user';
import { UserUseCase } from '../domain/userUsecase';
import { IUserService } from '../interfaces/iuserService';

export class UserService implements IUserService {
  constructor(private readonly userUseCase: UserUseCase) {}

  async getUserRoles(): Promise<UserRole[]> {
    return await this.userUseCase.listUserRoles();
  }

  async createUserRole(userRole: UserRole): Promise<UserRole> {
    return await this.userUseCase.saveUserRoles(userRole);
  }

  async getUser(userId: number): Promise<User | null> {
    return await this.userUseCase.readUser(userId);
  }

  async getUsers(): Promise<User[]> {
    return await this.userUseCase.listUsers();
  }

  async createUser(user: User): Promise<User> {
    return await this.userUseCase.saveUser(user);
  }

  async updatedUser(userId: number, user: User): Promise<User> {
    return await this.userUseCase.updateUser(userId, user);
  }

  async getEmployee(employeeId: number): Promise<Employee | null> {
    return await this.userUseCase.readEmployee(employeeId);
  }

  async getEmployees(): Promise<Employee[]> {
    return await this.userUseCase.listEmployee();
  }

  async createEmployee(employee: Employee): Promise<Employee> {
    return await this.userUseCase.createEmployee(employee);
  }

  async updatedEmployee(
    employeeId: number,
    employee: Employee,
  ): Promise<Employee> {
    return await this.userUseCase.updateEmployee(employeeId, employee);
  }

  async createAssignamentEmployeeToLead(
    employeeId: number,
    leadId: number,
  ): Promise<LeadToEmployee> {
    return await this.userUseCase.assignamentLeadToEmployee(employeeId, leadId);
  }
}
