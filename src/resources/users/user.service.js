const usersRepo = require('./user.memory.repository');

const getAllUsers = () => usersRepo.getAllUsers();
const addUser = (user) => usersRepo.addUser(user);
const getUser = (id) => usersRepo.getUser(id);
const updateUser = (user) => usersRepo.updateUser(user);

module.exports = { getAllUsers, addUser, getUser, updateUser };
