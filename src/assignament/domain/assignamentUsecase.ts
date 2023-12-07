import { AssignamentRepository } from './assignamentRepository';

export class AssignamentUseCase {
  constructor(private readonly assignamentRepository: AssignamentRepository) {}

  async assignamentLeadToEmployee(employeeId: number, leadId: number) {
    return await this.assignamentRepository.assignamentLeadToEmployee(
      employeeId,
      leadId,
    );
  }
}
