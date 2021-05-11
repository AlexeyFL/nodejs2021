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

module.exports = { getAllUsers, addUser };
