const tasksRepo = require('./tasks.memory.repository');

const getAllTasks = () => tasksRepo.getAllTasks();
const addTask = (board) => tasksRepo.addTask(board);
const getTask = (id) => tasksRepo.getTask(id);
const updateTask = (board) => tasksRepo.updateTask(board);
const deleteTask = (id) => tasksRepo.deleteTask(id);
const deleteBoardTask = (boardId) => tasksRepo.deleteBoardTask(boardId);

module.exports = { getAllTasks, addTask, getTask, updateTask, deleteTask, deleteBoardTask };
