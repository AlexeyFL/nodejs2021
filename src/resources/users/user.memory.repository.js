const users = [];

const getAllUsers = async () => users;

const addUser = async (userData) => {
  const userList = await getAllUsers();

  userList.push(userData);

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

  return user;
};

const deleteUser = async (id) => {
  const userList = await getAllUsers();

  const idx = userList.findIndex((listUser) => listUser.id === id);

  userList.splice(idx, 1);

};

module.exports = { getAllUsers, addUser, getUser, updateUser, deleteUser };
