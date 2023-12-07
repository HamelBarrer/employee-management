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
      const { employeeId, userId } = req.body;

      const currentEmployee = await this.userService.getEmployee(employeeId);
      if (!currentEmployee) {
        res.status(404).json({ message: 'Employee not found' });
        return;
      }
      const currentLead = await this.userService.getUser(userId);
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

      await this.assignamentService.getVerificationAssignamentEmployeeToLead(
        currentEmployee,
        req.body,
      );

      const data =
        await this.assignamentService.createAssignamentEmployeeToLead(
          employeeId,
          userId,
        );

      res.status(201).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
