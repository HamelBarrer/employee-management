import { Employee } from '../../user/domain/user';
import { AssignamentLeadToEmployee } from './assignament';

export interface AssignamentRepository {
  assignamentLeadToEmployee(
    employeeId: number,
    leadId: number,
  ): Promise<AssignamentLeadToEmployee>;
  updatedLoadToEmployee(
    employeeId: number,
    leadId: number,
  ): Promise<AssignamentLeadToEmployee>;
  listEmployee(): Promise<Employee[]>;
}
