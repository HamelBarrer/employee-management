import { Request, Response } from 'express';
import { AssignamentService } from '../service/assignamentService';

export class AssignamentsController {
  constructor(private readonly assignamentService: AssignamentService) {}

  async createAssignamentLeadToEmployee(req: Request, res: Response) {
    try {
      const { employeeId, userId } = req.body;
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
