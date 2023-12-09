import { AssignamentRepository } from './assignamentRepository';

export class AssignamentUseCase {
  constructor(private readonly assignamentRepository: AssignamentRepository) {}

  async assignamentLeadToEmployee(employeeId: number, leadId: number) {
    return await this.assignamentRepository.assignamentLeadToEmployee(
      employeeId,
      leadId,
    );
  }

  async updatedLoadToEmployee(employeeId: number, leadId: number) {
    return await this.assignamentRepository.updatedLoadToEmployee(
      employeeId,
      leadId,
    );
  }

  async listEmployee() {
    return await this.assignamentRepository.listEmployee();
  }
}
