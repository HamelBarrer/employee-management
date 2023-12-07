import { Router } from 'express';
import { AssignamentsController } from '../../controller/assignamentController';
import { AssignamentUseCase } from '../../domain/assignamentUsecase';
import { AssignamentRepositoryImpl } from '../../infrastructure/assignamentRepositoryImpl';
import { AssignamentService } from '../../service/assignamentService';

const router = Router();

const assignamentRepo = new AssignamentRepositoryImpl();
const assignamentUseCase = new AssignamentUseCase(assignamentRepo);
const assignamentService = new AssignamentService(assignamentUseCase);
const assignamentController = new AssignamentsController(assignamentService);

router.post('/', (req, res) => {
  assignamentController.createAssignamentLeadToEmployee(req, res);
});

export default router;
