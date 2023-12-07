import { PrismaClient } from '@prisma/client';
import { User, UserRole } from '../domain/user';
import { UserRepository } from '../domain/userRepository';

const prisma = new PrismaClient();

export class UserRepositoryImpl implements UserRepository {
  async listUserRoles(): Promise<UserRole[]> {
    return await prisma.userRoles.findMany();
  }

  async saveUserRole(userRole: UserRole): Promise<UserRole> {
    return await prisma.userRoles.create({ data: userRole });
  }

  async readUser(userId: number): Promise<User | null> {
    return await prisma.users.findUnique({
      select: {
        userId: true,
        username: true,
        lastname: true,
        userRoleId: true,
        userRole: {
          select: {
            userRoleId: true,
            name: true,
            isActive: true,
          },
        },
      },
      where: {
        userId,
      },
    });
  }

  async listUsers(): Promise<User[]> {
    return await prisma.users.findMany({
      select: {
        userId: true,
        username: true,
        lastname: true,
        userRoleId: true,
        userRole: {
          select: {
            userRoleId: true,
            name: true,
            isActive: true,
          },
        },
      },
    });
  }

  async saveUser(user: User): Promise<User> {
    const { username, lastname, userRoleId } = user;

    return await prisma.users.create({
      select: {
        userId: true,
        username: true,
        lastname: true,
        userRoleId: true,
        userRole: {
          select: {
            userRoleId: true,
            name: true,
            isActive: true,
          },
        },
      },
      data: {
        username,
        lastname,
        userRoleId,
      },
    });
  }

  async updateUser(userId: number, user: User): Promise<User> {
    const { username, lastname, userRoleId } = user;

    return await prisma.users.update({
      select: {
        userId: true,
        username: true,
        lastname: true,
        userRoleId: true,
        userRole: {
          select: {
            userRoleId: true,
            name: true,
            isActive: true,
          },
        },
      },
      data: {
        username,
        lastname,
        userRoleId,
      },
      where: {
        userId,
      },
    });
  }
}
