import { LeadToEmployee } from '../domain/assignament';

export interface IAssignamentService {
  createAssignamentEmployeeToLead(
    employeeId: number,
    leadId: number,
  ): Promise<LeadToEmployee>;
}
