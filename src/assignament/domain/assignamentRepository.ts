import { LeadToEmployee } from './assignament';

export interface AssignamentRepository {
  assignamentLeadToEmployee(
    employeeId: number,
    leadId: number,
  ): Promise<LeadToEmployee>;
  verificationAssignmamentHability(
    currentLeadToEmployee: LeadToEmployee,
    leadToEmployee: LeadToEmployee,
  ): Promise<boolean>;
}
