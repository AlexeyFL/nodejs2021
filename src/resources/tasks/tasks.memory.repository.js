// @ts-check

/**
 * Array of tasks
 * @type {Array<Object>}
 */
const tasks = [];
/**
 * Returns all tasks.
 * @param {Object[]} - json.
 * @returns {Object}
 */
const getAllTasks = () => tasks;
/**
 * Add task to array.
 * @param {Object[]} - json.
 * @returns {Object}
 */
const addTask = async (taskData) => {
  const taskList = await getAllTasks();

  taskList.push(taskData);

  return taskData;
};
/**
 * Get task by id.
 * @param {string} - id.
 * @returns {Object} - json.
 */
const getTask = async (id) => {
  const taskList = await getAllTasks();

  return taskList.find((task) => task.id.toString() === id);
};
/**
 * Update task by id.
 * @param {Object} - json.
 * @returns {Object} - json.
 */
const updateTask = async (task) => {
  const taskList = await getAllTasks();

  const idx = taskList.findIndex(
    (listTask) => listTask.id.toString() === task.id
  );

  taskList[idx] = task;

  return task;
};
/**
 * Delete task by id.
 * @param {string} - json.
 * @returns {Object} - json.
 */
const deleteTask = async (id) => {
  const taskList = await getAllTasks();

  const idx = taskList.findIndex((listTask) => listTask.id.toString() === id);

  taskList.splice(idx, 1);
};
/**
 * Delete board by id.
 * @param {string} - json.
 * @returns {Object} - json.
 */
const deleteBoardTask = async (boardId) => {
  const taskList = await getAllTasks();
  return taskList.filter((task) => task.boardId.toString() !== boardId);
};

module.exports = {
  getAllTasks,
  addTask,
  getTask,
  updateTask,
  deleteTask,
  deleteBoardTask,
};
