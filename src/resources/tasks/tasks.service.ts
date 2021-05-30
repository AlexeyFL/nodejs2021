import * as tasksRepo from'./tasks.memory.repository';

const getAllTasks = () => tasksRepo.getAllTasks();
const addTask = (board) => tasksRepo.addTask(board);
const getTask = (id) => tasksRepo.getTask(id);
const updateTask = (board) => tasksRepo.updateTask(board);
const deleteTask = (id) => tasksRepo.deleteTask(id);

export { getAllTasks, addTask, getTask, updateTask, deleteTask };
