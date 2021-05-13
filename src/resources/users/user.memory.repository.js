const { promises } = require('fs');

const fileName = 'users.json';

const filePath = `src/${fileName}`;

const getAllUsers = async () => {
  const content = await promises.readFile(filePath, 'utf8');
  const users = JSON.parse(content);
  return users;
};

const addUser = async (userData) => {
  const userList = await getAllUsers();

  userList.push(userData);

  const stringifiedUserList = JSON.stringify(userList);

  await promises.writeFile(filePath, stringifiedUserList, 'utf8');

  return userData;
};

const getUser = async (id) => {
  const userList = await getAllUsers();

  return userList.find((user) => user.id === id);
};

const updateUser = async (user) => {
  const userList = await getAllUsers();

  const idx = userList.findIndex((listUser) => listUser.id === user.id);

  userList[idx] = user;

  const stringifiedUserList = JSON.stringify(userList);

  await promises.writeFile(filePath, stringifiedUserList, 'utf8');

  return user;
};

const deleteUser = async (id) => {
  const userList = await getAllUsers();

  const idx = userList.findIndex((listUser) => listUser.id === id);

  userList.splice(idx, 1);

  const stringifiedUserList = JSON.stringify(userList);

  await promises.writeFile(filePath, stringifiedUserList, 'utf8');
};

module.exports = { getAllUsers, addUser, getUser, updateUser, deleteUser };
