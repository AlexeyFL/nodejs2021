import { v4 as uuid } from 'uuid';
import { Router, Response, Request, NextFunction } from 'express';
import { CustomError } from '../../utils';

import User from './user.model';

import * as usersService from './user.service';

const router = Router();

// get all users
router.route('/').get(async (_req: Request, res: Response) => {
  const users = await usersService.getAllUsers();
  res.status(users ? 200 : 404).json(users.map(User.toResponse));
});

// get user by id
router
  .route('/:id')
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await usersService.getUser(req.params['id']!);
      if (user) {
        res.status(200).json(User.toResponse(user));
      } else {
        throw new CustomError(404, 'User does not exists');
      }
      next();
    } catch (error) {
      next(error);
    }
  });

// update user by id
router.route('/:id').put(async (req: Request, res: Response) => {
  const { body } = req;
  const userId = req.params['id'];

  const newUserBody = await usersService.updateUser({
    ...body,
    id: userId,
  });

  res.status(200).json(User.toResponse(newUserBody));
});

// create new user
router.route('/').post(async (req: Request, res: Response) => {
  const newUser = new User({
    id: uuid(),
    name: req.body.name,
    login: req.body.login,
    password: req.body.password,
  });

  usersService.addUser(newUser);
  res.status(201).json(User.toResponse(newUser));
});

// delete user
router.route('/:id').delete(async (req, res) => {
  const userId = req.params.id;
  await usersService.deleteUser(userId);

  res.status(204).json(null);
});

export default router;
