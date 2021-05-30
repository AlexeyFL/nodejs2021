"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUser = exports.addUser = exports.getAllUsers = void 0;
const users = [];
const getAllUsers = async () => users;
exports.getAllUsers = getAllUsers;
const addUser = async (userData) => {
    const userList = await getAllUsers();
    userList.push(userData);
    return userData;
};
exports.addUser = addUser;
const getUser = async (id) => {
    const userList = await getAllUsers();
    return userList.find((user) => user.id === id);
};
exports.getUser = getUser;
const updateUser = async (user) => {
    const userList = await getAllUsers();
    const idx = userList.findIndex((listUser) => listUser.id === user.id);
    userList[idx] = user;
    return user;
};
exports.updateUser = updateUser;
const deleteUser = async (id) => {
    const userList = await getAllUsers();
    const idx = userList.findIndex((listUser) => listUser.id === id);
    userList.splice(idx, 1);
};
exports.deleteUser = deleteUser;
