import { v4 as uuid } from 'uuid';
import { Router, Request, Response } from 'express';


import User from './user.model';

import * as usersService from './user.service';

const router = Router();

// get all users
router.route('/').get(async (res: Response) => {
  const users  = await usersService.getAllUsers();
  res.status(users ? 200 : 404).json(users.map(User.toResponse));
});

// get user by id
router.route('/:id').get(async (req: Request, res: Response) => {
  const userId = req.params['id'];  

  const user = await usersService.getUser(userId);

  res.status(user ? 200 : 404).json(User.toResponse(user));
});

// update user by id
router.route('/:id').put(async (req: Request, res: Response) => {
  const { body } = req;
  const userId = req.params['id'];

  const newUserBody = await usersService.updateUser({
    ...body,
    id: userId,
  });

  res.json(User.toResponse(newUserBody));
});

// create new user
router.route('/').post(async (req: Request, res: Response) => {
  const newUser = new User({
    id: uuid(),
    name: req.body['name'],
    login: req.body['login'],
    password: req.body['password'],
  });

  usersService.addUser(newUser);
  res.status(201).json(newUser.getUser());
});

// delete user
router.route('/:id').delete(async (req: Request, res: Response) => {
  const userId = req.params['id'];
  await usersService.deleteUser(userId);

  res.status(204).json(null);
});

export default router;
