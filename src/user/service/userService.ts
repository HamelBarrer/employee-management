import { User, UserRole } from '../domain/user';
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
}
