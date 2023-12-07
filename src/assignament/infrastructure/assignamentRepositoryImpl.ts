import { PrismaClient } from '@prisma/client';
import { LeadToEmployee } from '../domain/assignament';
import { AssignamentRepository } from '../domain/assignamentRepository';

const prisma = new PrismaClient();

export class AssignamentRepositoryImpl implements AssignamentRepository {
  async assignamentLeadToEmployee(
    employeeId: number,
    leadId: number,
  ): Promise<LeadToEmployee> {
    return await prisma.leadToEmployees.create({
      data: {
        employeeId,
        leadId,
      },
    });
  }
}
