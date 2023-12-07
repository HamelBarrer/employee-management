import { Request, Response } from 'express';
import { UserService } from '../service/userService';

export class UserController {
  constructor(private readonly userService: UserService) {}

  async getUserRoles(_: Request, res: Response) {
    try {
      const data = await this.userService.getUserRoles();

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async createUserRole(req: Request, res: Response) {
    try {
      const data = await this.userService.createUserRole(req.body);

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getUser(req: Request, res: Response) {
    try {
      const userId = Number(req.params.userId);
      const data = await this.userService.getUser(userId);
      if (!data) {
        res.status(404).json({ message: 'User not found' });
        return;
      }

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getUsers(_: Request, res: Response) {
    try {
      const data = await this.userService.getUsers();
      if (data.length === 0) {
        res.status(204).json({ message: '' });
        return;
      }

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const data = await this.userService.createUser(req.body);

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const userId = Number(req.params.userId);
      const data = await this.userService.updatedUser(userId, req.body);

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
