import { AssignamentLeadToEmployee } from './assignament';

export interface AssignamentRepository {
  assignamentLeadToEmployee(
    employeeId: number,
    leadId: number,
  ): Promise<AssignamentLeadToEmployee>;
  verificationAssignmamentHability(
    currentLeadToEmployee: AssignamentLeadToEmployee,
    leadToEmployee: AssignamentLeadToEmployee,
  ): Promise<boolean>;
  updatedLoadToEmployee(
    employeeId: number,
    leadId: number,
  ): Promise<AssignamentLeadToEmployee>;
}
