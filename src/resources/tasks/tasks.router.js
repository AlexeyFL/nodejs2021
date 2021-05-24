const uuid = require('uuid').v4;
const router = require('express').Router({ mergeParams: true });
const Task = require('./tasks.model');
const tasksService = require('./tasks.service');

// get all tasks
router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAllTasks();
  res.json(tasks.map(Task.toResponse)).status(200);
});

// get task by id
router.route('/:id').get(async (req, res) => {
  const taskId = req.params.id;
  const task = await tasksService.getTask(taskId);
  if (task) {
    res.status(200).json(Task.toResponse(task));
  } else {
    res.status(404).send([]);
  }
});

// update user by id
router.route('/:id').put(async (req, res) => {
  const { body } = req;
  const taskId = req.params.id;

  const newTaskBody = await tasksService.updateTask({
    ...body,
    id: taskId,
  });

  res.json(Task.toResponse(newTaskBody));
});

// create new Task
router.route('/').post(async (req, res) => {
  const newTask = new Task({
    id: uuid(),
    title: req.query.title,
    order: req.query.order,
    description: req.query.description,
    userId: req.query.userId,
    boardId: req.params.boardId,
    columnId: req.query.columnId,
  });

  tasksService.addTask(newTask);
  res.status(201).json(newTask.getTask());
});

// const middleware = {
//   deleteTask: async (req, res, next) => {
//     const taskId = req.params.id;
//     console.log(taskId)
//     await tasksService.deleteTask(taskId);
//     next();
//     // res.status(204).json(null);
//   },
//   deleteBoardTask: async (req, res, next) => {
//     const { boardId } = req.params;
//     console.log(boardId)
//     await tasksService.deleteBoardTask(boardId);
//     next();
//     // res.status(204).json(null);
//   },
// };

// router.route('/:id').delete([
//   middleware.deleteTask,
//   middleware.deleteBoardTask,
//   (req, res) => {
//     res.status(204).json(null);
//   },
// ]);

// delete task
router.route('/:id').delete(async (req, res) => {
  const taskId = req.params.id;
  await tasksService.deleteTask(taskId);
  res.status(204).json(null);
});

module.exports = router;
