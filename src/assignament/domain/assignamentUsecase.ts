import { LeadToEmployee } from './assignament';
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
    currentLeadToEmployee: LeadToEmployee,
    leadToEmployee: LeadToEmployee,
  ) {
    return await this.assignamentRepository.verificationAssignmamentHability(
      currentLeadToEmployee,
      leadToEmployee,
    );
  }
}
