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

  async verificationAssignmamentHability(
    currentLeadToEmployee: LeadToEmployee,
    leadToEmployee: LeadToEmployee,
  ): Promise<boolean> {
    const { leadId, employeeId } = leadToEmployee;

    const loadEmployess = await prisma.leadToEmployees.findMany({
      where: {
        leadId,
        employeeId,
      },
    });
    if (loadEmployess.length === 0) {
      return true;
    }

    for (const employee of loadEmployess) {
      if (employee.leadId === currentLeadToEmployee.leadId) return true;
      if (employee.employeeId === currentLeadToEmployee.employeeId) return true;
    }

    return false;
  }
}
