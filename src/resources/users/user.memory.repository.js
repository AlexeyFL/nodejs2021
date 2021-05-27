const users = [];
/**
 * Get all users.
 * @returns {Array}
 */
const getAllUsers = async () => users;
/**
 * Add user.
 * @param {Object} - json.
 * @returns {Object} - json.
 */
const addUser = async (userData) => {
  const userList = await getAllUsers();

  userList.push(userData);

  return userData;
};
/**
 * Get user by id.
 * @param {string}
 * @returns {Object} - json.
 */
const getUser = async (id) => {
  const userList = await getAllUsers();

  return userList.find((user) => user.id === id);
};
/**
 * Update user
 * @param {Object} - json.
 * @returns {Object} - json.
 */
const updateUser = async (user) => {
  const userList = await getAllUsers();

  const idx = userList.findIndex((listUser) => listUser.id === user.id);

  userList[idx] = user;

  return user;
};
/**
 * Delete user
 * @param {string}
 * @returns {Object} - json.
 */
const deleteUser = async (id) => {
  const userList = await getAllUsers();

  const idx = userList.findIndex((listUser) => listUser.id === id);

  userList.splice(idx, 1);

};

module.exports = { getAllUsers, addUser, getUser, updateUser, deleteUser };
