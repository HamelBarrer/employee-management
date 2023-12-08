import { Request, Response } from 'express';
import { UserService } from '../../user/service/userService';
import { AssignamentService } from '../service/assignamentService';

export class AssignamentsController {
  constructor(
    private readonly assignamentService: AssignamentService,
    private readonly userService: UserService,
  ) {}

  async createAssignamentLeadToEmployee(req: Request, res: Response) {
    try {
      const { employeeId, leadId } = req.body;

      const currentEmployee = await this.userService.getEmployee(employeeId);
      if (!currentEmployee) {
        res.status(404).json({ message: 'Employee not found' });
        return;
      }
      const currentLead = await this.userService.getUser(leadId);
      if (!currentLead) {
        res.status(404).json({ message: 'Lead not found' });
        return;
      }
      if (currentLead.userRoleId !== 1) {
        res.status(400).json({
          message: 'To assign a leader you need to have the leader role',
        });
        return;
      }

      const data =
        await this.assignamentService.createAssignamentEmployeeToLead(
          employeeId,
          leadId,
        );

      await this.userService.updatedEmployee(employeeId, currentEmployee);

      res.status(201).json(data);
    } catch (error) {
      const e = error as Error;
      res.status(500).json({ error: e.message });
    }
  }

  async updateAssignamentLeadToEmployee(req: Request, res: Response) {
    try {
      const { employeeId, leadId } = req.body;

      const currentEmployee = await this.userService.getEmployee(employeeId);
      if (!currentEmployee) {
        res.status(404).json({ message: 'Employee not found' });
        return;
      }
      const currentLead = await this.userService.getUser(leadId);
      if (!currentLead) {
        res.status(404).json({ message: 'Lead not found' });
        return;
      }
      if (currentLead.userRoleId !== 1) {
        res.status(400).json({
          message: 'To assign a leader you need to have the leader role',
        });
        return;
      }

      const data =
        await this.assignamentService.updateAssignamentEmployeeToLead(
          employeeId,
          leadId,
        );

      await this.userService.updatedEmployee(employeeId, currentEmployee);

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
