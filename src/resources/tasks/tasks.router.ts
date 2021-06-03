import Express,{ Router, Response, Request } from 'express';

import Task from './tasks.model';

import * as tasksService from './tasks.service';

const router = Router({ mergeParams: true });

// get all tasks
router.route('/').get(async (_req: Request, res: Response) => {
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

// update task by id
router.route('/:id').put(async (req:Request, res:Response) => {
  const { body } = req;
  const taskId = req.params['id'];

  const newTaskBody = await tasksService.updateTask({
    id: taskId,
    ...body,
  });

  res.json(newTaskBody);
});

// create new Task
router.route('/').post(async (req:Express.Request, res:Response) => {
  const {boardId} = req.params
  console.log(boardId)
  const newTask = new Task({ ...req.body, boardId });
  tasksService.addTask(newTask);
  res.status(201).json(newTask);
});

// delete task
router.route('/:id').delete(async (req:Request, res:Response) => {
  const taskId = req.params['id'];
  await tasksService.deleteTask(taskId!);

  res.status(204).json(null);
});

export default router;
