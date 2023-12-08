import { AssignamentLeadToEmployee } from '../domain/assignament';

export interface IAssignamentService {
  createAssignamentEmployeeToLead(
    employeeId: number,
    leadId: number,
  ): Promise<AssignamentLeadToEmployee>;
  getVerificationAssignamentEmployeeToLead(
    currentLeadToEmployee: AssignamentLeadToEmployee,
    leadToEmployee: AssignamentLeadToEmployee,
  ): Promise<boolean>;
  updateAssignamentEmployeeToLead(
    employeeId: number,
    leadId: number,
  ): Promise<AssignamentLeadToEmployee>;
}
