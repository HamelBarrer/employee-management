import { LeadToEmployee } from '../domain/assignament';
import { AssignamentUseCase } from '../domain/assignamentUsecase';
import { IAssignamentService } from '../interfaces/iassignamentService';

export class AssignamentService implements IAssignamentService {
  constructor(private readonly assignamentUseCase: AssignamentUseCase) {}

  async createAssignamentEmployeeToLead(
    employeeId: number,
    leadId: number,
  ): Promise<LeadToEmployee> {
    return await this.assignamentUseCase.assignamentLeadToEmployee(
      employeeId,
      leadId,
    );
  }

  async getVerificationAssignamentEmployeeToLead(
    currentLeadToEmployee: LeadToEmployee,
    leadToEmployee: LeadToEmployee,
  ): Promise<boolean> {
    return await this.assignamentUseCase.verificationAssignmamentHability(
      currentLeadToEmployee,
      leadToEmployee,
    );
  }
}
