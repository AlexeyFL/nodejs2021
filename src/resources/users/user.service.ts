import * as usersRepo from './user.memory.repository';
import { userType } from '../../types';

const getAllUsers = (): userType[] => usersRepo.getAllUsers();
const addUser = (user: userType):Promise<userType> => usersRepo.addUser(user);
const getUser = (id: string):Promise<userType> => usersRepo.getUser(id);
const updateUser = (user: userType):Promise<userType> => usersRepo.updateUser(user);
const deleteUser = (id: string):Promise<userType> => usersRepo.deleteUser(id);

export { getAllUsers, addUser, getUser, updateUser, deleteUser };
