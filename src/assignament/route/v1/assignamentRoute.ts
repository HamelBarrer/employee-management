import { Router } from 'express';
import { UserUseCase } from '../../../user/domain/userUsecase';
import { UserRepositoryImpl } from '../../../user/infrastructure/userRepositoryImpl';
import { UserService } from '../../../user/service/userService';
import { AssignamentsController } from '../../controller/assignamentController';
import { AssignamentUseCase } from '../../domain/assignamentUsecase';
import { AssignamentRepositoryImpl } from '../../infrastructure/assignamentRepositoryImpl';
import { AssignamentService } from '../../service/assignamentService';

const router = Router();

const userRepo = new UserRepositoryImpl();
const userUseCase = new UserUseCase(userRepo);
const userService = new UserService(userUseCase);

const assignamentRepo = new AssignamentRepositoryImpl();
const assignamentUseCase = new AssignamentUseCase(assignamentRepo);
const assignamentService = new AssignamentService(assignamentUseCase);
const assignamentController = new AssignamentsController(
  assignamentService,
  userService,
);

router.post('/', (req, res) => {
  assignamentController.createAssignamentLeadToEmployee(req, res);
});

export default router;
