import { Router } from 'express';
import { UserUseCase } from '../../../user/domain/userUsecase';
import { UserRepositoryImpl } from '../../../user/infrastructure/userRepositoryImpl';
import { UserService } from '../../../user/service/userService';
import { AssignamentsController } from '../../controller/assignamentController';
import { AssignamentUseCase } from '../../domain/assignamentUsecase';
import { AssignamentRepositoryImpl } from '../../infrastructure/assignamentRepositoryImpl';
import { AssignamentService } from '../../service/assignamentService';

const router = Router();

// Perform dependency injection of the user module
const userRepo = new UserRepositoryImpl();
const userUseCase = new UserUseCase(userRepo);
const userService = new UserService(userUseCase);

// Perform dependency injection of the assignament module
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

router.put('/', (req, res) => {
  assignamentController.updateAssignamentLeadToEmployee(req, res);
});

export default router;
