import { AssignamentLeadToEmployee } from '../domain/assignament';
import { AssignamentUseCase } from '../domain/assignamentUsecase';
import { IAssignamentService } from '../interfaces/iassignamentService';

export class AssignamentService implements IAssignamentService {
  constructor(private readonly assignamentUseCase: AssignamentUseCase) {}

  async createAssignamentEmployeeToLead(
    employeeId: number,
    leadId: number,
  ): Promise<AssignamentLeadToEmployee> {
    return await this.assignamentUseCase.assignamentLeadToEmployee(
      employeeId,
      leadId,
    );
  }

  async getVerificationAssignamentEmployeeToLead(
    currentLeadToEmployee: AssignamentLeadToEmployee,
    leadToEmployee: AssignamentLeadToEmployee,
  ): Promise<boolean> {
    return await this.assignamentUseCase.verificationAssignmamentHability(
      currentLeadToEmployee,
      leadToEmployee,
    );
  }

  async updateAssignamentEmployeeToLead(
    employeeId: number,
    leadId: number,
  ): Promise<AssignamentLeadToEmployee> {
    return await this.assignamentUseCase.updatedLoadToEmployee(
      employeeId,
      leadId,
    );
  }
}
