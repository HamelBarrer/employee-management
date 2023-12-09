import { Prisma, PrismaClient } from '@prisma/client';
import { AssignamentLeadToEmployee } from '../domain/assignament';
import { AssignamentRepository } from '../domain/assignamentRepository';

const prisma = new PrismaClient();

export class AssignamentRepositoryImpl implements AssignamentRepository {
  async assignamentLeadToEmployee(
    employeeId: number,
    leadId: number,
  ): Promise<AssignamentLeadToEmployee> {
    try {
      return await prisma.assignamentLeadToEmployee.create({
        data: {
          employeeId,
          leadId,
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new Error('An assignment already exists for the employee');
        }
        if (e.code === 'P2003') {
          throw new Error(
            'You are trying to make a relationship with data that does not exist',
          );
        }
      }
      throw e;
    }
  }

  async updatedLoadToEmployee(
    employeeId: number,
    leadId: number,
  ): Promise<AssignamentLeadToEmployee> {
    return await prisma.assignamentLeadToEmployee.update({
      data: {
        employeeId,
        leadId,
      },
      where: {
        leadId,
        employeeId,
      },
    });
  }
}
