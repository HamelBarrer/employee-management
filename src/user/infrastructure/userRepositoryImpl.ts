import { PrismaClient } from '@prisma/client';
import { Employee, User, UserRole } from '../domain/user';
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

  async readEmployee(employeeId: number): Promise<Employee | null> {
    return await prisma.employees.findUnique({ where: { userId: employeeId } });
  }

  async listEmployee(): Promise<Employee[]> {
    return await prisma.employees.findMany({
      select: {
        employeeId: true,
        version: true,
        userId: true,
        user: {
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
        },
      },
    });
  }

  async createEmployee(employee: Employee): Promise<Employee> {
    const { userId } = employee;

    return await prisma.employees.create({
      data: {
        userId,
      },
      select: {
        employeeId: true,
        userId: true,
        version: true,
        user: {
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
        },
      },
    });
  }

  async updateEmployee(userId: number, employee: Employee): Promise<Employee> {
    const { version } = employee;

    return await prisma.employees.update({
      data: {
        version: version! + 1,
      },
      where: { userId },
    });
  }
}
