import { User, UserRole } from './user';
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
}
