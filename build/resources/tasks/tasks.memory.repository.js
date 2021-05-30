"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.getTask = exports.addTask = exports.getAllTasks = void 0;
const tasks = [];
const getAllTasks = async () => tasks;
exports.getAllTasks = getAllTasks;
const addTask = async (taskData) => {
    const taskList = await getAllTasks();
    taskList.push(taskData);
    return taskData;
};
exports.addTask = addTask;
const getTask = async (id) => {
    const taskList = await getAllTasks();
    return taskList.find((task) => task.id.toString() === id);
};
exports.getTask = getTask;
const updateTask = async (task) => {
    const taskList = await getAllTasks();
    const idx = taskList.findIndex((listTask) => listTask.id.toString() === task.id);
    taskList[idx] = task;
    return task;
};
exports.updateTask = updateTask;
const deleteTask = async (id) => {
    const taskList = await getAllTasks();
    const idx = taskList.findIndex((listTask) => listTask.id.toString() === id);
    taskList.splice(idx, 1);
};
exports.deleteTask = deleteTask;
