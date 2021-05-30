const uuid = require('uuid').v4;
const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

// get all users
router.route('/').get(async (req, res) => {
  const users = await usersService.getAllUsers();
  res.json(users.map(User.toResponse));
});

// get user by id
router.route('/:id').get(async (req, res) => {
  const userId = req.params.id;

  const user = await usersService.getUser(userId);

  res.status(user ? 200 : 404).json(User.toResponse(user));
});

// update user by id
router.route('/:id').put(async (req, res) => {
  const { body } = req;
  const userId = req.params.id;

  const newUserBody = await usersService.updateUser({
    ...body,
    id: userId,
  });

  res.json(User.toResponse(newUserBody));
});

// create new user
router.route('/').post(async (req, res) => {
  const newUser = new User({
    id: uuid(),
    name: req.query.name,
    login: req.query.login,
    password: req.query.password,
  });

  usersService.addUser(newUser);
  res.status(201).json(newUser.getUser());
});

// delete user
router.route('/:id').delete(async (req, res) => {
  const userId = req.params.id;
  await usersService.deleteUser(userId);

  res.status(204).json(null);
});

module.exports = router;
