import { Employee, User } from '../../user/domain/user';

export interface LeadToEmployee {
  lead?: User;
  leadId?: number;
  employee?: Employee;
  employeeId?: number;
}
