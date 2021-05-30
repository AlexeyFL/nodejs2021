import * as usersRepo from './user.memory.repository'

const getAllUsers = () => usersRepo.getAllUsers();
const addUser = (user) => usersRepo.addUser(user);
const getUser = (id) => usersRepo.getUser(id);
const updateUser = (user) => usersRepo.updateUser(user);
const deleteUser = (id) => usersRepo.deleteUser(id);

export { getAllUsers, addUser, getUser, updateUser, deleteUser };
