import { Employee, User, UserRole } from './user';
import { UserRepository } from './userRepository';

export class UserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async listUserRoles() {
    return await this.userRepository.listUserRoles();
  }

  async saveUserRoles(userRole: UserRole) {
    return await this.userRepository.saveUserRole(userRole);
  }

  async readUser(userId: number) {
    return await this.userRepository.readUser(userId);
  }

  async listUsers() {
    return await this.userRepository.listUsers();
  }

  async saveUser(user: User) {
    return await this.userRepository.saveUser(user);
  }

  async updateUser(userId: number, user: User) {
    return await this.userRepository.updateUser(userId, user);
  }

  async readEmployee(employeeId: number) {
    return await this.userRepository.readEmployee(employeeId);
  }

  async listEmployee() {
    return await this.userRepository.listEmployee();
  }

  async createEmployee(employee: Employee) {
    return await this.userRepository.createEmployee(employee);
  }

  async updateEmployee(employeeId: number, employee: Employee) {
    return await this.userRepository.updateEmployee(employeeId, employee);
  }

  async assignamentLeadToEmployee(employeeId: number, leadId: number) {
    return await this.userRepository.assignamentLeadToEmployee(
      employeeId,
      leadId,
    );
  }
}
