import {userType} from '../../types'

const users:userType[] = [];

const getAllUsers = ():userType[] => users;

const addUser = async (userData:userType):Promise<userType> => {
  const userList = await getAllUsers();

  userList.push(userData);

  return userData;
};

const getUser = async (id:string):Promise<userType> => {
  const userList = await getAllUsers();

  return userList.find((user:userType) => user.id === id);
};

const updateUser = async (user:userType):Promise<userType> => {
  const userList = await getAllUsers();

  const idx:number | number = userList.findIndex((listUser) => listUser.id === user.id);

  userList[idx] = user;

  return user;
};

const deleteUser = async (id:string):Promise<void> => {
  const userList = await getAllUsers();

  const idx = userList.findIndex((listUser) => listUser.id === id);

  userList.splice(idx, 1);

};

export { getAllUsers, addUser, getUser, updateUser, deleteUser };
