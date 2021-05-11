const usersRepo = require('./user.memory.repository');

const getAllUsers = () => usersRepo.getAllUsers();
const addUser = (user) => usersRepo.addUser(user);

module.exports = { getAllUsers, addUser };
