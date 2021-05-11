const uuid = require('uuid').v4;
const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAllUsers();
  // map user fields to exclude secret fields like "password"
  // res.json(users);
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
  // if (!req.body) {
  //   return res.status(400);
  // }
  // get params
  // console.log('req.body', req.query.name);

  const newUser = new User({
    id: uuid(),
    name: 'name',
    login: 'login',
    password: 'pass',
  });

  usersService.addUser(newUser);
  res.json(newUser.getUser());
});

module.exports = router;
