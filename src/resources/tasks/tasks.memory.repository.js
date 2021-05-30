const tasks = [];

const getAllTasks = async () => tasks;

const addTask = async (taskData) => {
  const taskList = await getAllTasks();

  taskList.push(taskData);

  return taskData;
};

const getTask = async (id) => {
  const taskList = await getAllTasks();

  return taskList.find((task) => task.id.toString() === id);
};

const updateTask = async (task) => {
  const taskList = await getAllTasks();

  const idx = taskList.findIndex(
    (listTask) => listTask.id.toString() === task.id
  );

  taskList[idx] = task;

  return task;
};

const deleteTask = async (id) => {
  const taskList = await getAllTasks();

  const idx = taskList.findIndex((listTask) => listTask.id.toString() === id);

  taskList.splice(idx, 1);

};

module.exports = { getAllTasks, addTask, getTask, updateTask, deleteTask };
