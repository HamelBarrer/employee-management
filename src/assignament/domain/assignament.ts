import { Employee, User } from '../../user/domain/user';

export interface AssignamentLeadToEmployee {
  assignamentId: number;
  lead?: User;
  leadId: number;
  employee?: Employee;
  employeeId: number;
}
