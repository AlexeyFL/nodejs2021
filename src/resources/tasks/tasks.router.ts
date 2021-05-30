import { v4 as uuid } from 'uuid';
import { Router } from 'express';

import Task from './tasks.model';

import * as tasksService from './tasks.service';

const router = Router({ mergeParams: true });

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

// delete task
router.route('/:id').delete(async (req, res) => {
  const taskId = req.params.id;
  await tasksService.deleteTask(taskId);

  res.status(204).json(null);
});

export default router;
