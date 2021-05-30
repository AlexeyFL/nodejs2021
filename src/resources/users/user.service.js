const usersRepo = require('./user.memory.repository');

const getAllUsers = () => usersRepo.getAllUsers();
const addUser = (user) => usersRepo.addUser(user);
const getUser = (id) => usersRepo.getUser(id);
const updateUser = (user) => usersRepo.updateUser(user);
const deleteUser = (id) => usersRepo.deleteUser(id);

module.exports = { getAllUsers, addUser, getUser, updateUser, deleteUser };
