import { AssignamentLeadToEmployee } from './assignament';
import { AssignamentRepository } from './assignamentRepository';

export class AssignamentUseCase {
  constructor(private readonly assignamentRepository: AssignamentRepository) {}

  async assignamentLeadToEmployee(employeeId: number, leadId: number) {
    return await this.assignamentRepository.assignamentLeadToEmployee(
      employeeId,
      leadId,
    );
  }

  async verificationAssignmamentHability(
    currentLeadToEmployee: AssignamentLeadToEmployee,
    leadToEmployee: AssignamentLeadToEmployee,
  ) {
    return await this.assignamentRepository.verificationAssignmamentHability(
      currentLeadToEmployee,
      leadToEmployee,
    );
  }

  async updatedLoadToEmployee(employeeId: number, leadId: number) {
    return await this.assignamentRepository.updatedLoadToEmployee(
      employeeId,
      leadId,
    );
  }
}
