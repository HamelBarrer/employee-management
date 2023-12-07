import { Router } from 'express';
import { UserController } from '../../controller/userController';
import { UserUseCase } from '../../domain/userUsecase';
import { UserRepositoryImpl } from '../../infrastructure/userRepositoryImpl';
import { UserService } from '../../service/userService';

const router = Router();

const userRepo = new UserRepositoryImpl();
const userUseCase = new UserUseCase(userRepo);
const userService = new UserService(userUseCase);
const userController = new UserController(userService);

router.get('/userRoles', (req, res) => {
  userController.getUserRoles(req, res);
});

router.post('/userRoles', (req, res) => {
  userController.createUserRole(req, res);
});

router.get('/:userId', (req, res) => {
  userController.getUser(req, res);
});

router.get('/', (req, res) => {
  userController.getUsers(req, res);
});

router.post('/', (req, res) => {
  userController.createUser(req, res);
});

router.put('/:userId', (req, res) => {
  userController.updateUser(req, res);
});

router.post('/assignament', (req, res) => {
  userController.createAssignamentLeadToEmployee(req, res);
});

export default router;
