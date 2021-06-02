import * as tasksRepo from'./tasks.memory.repository';
import Task from './tasks.model';

const getAllTasks = ():Promise<Task[]> => tasksRepo.getTasks();
const addTask = (board:Task):Promise<Task> => tasksRepo.add(board);
const getTask = (id:string):Promise<Task | null> => tasksRepo.getOneTask(id);
const updateTask = (board:Task):Promise<Task> => tasksRepo.update(board);
const deleteTask = (id:string):Promise<void> => tasksRepo.remove(id);

export { getAllTasks, addTask, getTask, updateTask, deleteTask };
