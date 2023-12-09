import { AssignamentLeadToEmployee } from '../domain/assignament';

export interface IAssignamentService {
  createAssignamentEmployeeToLead(
    employeeId: number,
    leadId: number,
  ): Promise<AssignamentLeadToEmployee>;
  updateAssignamentEmployeeToLead(
    employeeId: number,
    leadId: number,
  ): Promise<AssignamentLeadToEmployee>;
}
