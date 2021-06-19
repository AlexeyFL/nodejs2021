import { Router, Response, Request } from 'express';
import { Task } from '../../entity/Task';
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
} from '../../repositories/task';

const router = Router({ mergeParams: true });

// get all tasks
router.route('/').get(async (_req: Request, res: Response) => {
  const tasks = await getTasks();
  res.status(tasks ? 200 : 404).json(
    tasks.map(Task.toResponse)
  );
});
// get task
router.route('/:id').get(async (req: Request, res: Response) => {
  const taskId = req.params['id'];
  const task = await getTask(taskId);
  
  res.status(task ? 200 : 404).json(Task.toResponse(task));
});

// create new task
router.route('/').post(async (req: Request, res: Response) => {
  const { boardId } = req.params;
  const response = await createTask(boardId, req.body);
  res.status(201).json(response);
});

// update task by id
router.route('/:id').put(async (req: Request, res: Response) => {
  const { body } = req;
  const taskId = req.params['id'];

  const response = await updateTask(taskId, body);
  res.status(200).json(response);
});

// delete task
router.route('/:id').delete(async (req, res) => {
  const taskId = req.params.id;
  await deleteTask(taskId);

  res.status(204).json(null);
});

export default router;


/* import Express, { Router, Response, Request, NextFunction } from 'express';

import { CustomError } from '../../utils';

import Task from './tasks.model';

import * as tasksService from './tasks.service';

const router = Router({ mergeParams: true });

// get all tasks
router.route('/').get(async (_req: Request, res: Response) => {
  const tasks = await tasksService.getAllTasks();
  res.json(tasks.map(Task.toResponse)).status(200);
});

// get task by id
router.route('/:id').get(async (req, res, next: NextFunction) => {
  try {
    const taskId = req.params.id;
    const task = await tasksService.getTask(taskId);
    if (task) {
      res.status(200).json(Task.toResponse(task));
    } else {
      // res.status(404).send([]);
      throw new CustomError(404, 'Task does not exists');
    }
    next();
  } catch (error) {
    next(error);
  }
});

// update task by id
router.route('/:id').put(async (req: Request, res: Response) => {
  const { body } = req;
  const taskId = req.params['id'];

  const newTaskBody = await tasksService.updateTask({
    id: taskId,
    ...body,
  });

  res.json(newTaskBody);
});

// create new Task
router.route('/').post(async (req: Express.Request, res: Response) => {
  const { boardId } = req.params;
  console.log(boardId);
  const newTask = new Task({ ...req.body, boardId });
  tasksService.addTask(newTask);
  res.status(201).json(newTask);
});

// delete task
router.route('/:id').delete(async (req: Request, res: Response) => {
  const taskId = req.params['id'];
  await tasksService.deleteTask(taskId!);

  res.status(204).json(null);
});

export default router;
 */